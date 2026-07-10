
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199955)"><path d="M7.759 10.058H5L11.345 2.5 10.24 7.942H13L6.655 15.5l1.104-5.442z" :stroke="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199955"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191385)"><path d="M10.793 13.465H7L15.724 3l-1.517 7.535H18L9.276 21l1.517-7.535z" :stroke="color" stroke-width="2" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191385"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'lightningIcon',
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