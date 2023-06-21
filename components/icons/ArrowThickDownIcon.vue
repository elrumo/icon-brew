
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196806)"><path d="M7.586 14.586l-1.414-1.414c-.578-.579-.868-.867-1.02-1.235C5 11.569 5 11.16 5 10.343V4.414c0-1.027 0-1.541.309-1.669.308-.128.672.236 1.398.962l.879.879c.666.666 1 1 1.414 1 .414 0 .748-.334 1.414-1l.879-.879c.726-.726 1.09-1.09 1.398-.962.309.128.309.642.309 1.67v5.928c0 .818 0 1.226-.152 1.594-.153.368-.442.657-1.02 1.235l-1.414 1.414c-.666.666-1 1-1.414 1-.414 0-.748-.334-1.414-1z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196806"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191225)"><path d="M9.172 19.172l-1.415-1.415c-.867-.867-1.3-1.3-1.529-1.852C6 15.355 6 14.741 6 13.515v-9.1c0-1.028 0-1.542.309-1.67.308-.128.672.236 1.398.962l1.465 1.465c1.333 1.333 2 2 2.828 2 .828 0 1.495-.667 2.828-2l1.465-1.465c.726-.726 1.09-1.09 1.398-.962.309.128.309.642.309 1.67v9.1c0 1.226 0 1.84-.228 2.39-.229.552-.662.985-1.53 1.852l-1.414 1.415c-1.333 1.333-2 2-2.828 2-.828 0-1.495-.667-2.828-2z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191225"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-thick-downIcon',
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