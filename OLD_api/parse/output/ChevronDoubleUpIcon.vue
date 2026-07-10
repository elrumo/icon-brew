
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197990)"><path d="M14 9l-3.586-3.586c-.666-.666-1-1-1.414-1-.414 0-.748.334-1.414 1L4 9m10 5l-3.586-3.586c-.666-.666-1-1-1.414-1-.414 0-.748.334-1.414 1L4 14" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197990"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191277)"><path d="M20 12l-5.172-5.172c-1.333-1.333-2-2-2.828-2-.828 0-1.495.667-2.828 2L4 12m16 8l-5.172-5.172c-1.333-1.333-2-2-2.828-2-.828 0-1.495.667-2.828 2L4 20" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191277"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-double-upIcon',
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