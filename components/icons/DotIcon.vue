
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198774)"><path d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_198774"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191322)"><path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191322"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'dotIcon',
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