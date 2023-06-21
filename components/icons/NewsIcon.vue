
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200551)" :stroke="color" stroke-linecap="round"><path d="M5 12V4.5c0-.943 0-1.414.293-1.707C5.586 2.5 6.057 2.5 7 2.5h6.544c.947 0 1.42 0 1.713.294.293.295.291.768.287 1.714l-.036 9c-.004.94-.006 1.41-.298 1.7-.293.292-.763.292-1.702.292H4.5c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707V6.2"/><path d="M8 5h4.5v3H8V5z" stroke-linejoin="round"/><path d="M12.5 12.8H8m0-2.3h4.5"/></g><defs><clipPath id="clip0_489_200551"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191413)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M6.5 15.536V7c0-1.886 0-2.828.586-3.414C7.672 3 8.614 3 10.5 3H17c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V8.4m13.5 6.1h-6m6 3h-6"/><path d="M10 8.5c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h3c.943 0 1.414 0 1.707.293C17 7.086 17 7.557 17 8.5V9c0 .943 0 1.414-.293 1.707C16.414 11 15.943 11 15 11h-3c-.943 0-1.414 0-1.707-.293C10 10.414 10 9.943 10 9v-.5z"/></g><defs><clipPath id="clip0_489_191413"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'newsIcon',
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