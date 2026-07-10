
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201572)"><g clip-path="url(#clip1_489_201572)"><path d="M9.5 15.514v-11c0-.943 0-1.415-.293-1.708-.293-.292-.764-.292-1.707-.292h-1c-.943 0-1.414 0-1.707.292C4.5 3.1 4.5 3.571 4.5 4.514v2.27m5 8.73l4-3.514m-4 3.514L5.5 12" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_201572"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_201572"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191462)"><g clip-path="url(#clip1_489_191462)"><path d="M13 21.5V7c0-1.886 0-2.828-.586-3.414C11.828 3 10.886 3 9 3c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v2.5m8 12l6-5m-6 5l-6-5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191462"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191462"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'return-downIcon',
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