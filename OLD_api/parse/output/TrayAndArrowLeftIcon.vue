
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202763)"><g clip-path="url(#clip1_489_202763)" :stroke="color" stroke-linecap="round"><path d="M12 9H3m0 0l3.134-3.333M3 9l3.134 3.333" stroke-linejoin="round"/><path d="M10.333 15H13c.943 0 1.414 0 1.707-.293C15 14.414 15 13.943 15 13V5c0-.943 0-1.414-.293-1.707C14.414 3 13.943 3 13 3h-2.667"/></g></g><defs><clipPath id="clip0_489_202763"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202763"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191526)"><g clip-path="url(#clip1_489_191526)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M16.5 12H3m0 0l4.701-5m-4.7 5l4.7 5" stroke-linejoin="round"/><path d="M14 21h3c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0-1.886 0-2.828-.586-3.414C19.828 3 18.886 3 17 3h-3"/></g></g><defs><clipPath id="clip0_489_191526"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191526"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tray-and-arrow-leftIcon',
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