
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197966)"><path d="M9 4L5.414 7.586c-.666.666-1 1-1 1.414 0 .414.334.748 1 1.414L9 14m5-10l-3.586 3.586c-.666.666-1 1-1 1.414 0 .414.334.748 1 1.414L14 14" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197966"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191275)"><path d="M12 4L6.828 9.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L12 20m8-16l-5.172 5.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L20 20" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191275"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-double-leftIcon',
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