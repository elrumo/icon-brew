
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198160)" :stroke="color"><circle cx="9" cy="9" r="6.5"/><path d="M12 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></g><defs><clipPath id="clip0_489_198160"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191286)" :stroke="color" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></g><defs><clipPath id="clip0_489_191286"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-circleIcon',
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