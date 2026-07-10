
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 4h-5c-1.886 0-2.828 0-3.414.586C2.5 5.172 2.5 6.114 2.5 8v2c0 1.886 0 2.828.586 3.414C3.672 14 4.614 14 6.5 14h5c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-1.886 0-2.828-.586-3.414C14.328 4 13.386 4 11.5 4z" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.09 4.5H8.91c-2.741 0-4.111 0-4.98.83a3 3 0 0 0-.1.1C3 6.298 3 7.668 3 10.41v3.18c0 2.741 0 4.111.83 4.98.032.035.065.068.1.1.869.83 2.239.83 4.98.83h6.18c2.741 0 4.111 0 4.98-.83a2.94 2.94 0 0 0 .1-.1c.83-.869.83-2.239.83-4.98v-3.18c0-2.741 0-4.111-.83-4.98a2.97 2.97 0 0 0-.1-.1c-.869-.83-2.239-.83-4.98-.83z" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'rectangleIcon',
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