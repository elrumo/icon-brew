
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202784)"><g clip-path="url(#clip1_489_202784)" :stroke="color" stroke-linecap="round"><path d="M6 9h9m0 0l-3.134 3.333M15 9l-3.134-3.333" stroke-linejoin="round"/><path d="M7.667 3H5c-.943 0-1.414 0-1.707.293C3 3.586 3 4.057 3 5v8c0 .943 0 1.414.293 1.707C3.586 15 4.057 15 5 15h2.667"/></g></g><defs><clipPath id="clip0_489_202784"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202784"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191527)"><g clip-path="url(#clip1_489_191527)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M7.5 12H21m0 0l-4.701 5m4.7-5l-4.7-5" stroke-linejoin="round"/><path d="M10 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h3"/></g></g><defs><clipPath id="clip0_489_191527"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191527"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tray-and-arrow-rightIcon',
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