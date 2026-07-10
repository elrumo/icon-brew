
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198548)" :stroke="color" stroke-linecap="round"><circle cx="9" cy="9" r="6.5"/><path d="M7 7l4 4m0-4l-4 4" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198548"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191309)" :stroke="color" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6m0-6l-6 6" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191309"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'cross-with-circleIcon',
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