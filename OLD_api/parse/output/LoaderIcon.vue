
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3.944V2.5m0 13v-1.444M3.944 9H2.5m13 0h-1.444m-.362-4.694l-1.083 1.083M5.39 12.61l-1.083 1.083m8.305-1.083l1.083 1.083M5.39 5.39L4.306 4.306" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V3m0 18v-2m-7-7H3m18 0h-2m-.5-6.5L17 7M7 17l-1.5 1.5M17 17l1.5 1.5M7 7L5.5 5.5" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'loaderIcon',
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