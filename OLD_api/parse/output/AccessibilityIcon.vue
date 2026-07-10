
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :stroke="color"/><path d="M6 7.5h3m3 0H9m0 0v2.692m0 0L6.75 12.5M9 10.192l2.25 2.308" :stroke="color" stroke-linecap="round"/><path d="M9.75 5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2"/><path d="M8 10h4m4 0h-4m0 0v3.5m0 0l-3 3m3-3l3 3" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M13.25 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'accessibilityIcon',
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