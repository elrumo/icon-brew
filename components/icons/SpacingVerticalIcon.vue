
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 15.5h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-9c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1m-13 13h1c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-9c0-.943 0-1.414-.293-1.707C4.914 2.5 4.443 2.5 3.5 2.5h-1M9 6v6" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21h-.5c-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7c0-1.886 0-2.828.586-3.414C17.672 3 18.614 3 20.5 3h.5M3 21h.5c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V7c0-1.886 0-2.828-.586-3.414C6.328 3 5.386 3 3.5 3H3m9 5v8" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'spacing-verticalIcon',
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