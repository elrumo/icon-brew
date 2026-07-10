
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201591)"><path d="M2.486 9.5h11c.943 0 1.415 0 1.708-.293.292-.293.292-.764.292-1.707v-1c0-.943 0-1.414-.292-1.707-.293-.293-.765-.293-1.708-.293h-2.27m-8.73 5L6 13.5m-3.514-4L6 5.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201591"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191463)"><path d="M2.5 13H17c1.886 0 2.828 0 3.414-.586C21 11.828 21 10.886 21 9c0-1.886 0-2.828-.586-3.414C19.828 5 18.886 5 17 5h-2.5m-12 8l5 6m-5-6l5-6" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191463"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'return-leftIcon',
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