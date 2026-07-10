
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200408)" :stroke="color"><path d="M2.5 6.5c0-.943 0-1.414.293-1.707C3.086 4.5 3.557 4.5 4.5 4.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-5zm3 7c0-2-1-3-3-3m0-3c2 0 3-1 3-3m7 0c0 2 1 3 3 3m0 3c-2 0-3 1-3 3"/><path d="M10.75 9a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_200408"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191405)" :stroke="color" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 18c0-2.667-1.333-4-4-4m0-4c2.667 0 4-1.333 4-4m8 0c0 2.667 1.333 4 4 4m0 4c-2.667 0-4 1.333-4 4"/><path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191405"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'money-noteIcon',
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