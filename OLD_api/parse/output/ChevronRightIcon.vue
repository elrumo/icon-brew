
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198043)"><g clip-path="url(#clip1_489_198043)"><path d="M6.5 14l3.586-3.586c.666-.666 1-1 1-1.414 0-.414-.334-.748-1-1.414L6.5 4" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_198043"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198043"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191280)"><g clip-path="url(#clip1_489_191280)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20l5.172-5.172c1.333-1.333 2-2 2-2.828 0-.828-.667-1.495-2-2.828L9 4"/><path d="M9 20l5.172-5.172c1.333-1.333 2-2 2-2.828 0-.828-.667-1.495-2-2.828L9 4"/></g></g><defs><clipPath id="clip0_489_191280"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191280"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-rightIcon',
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