
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" :stroke="color"/><path d="M12.511 8.082a4.019 4.019 0 0 0-1.593-1.593c-.625-.342-.938-.513-1.428-.223C9 6.556 9 7.038 9 8c0 .943 0 1.414.293 1.707C9.586 10 10.057 10 11 10c.962 0 1.443 0 1.734-.49.29-.49.12-.803-.223-1.428z" :fill="color"/><path d="M7.29 2.767c.71-.255 2.71-.255 3.42 0M3.5 5.5c.09-.19.784-.849 1.018-.968" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 13.75a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0z" :stroke="color" stroke-width="2"/><path d="M16.636 12.025a5.045 5.045 0 0 0-2.688-2.688c-.703-.295-1.055-.443-1.501-.147C12 9.487 12 9.973 12 10.946v1.027c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h1.027c.973 0 1.459 0 1.756-.447.296-.447.148-.798-.147-1.501z" :fill="color"/><path d="M9.5 3.372c2.047-.496 3.142-.496 5 0M4.317 7.038c.204-.476.906-1.246 1.45-1.45" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'algoliaIcon',
        props: {
            size: {
                type: Number,
                required: false,
                default: 24
            },
            color: {
                type: String,
                required: false,
                default: "currentColor"
            }
        }
    }
</script>