
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :stroke="color"/><path d="M2.5 9v2.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h5c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V9M9 9V6m0 3H5.5" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2"/><path d="M3 12v5c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17v-5m-9 0V8m0 4H7" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'alarm-clock-2Icon',
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