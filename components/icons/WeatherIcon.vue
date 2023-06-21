
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 9.875C5.75 8.011 7.205 6.5 9 6.5a3.19 3.19 0 0 1 2.422 1.125m-3.73 3.938c-.419-.994-1.373-1.688-2.484-1.688-1.495 0-2.708 1.26-2.708 2.813 0 1.553 1.213 2.812 2.708 2.812h8.125c1.197 0 2.167-1.007 2.167-2.25S14.53 11 13.333 11c-.647 0-1.228.295-1.625.762M3 7.959a3.476 3.476 0 0 1-.582-1.93C2.418 4.08 4.022 2.5 6 2.5c1.212 0 2.283.593 2.931 1.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.846 13.692a4.385 4.385 0 0 1 7.653-2.923m-5.034 5.115A3.655 3.655 0 1 0 7.115 21h10.962a2.923 2.923 0 1 0-2.193-4.857m-12-5.643a4.66 4.66 0 0 1 7.725-5.204" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'weatherIcon',
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