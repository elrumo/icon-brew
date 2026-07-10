
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198627)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5c0-.943 0-1.414.293-1.707C3.086 2.5 3.557 2.5 4.5 2.5h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293C2.5 6.914 2.5 6.443 2.5 5.5v-1z" :fill="color"/><path d="M2.5 12.5c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1zm8-8c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1zm0 8c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1z"/></g><defs><clipPath id="clip0_489_198627"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191314)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 3 5.096 3 6.5 3c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 4.393 10 5.096 10 6.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 10 7.904 10 6.5 10c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 8.607 3 7.904 3 6.5z" :fill="color"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></g><defs><clipPath id="clip0_489_191314"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'dashboard-one-is-filledIcon',
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