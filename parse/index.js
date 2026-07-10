const { ParseServer } = require('parse-server');
const S3Adapter = require('@parse/s3-files-adapter');

const required = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

// Credentials are read from the standard AWS_ACCESS_KEY_ID /
// AWS_SECRET_ACCESS_KEY env vars via the AWS SDK's default credential
// provider chain, per @parse/s3-files-adapter's guidance. S3_ACCESS_KEY /
// S3_SECRET_KEY are deleted afterwards so @parse/s3-files-adapter doesn't
// also pick them up itself and log its legacy-credentials deprecation warning.
process.env.AWS_ACCESS_KEY_ID ??= required('S3_ACCESS_KEY');
process.env.AWS_SECRET_ACCESS_KEY ??= required('S3_SECRET_KEY');
delete process.env.S3_ACCESS_KEY;
delete process.env.S3_SECRET_KEY;

const filesAdapter = new S3Adapter({
  bucket: required('S3_BUCKET'),
  region: process.env.S3_REGION || 'us-east-1',
  bucketPrefix: process.env.S3_BUCKET_PREFIX || '',
  directAccess: true,
  baseUrl: process.env.S3_BASE_URL,
  baseUrlDirect: true,
  globalCacheControl: process.env.S3_CACHE_CONTROL || 'public, max-age=31536000',
  s3overrides: {
    endpoint: required('S3_ENDPOINT'),
    region: process.env.S3_REGION || 'us-east-1',
    forcePathStyle: true,
  },
});

ParseServer.startApp({
  databaseURI: required('PARSE_SERVER_DATABASE_URI'),
  appId: required('PARSE_APP_ID'),
  masterKey: required('PARSE_MASTER_KEY'),
  clientKey: process.env.PARSE_CLIENT_KEY,
  // The app's Parse SDK usage (both client and server-side) calls
  // `Parse.initialize(appId, clientKey)`, but the SDK's second argument is
  // actually the javascriptKey slot, not clientKey. Mirror the same value
  // here so those calls authenticate correctly.
  javascriptKey: process.env.PARSE_CLIENT_KEY,
  serverURL: required('PARSE_SERVER_URL'),
  publicServerURL: process.env.PARSE_PUBLIC_URL || required('PARSE_SERVER_URL'),
  // Master key is used from outside this container (external Parse Dashboard,
  // migration scripts), so allow any IP by default. Restrict via
  // PARSE_MASTER_KEY_IPS (comma-separated) if you want to lock this down.
  masterKeyIps: process.env.PARSE_MASTER_KEY_IPS
    ? process.env.PARSE_MASTER_KEY_IPS.split(',')
    : ['0.0.0.0/0', '::0'],
  allowClientClassCreation: false,
  mountPath: process.env.PARSE_MOUNT_PATH || '/parse',
  port: Number(process.env.PORT) || 1337,
  host: '0.0.0.0',
  filesAdapter,
  // Pin the options below to their documented future defaults to silence
  // parse-server's deprecation warnings about upcoming default changes.
  fileUpload: {
    enableForPublic: false,
    enableForAnonymousUser: false,
    enableForAuthenticatedUser: true,
    allowedFileUrlDomains: [],
  },
  pages: {
    encodePageParamHeaders: true,
  },
  readOnlyMasterKeyIps: ['127.0.0.1', '::1'],
  requestComplexity: {
    includeDepth: 10,
    includeCount: 100,
    subqueryDepth: 10,
    queryDepth: 10,
    graphQLDepth: 20,
    graphQLFields: 200,
    batchRequestLimit: 100,
  },
  protectedFieldsOwnerExempt: false,
  protectedFieldsTriggerExempt: true,
  protectedFieldsSaveResponseExempt: false,
  installation: {
    duplicateDeviceTokenActionEnforceAuth: true,
  },
}).then(() => {
  console.log('Parse Server running');
}).catch((error) => {
  console.error('Failed to start Parse Server', error);
  process.exit(1);
});
