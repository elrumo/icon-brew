
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196468)"><g clip-path="url(#clip1_489_196468)"><path d="M4.757 4.757l8.486 8.486m0 0V7.585m0 5.656H7.586" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_196468"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196468"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191206)"><g clip-path="url(#clip1_489_191206)"><path d="M5.636 5.636l12.728 12.728m0 0V9m0 9.364H9" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191206"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191206"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-bottom-rightIcon',
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