
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" :stroke="color"/><path d="M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :stroke="color"/><path d="M9 7.194V2.5m0 13v-4.694M7.194 9H2.5m13 0h-4.694m2.888-4.694l-3.25 3.25m-2.888 2.888l-3.25 3.25m6.138-3.25l3.25 3.25M7.556 7.556l-3.25-3.25" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7" :stroke="color" stroke-width="2"/><circle cx="12" cy="12" r="2" :stroke="color" stroke-width="2"/><path d="M12 9.5V3m0 18v-6.5M9.5 12H3m18 0h-6.5m4-6.5L14 10m-4 4l-4.5 4.5M14 14l4.5 4.5M10 10L5.5 5.5" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'rudder-wheelIcon',
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