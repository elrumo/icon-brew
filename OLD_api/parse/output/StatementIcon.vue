
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202267)" :stroke="color"><path d="M4.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h5c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-9c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293h-5c-.943 0-1.414 0-1.707.293C4.5 3.086 4.5 3.557 4.5 4.5z"/><path d="M7 11.5h3m-3-3h4m-4-3h4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_202267"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191498)" :stroke="color" stroke-width="2"><path d="M5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V7c0-1.886 0-2.828-.586-3.414C17.828 3 16.886 3 15 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7z"/><path d="M9.5 15.5H12m-2.5-4h5m-5-4h5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191498"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'statementIcon',
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