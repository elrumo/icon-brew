
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202358)"><g clip-path="url(#clip1_489_202358)"><path d="M15.5 9h-13m0 0l6-6m-6 6l6 6m-6 0V3" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_202358"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202358"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191504)"><g clip-path="url(#clip1_489_191504)"><path d="M21 12H3m0 0l9-9m-9 9l9 9m-9 0V3" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191504"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191504"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tab-leftIcon',
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