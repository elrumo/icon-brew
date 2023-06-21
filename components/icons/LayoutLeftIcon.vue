
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5v7m5.75 3.028h-5c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414v-5c0-1.886 0-2.829.586-3.414.586-.586 1.528-.586 3.414-.586h5c1.886 0 2.828 0 3.414.586.586.585.586 1.528.586 3.414v5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586z" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 7v10m7.5 4H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21z" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'layout-leftIcon',
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