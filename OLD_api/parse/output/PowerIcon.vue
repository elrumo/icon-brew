
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201238)" :stroke="color" stroke-linecap="round"><path d="M9 2.5V8" stroke-linejoin="round"/><path d="M4.585 4.506a6.3 6.3 0 1 0 8.83 0"/></g><defs><clipPath id="clip0_489_201238"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191442)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M12 3v8" stroke-linejoin="round"/><path d="M5.693 5.58a9 9 0 1 0 12.615 0"/></g><defs><clipPath id="clip0_489_191442"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'powerIcon',
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