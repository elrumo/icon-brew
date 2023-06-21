
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196850)"><g clip-path="url(#clip1_489_196850)"><path d="M13.243 13.243L4.757 4.757m0 0v5.657m0-5.657h5.657" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_196850"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196850"><path :fill="color" transform="matrix(1 0 0 -1 0 18)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191229)"><g clip-path="url(#clip1_489_191229)"><path d="M18.364 18.364L5.636 5.636m0 0V15m0-9.364H15" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191229"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191229"><path :fill="color" transform="matrix(1 0 0 -1 0 24)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-up-leftIcon',
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