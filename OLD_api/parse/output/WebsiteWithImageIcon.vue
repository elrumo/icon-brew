
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5c0-.943 0-1.414.293-1.707S3.557 2.5 4.5 2.5h9c.943 0 1.414 0 1.707.293s.293.764.293 1.707v9c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293S2.5 14.443 2.5 13.5z"/><path d="M4.5 9c0-.943 0-1.414.293-1.707S5.557 7 6.5 7s1.414 0 1.707.293S8.5 8.057 8.5 9v2c0 .943 0 1.414-.293 1.707S7.443 13 6.5 13s-1.414 0-1.707-.293S4.5 11.943 4.5 11zM3 5h12m-4 5h1.5M11 13h1.5M11 7h2.5"/></g></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect height="18" rx="2" width="18" x="3" y="3"/><path d="M6.5 11.5c0-.943 0-1.414.293-1.707S7.557 9.5 8.5 9.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v4c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S6.5 16.443 6.5 15.5zM3 6h18m-6 4h2m-2 7h.8m-.8-3.5h2"/></g></svg>
</template>


<script>
    export default {
        name: 'website-with-imageIcon',
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