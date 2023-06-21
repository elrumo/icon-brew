
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199103)"><path d="M5 15.5v-7m0 0v-4c0-.943 0-1.414.293-1.707C5.586 2.5 6.057 2.5 7 2.5h4.865c.924 0 1.385 0 1.52.288s-.16.643-.752 1.352l-.6.72c-.255.306-.382.459-.382.64s.127.334.383.64l.6.72c.59.71.886 1.064.751 1.352-.135.288-.596.288-1.52.288H5z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199103"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191341)"><path d="M6 21V11m0 0V5c0-.943 0-1.414.293-1.707C6.586 3 7.057 3 8 3h9.586c1.027 0 1.541 0 1.669.309.128.308-.236.672-.962 1.398l-1.586 1.586c-.333.333-.5.5-.5.707 0 .207.167.374.5.707l1.586 1.586c.726.726 1.09 1.09.962 1.398-.128.309-.642.309-1.67.309H6z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191341"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'flagIcon',
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