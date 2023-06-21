
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5v7m13-7v7M8 6h2c.943 0 1.414 0 1.707.293C12 6.586 12 7.057 12 8v2c0 .943 0 1.414-.293 1.707C11.414 12 10.943 12 10 12H8c-.943 0-1.414 0-1.707-.293C6 11.414 6 10.943 6 10V8c0-.943 0-1.414.293-1.707C6.586 6 7.057 6 8 6z" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7v10M3 7v10m8.5-9.5h1c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-1c-1.886 0-2.828 0-3.414-.586C7.5 15.328 7.5 14.386 7.5 12.5v-1c0-1.886 0-2.828.586-3.414C8.672 7.5 9.614 7.5 11.5 7.5z" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'padding-horizontalIcon',
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