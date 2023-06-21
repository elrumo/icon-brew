
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198613)"><path d="M2.5 4.5c0-.943 0-1.414.293-1.707C3.086 2.5 3.557 2.5 4.5 2.5h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293C2.5 6.914 2.5 6.443 2.5 5.5v-1zm0 8c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1zm8-8c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1zm0 8c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198613"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191313)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></g><defs><clipPath id="clip0_489_191313"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'dashboardIcon',
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