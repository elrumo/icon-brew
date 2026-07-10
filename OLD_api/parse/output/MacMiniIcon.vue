
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 8c0-.943 0-1.414-.293-1.707C14.914 6 14.443 6 13.5 6h-9c-.943 0-1.414 0-1.707.293C2.5 6.586 2.5 7.057 2.5 8v2c0 .943 0 1.414.293 1.707C3.086 12 3.557 12 4.5 12h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V8z" :stroke="color" stroke-linecap="round"/><path d="M13.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11c0-1.886 0-2.828-.586-3.414C19.828 7 18.886 7 17 7H7c-1.886 0-2.828 0-3.414.586C3 8.172 3 9.114 3 11v1.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h10c1.886 0 2.828 0 3.414-.586C21 15.328 21 14.386 21 12.5V11z" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M18.5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'mac-miniIcon',
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