
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="3" :stroke="color"/><path d="M9 3.583V2.5m0 13v-1.083M3.583 9H2.5m13 0h-1.083m-.723-4.694l-.722.722m-7.944 7.944l-.722.722m8.666-.722l.722.722M5.028 5.028l-.722-.722" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" :stroke="color" stroke-width="2"/><path d="M12 4.5V3m0 18v-1.5M4.5 12H3m18 0h-1.5m-1-6.5l-1 1m-11 11l-1 1m12-1l1 1m-12-12l-1-1" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'brightness-upIcon',
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