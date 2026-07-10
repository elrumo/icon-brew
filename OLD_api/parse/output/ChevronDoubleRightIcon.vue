
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197978)"><path d="M9 14l3.586-3.586c.666-.666 1-1 1-1.414 0-.414-.334-.748-1-1.414L9 4M4 14l3.586-3.586c.666-.666 1-1 1-1.414 0-.414-.334-.748-1-1.414L4 4" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197978"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191276)"><path d="M12 20l5.172-5.172c1.333-1.333 2-2 2-2.828 0-.828-.667-1.495-2-2.828L12 4M4 20l5.172-5.172c1.333-1.333 2-2 2-2.828 0-.828-.667-1.495-2-2.828L4 4" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191276"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chevron-double-rightIcon',
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