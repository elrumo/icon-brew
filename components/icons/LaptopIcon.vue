
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12.5h13M4 12.5h10v-5c0-.943 0-1.414-.293-1.707C13.414 5.5 12.943 5.5 12 5.5H6c-.943 0-1.414 0-1.707.293C4 6.086 4 6.557 4 7.5v5z" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 16.5h18m-16 0h14v-6c0-1.886 0-2.828-.586-3.414C17.828 6.5 16.886 6.5 15 6.5H9c-1.886 0-2.828 0-3.414.586C5 7.672 5 8.614 5 10.5v6z" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'laptopIcon',
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