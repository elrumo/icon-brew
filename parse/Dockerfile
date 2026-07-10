# syntax=docker/dockerfile:1
FROM node:22-slim

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY index.js ./

ENV NODE_ENV=production
EXPOSE 1337

CMD ["node", "index.js"]
