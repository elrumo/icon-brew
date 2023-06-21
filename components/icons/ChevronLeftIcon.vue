
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198022)"><g clip-path="url(#clip1_489_198022)"><path d="M11.5 4L7.914 7.586c-.666.666-1 1-1 1.414 0 .414.334.748 1 1.414L11.5 14" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_198022"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198022"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191279)"><g clip-path="url(#clip1_489_191279)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4L9.828 9.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L15 20"/><path d="M15 4L9.828 9.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L15 20"/></g></g><defs><clipPath id="clip0_489_191279"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191279"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-leftIcon',
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