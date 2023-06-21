
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201796)"><path d="M6.5 6.5H6c-.943 0-1.414 0-1.707.293C4 7.086 4 7.557 4 8.5v5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h6c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-5c0-.943 0-1.414-.293-1.707C13.414 6.5 12.943 6.5 12 6.5h-.5m-2.5 4v-8m0 0l2 2m-2-2l-2 2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201796"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191475)"><path d="M8 9H7c-.943 0-1.414 0-1.707.293C5 9.586 5 10.057 5 11v8c0 .943 0 1.414.293 1.707C5.586 21 6.057 21 7 21h10c.943 0 1.414 0 1.707-.293C19 20.414 19 19.943 19 19v-8c0-.943 0-1.414-.293-1.707C18.414 9 17.943 9 17 9h-1m-4 5V3m0 0l2.5 2.5M12 3L9.5 5.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191475"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'shareIcon',
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