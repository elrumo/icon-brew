
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198657)" :stroke="color"><path d="M7.5 8.5h-3c-.943 0-1.414 0-1.707.293-.293.293-.293.764-.293 1.707v3c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h3c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-3c0-.943 0-1.414-.293-1.707C8.914 8.5 8.443 8.5 7.5 8.5z"/><path d="M4.5 6V4.5c0-.943 0-1.414.293-1.707C5.086 2.5 5.557 2.5 6.5 2.5H8M15.5 6V4.5c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293H12m3.5 7.5v1.5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H12" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198657"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191316)" :stroke="color" stroke-width="2"><path d="M9 11H7c-1.886 0-2.828 0-3.414.586C3 12.172 3 13.114 3 15v2c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h2c1.886 0 2.828 0 3.414-.586C13 19.828 13 18.886 13 17v-2c0-1.886 0-2.828-.586-3.414C11.828 11 10.886 11 9 11z"/><path d="M5.5 7.5V7c0-1.886 0-2.828.586-3.414C6.672 3 7.614 3 9.5 3h.5m11 4.5V7c0-1.886 0-2.828-.586-3.414C19.828 3 18.886 3 17 3h-.5M21 14v.5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191316"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'display-zoomIcon',
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