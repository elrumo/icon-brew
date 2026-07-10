
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199370)" :stroke="color"><path d="M13.5 2.5h-9c-.943 0-1.414 0-1.707.293C2.5 3.086 2.5 3.557 2.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-9c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293z"/><path d="M9 3v12M6 3v12m6-12v12m3-6H3m12-3H3m12 6H3" stroke-width=".5" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_199370"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191359)" :stroke="color"><path d="M17 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0-1.886 0-2.828-.586-3.414C19.828 3 18.886 3 17 3z" stroke-width="2"/><path d="M12 3v18M7.5 3v18m9-18v18m4.5-9H3m18-4.05H3m18 8.1H3" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191359"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'gridIcon',
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