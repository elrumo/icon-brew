
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199271)"><path d="M7 11l-4.5 4.5m0 0v-4m0 4h4M11 7l4.5-4.5m0 0v4m0-4h-4" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199271"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191352)"><path d="M9 15l-6 6m0 0v-5m0 5h5m7-12l6-6m0 0v5m0-5h-5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191352"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'full-screen-arrowIcon',
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