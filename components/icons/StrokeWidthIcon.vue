
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4h13" :stroke="color" stroke-linecap="round"/><path d="M3 8h12" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M3.5 13h11" :stroke="color" stroke-width="3" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M3.5 11.5h17" :stroke="color" stroke-width="3" stroke-linecap="round"/><path d="M4 18h16" :stroke="color" stroke-width="4" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'stroke-widthIcon',
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