
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196422)"><path d="M3.5 6.5V14c0 .943 0 1.414.293 1.707C4.086 16 4.557 16 5.5 16h7c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V6.5m-6.2-4H4.5c-.943 0-1.414 0-1.707.293C2.5 3.086 2.5 3.557 2.5 4.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707 0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293H8.3zM7 10h4" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196422"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191202)"><path d="M4 9v8c0 1.886 0 2.828.586 3.414C5.172 21 6.114 21 8 21h8c1.886 0 2.828 0 3.414-.586C20 19.828 20 18.886 20 17V9M6 9h12c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 7.398 21 6.932 21 6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 3 18.932 3 18 3H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 4.602 3 5.068 3 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 9 5.068 9 6 9zm3 4h6" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191202"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'archiveIcon',
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