
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201528)"><path d="M7 9c0-.943 0-1.414.293-1.707C7.586 7 8.057 7 9 7c.943 0 1.414 0 1.707.293C11 7.586 11 8.057 11 9c0 .943 0 1.414-.293 1.707C10.414 11 9.943 11 9 11c-.943 0-1.414 0-1.707-.293C7 10.414 7 9.943 7 9zm8.5-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5l2 2m-2 6l2-2m6 2l-2-2m0-4l2-2" :stroke="color"/></g><defs><clipPath id="clip0_489_201528"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191459)" :stroke="color" stroke-width="2"><path d="M9 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 9 11.068 9 12 9c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 10.602 15 11.068 15 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 15 12.932 15 12 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 13.398 9 12.932 9 12z"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="5.5" cy="5.5" r="2.5"/><path d="M7.5 7.5l2 2m-2 7L9 15m7.5 1.5L15 15m0-6l1.5-1.5" stroke-linecap="square"/></g><defs><clipPath id="clip0_489_191459"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'rectangle-small-with-blocksIcon',
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