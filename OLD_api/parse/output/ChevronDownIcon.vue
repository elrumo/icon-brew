
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198002)"><g clip-path="url(#clip1_489_198002)"><path d="M4 6.5l3.586 3.586c.666.666 1 1 1.414 1 .414 0 .748-.334 1.414-1L14 6.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_198002"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198002"><path :fill="color" transform="rotate(180 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191278)"><g clip-path="url(#clip1_489_191278)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l5.172 5.172c1.333 1.333 2 2 2.828 2 .828 0 1.495-.667 2.828-2L20 9"/><path d="M4 9l5.172 5.172c1.333 1.333 2 2 2.828 2 .828 0 1.495-.667 2.828-2L20 9"/></g></g><defs><clipPath id="clip0_489_191278"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191278"><path :fill="color" transform="rotate(180 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-downIcon',
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