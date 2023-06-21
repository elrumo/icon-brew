
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_203111)"><path d="M13.5 11.5l-3-5m1 7.5h-5m-2-2.5l3-5m-5 7c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707zm9 0c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707zM7 4.5c0-.943 0-1.414.293-1.707C7.586 2.5 8.057 2.5 9 2.5c.943 0 1.414 0 1.707.293C11 3.086 11 3.557 11 4.5c0 .943 0 1.414-.293 1.707C10.414 6.5 9.943 6.5 9 6.5c-.943 0-1.414 0-1.707-.293C7 5.914 7 5.443 7 4.5z" :stroke="color"/></g><defs><clipPath id="clip0_489_203111"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191545)" :stroke="color" stroke-width="2"><path d="M18 15l-3.5-6.5m.5 10H9M6 15l3.5-6.5"/><rect x="3" y="15" width="6" height="6" rx="2"/><rect x="15" y="15" width="6" height="6" rx="2"/><rect x="9" y="3" width="6" height="6" rx="2"/></g><defs><clipPath id="clip0_489_191545"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'triangle-with-blocksIcon',
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