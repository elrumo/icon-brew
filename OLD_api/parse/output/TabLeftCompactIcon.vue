
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202379)"><path d="M14 9H4m0 0l5.187 5M4 9l5.187-5M4 4v10" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_202379"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191505)"><path d="M19 12H5m0 0l7.262 7M5 12l7.262-7M5 5v14" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191505"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tab-left-compactIcon',
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