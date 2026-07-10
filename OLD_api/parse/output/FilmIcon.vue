
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5c0-.943 0-1.414.293-1.707C3.086 3.5 3.557 3.5 4.5 3.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v7c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-7z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 3.5V7m0 7V9m7-5.5V7m0 7v-3M2.25 7H5.5m0 0v2m0 0h7m0 0V7m0 2v2M2.25 11H5.5m7 0h3.25M12.5 7h3.25" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8c0-1.886 0-2.828.586-3.414C4.172 4 5.114 4 7 4h10c1.886 0 2.828 0 3.414.586C21 5.172 21 6.114 21 8v8c0 1.886 0 2.828-.586 3.414C19.828 20 18.886 20 17 20H7c-1.886 0-2.828 0-3.414-.586C3 18.828 3 17.886 3 16V8z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 4v5.5M7 20v-8m10-8v5.5M17 20v-5.5m-14-5h4m0 0V12m0 0h10M3 14.5h4m10 0h4m-4 0v-5m0 0h4" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'filmIcon',
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