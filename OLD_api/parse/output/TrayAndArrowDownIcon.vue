
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202751)" :stroke="color" stroke-linecap="round"><path d="M9 3v8m0 0L5.667 7.866M9 11l3.333-3.134" stroke-linejoin="round"/><path d="M3 10.333V13c0 .943 0 1.414.293 1.707C3.586 15 4.057 15 5 15h8c.943 0 1.414 0 1.707-.293C15 14.414 15 13.943 15 13v-2.667"/></g><defs><clipPath id="clip0_489_202751"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191525)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M12 3v12.5m0 0l-5-4.701m5 4.701l5-4.701" stroke-linejoin="round"/><path d="M3 14v3c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17v-3"/></g><defs><clipPath id="clip0_489_191525"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tray-and-arrow-downIcon',
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