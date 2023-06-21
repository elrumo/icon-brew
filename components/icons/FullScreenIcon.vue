
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199261)"><path d="M2.5 11.625V13.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h1.875M2.5 6.375V4.5c0-.943 0-1.414.293-1.707C3.086 2.5 3.557 2.5 4.5 2.5h1.875M15.5 6.375V4.5c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293h-1.875m3.875 9.125V13.5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1.875" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199261"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191351)"><path d="M3 15.375V17c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h1.625M3 8.625V7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h1.625M21 8.625V7c0-1.886 0-2.828-.586-3.414C19.828 3 18.886 3 17 3h-1.625M21 15.375V17c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21h-1.625" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191351"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'full-screenIcon',
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