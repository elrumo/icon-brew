
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201601)"><g clip-path="url(#clip1_489_201601)"><path d="M15.514 9.5h-11c-.943 0-1.415 0-1.708-.293-.292-.293-.292-.764-.292-1.707v-1c0-.943 0-1.414.292-1.707C3.1 4.5 3.571 4.5 4.514 4.5h2.27m8.73 5L12 13.5m3.514-4L12 5.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_201601"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_201601"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191464)"><g clip-path="url(#clip1_489_191464)"><path d="M21.5 13H7c-1.886 0-2.828 0-3.414-.586C3 11.828 3 10.886 3 9c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h2.5m12 8l-5 6m5-6l-5-6" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191464"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191464"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'return-rightIcon',
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