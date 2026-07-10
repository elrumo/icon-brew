
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.808 10.551s-2.081-.094-3.308-.55c-1.654-.617-2.756-1.655-2.756-1.655" :stroke="color"/><path d="M15.5 10.013c-1.102.55-3.032.55-4.961.55-1.103 0-2.757 3.033-4.41 2.206-1.654-.827-1.654-1.103-1.654-3.308 0-2.74 2.163-4.961 5.512-4.961 2.64 0 4.486 2.205 4.962 3.308.476 1.102 1.654 1.653.551 2.205z" :stroke="color"/><path d="M3 5.5l.5.5m-1 2.5H3m-.5 3H3" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14.5s-3.679-.378-5.5-1c-2.455-.839-4-2-4-2" :stroke="color" stroke-width="2"/><path d="M3.5 6.5L4 7m-2 4h.5M2 15.5h.5" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M21.042 14c-1.633.852-4.144.5-7 .5-1.633 0-3.552 4.278-6 3C5.593 16.222 5.5 16.408 5.5 13c0-4.235 3.042-7 7.542-7 3.909 0 6.795 3.296 7.5 5 .705 1.704 2.132 2.148.5 3z" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'helmet-with-lightsIcon',
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