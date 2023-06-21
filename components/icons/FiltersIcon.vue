
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6.5H9m6.5 0h-2M2.5 12H5m10.5 0H9" :stroke="color" stroke-linecap="round"/><path d="M13 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM9 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h9m9 0h-3M3 16h3m15 0h-9" :stroke="color" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="8" r="3" :stroke="color" stroke-width="2"/><circle cx="9" cy="16" r="3" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'filtersIcon',
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