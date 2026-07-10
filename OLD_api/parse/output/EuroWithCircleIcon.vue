
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198926)" :stroke="color"><path d="M15.25 9.25a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0z"/><path d="M11 6.54c-.504-.477-1.143-.762-1.838-.762-1.625 0-2.941 1.554-2.941 3.472s1.316 3.472 2.94 3.472c.696 0 1.335-.285 1.84-.761M9.528 9.944H5.097M9.53 8.556H5.097" stroke-width=".75" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198926"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191333)" :stroke="color"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke-width="2"/><path d="M15 8.097C14.275 7.41 13.354 7 12.353 7c-2.34 0-4.235 2.239-4.235 5s1.896 5 4.235 5c1.002 0 1.922-.41 2.647-1.097M12.882 13H6.5m6.382-2H6.5" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191333"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'euro-with-circleIcon',
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