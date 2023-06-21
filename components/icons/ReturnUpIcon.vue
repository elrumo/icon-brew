
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201620)"><g clip-path="url(#clip1_489_201620)"><path d="M9.5 2.486v11c0 .943 0 1.415-.293 1.708-.293.292-.764.292-1.707.292h-1c-.943 0-1.414 0-1.707-.292-.293-.293-.293-.765-.293-1.708v-2.27m5-8.73L13.5 6m-4-3.514L5.5 6" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_201620"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_201620"><path :fill="color" transform="matrix(0 1 1 0 0 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191465)"><g clip-path="url(#clip1_489_191465)"><path d="M13 2.5V17c0 1.886 0 2.828-.586 3.414C11.828 21 10.886 21 9 21c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17v-2.5m8-12l6 5m-6-5l-6 5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191465"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191465"><path :fill="color" transform="matrix(0 1 1 0 0 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'return-upIcon',
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