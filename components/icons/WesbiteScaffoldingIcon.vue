
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6v7.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293H7M2.5 6V4.5c0-.943 0-1.414.293-1.707C3.086 2.5 3.557 2.5 4.5 2.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707V6m-13 0H7m8.5 0v7.5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H7M15.5 6H7m0 0v9.5" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8v11c0 .943 0 1.414.293 1.707C3.586 21 4.057 21 5 21h4M3 8V5c0-.943 0-1.414.293-1.707C3.586 3 4.057 3 5 3h14c.943 0 1.414 0 1.707.293C21 3.586 21 4.057 21 5v3M3 8h6m12 0v11c0 .943 0 1.414-.293 1.707C20.414 21 19.943 21 19 21H9M21 8H9m0 0v13" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'wesbite-scaffoldingIcon',
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