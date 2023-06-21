
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2.5h-3c-.943 0-1.414 0-1.707.293C2.5 3.086 2.5 3.557 2.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-3.235" :stroke="color" stroke-linecap="round"/><path d="M11 2.5h4.5m0 0V7m0-4.5L6 12m0 0V7.5M6 12h4.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17v-3" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M15 3h6m0 0v6m0-6L8 16m0 0v-6m0 6h6" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'scaleIcon',
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