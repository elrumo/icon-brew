
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196457)"><path d="M15 12.5l-4.657-4.657C9.187 6.687 8.61 6.11 7.873 5.804 7.14 5.5 6.322 5.5 4.687 5.5H3m12 7H9.5m5.5 0V7" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196457"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191205)"><path d="M21 16.5l-6.657-6.657c-1.156-1.156-1.734-1.734-2.47-2.039C11.14 7.5 10.322 7.5 8.687 7.5H3m18 9h-8m8 0v-8" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191205"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-bend-right-downIcon',
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