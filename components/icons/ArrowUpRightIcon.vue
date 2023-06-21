
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196879)"><g clip-path="url(#clip1_489_196879)"><path d="M4.757 13.243l8.486-8.486m0 0v5.657m0-5.657H7.586" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_196879"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196879"><path :fill="color" transform="rotate(-180 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191231)"><g clip-path="url(#clip1_489_191231)"><path d="M5.636 18.364L18.364 5.636m0 0V15m0-9.364H9" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191231"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191231"><path :fill="color" transform="rotate(-180 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-up-rightIcon',
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