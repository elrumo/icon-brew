
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201544)"><path d="M4.5 11.5v-5m7-2h-5m7 2v5m-2 2h-5m-4-9c0-.943 0-1.414.293-1.707C3.086 2.5 3.557 2.5 4.5 2.5c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293C2.5 5.914 2.5 5.443 2.5 4.5zm0 9c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707zm9 0c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707zm0-9c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707z" :stroke="color"/></g><defs><clipPath id="clip0_489_201544"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191460)" :stroke="color" stroke-width="2"><path d="M6 15V9m9-3H9m9 3v6m-3 3H9"/><rect x="3" y="3" width="6" height="6" rx="2"/><rect x="3" y="15" width="6" height="6" rx="2"/><rect x="15" y="15" width="6" height="6" rx="2"/><rect x="15" y="3" width="6" height="6" rx="2"/></g><defs><clipPath id="clip0_489_191460"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'rectangle-with-blocksIcon',
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