
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 15.5v-1c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1m-13-13v1c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-1M12 9H6" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21v-.5c0-1.886 0-2.828.586-3.414C4.172 16.5 5.114 16.5 7 16.5h10c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v.5M3 3v.5c0 1.886 0 2.828.586 3.414C4.172 7.5 5.114 7.5 7 7.5h10c1.886 0 2.828 0 3.414-.586C21 6.328 21 5.386 21 3.5V3m-5 9H8" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'spacing-horizontalIcon',
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