
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4.5h9.5M6 9h9.5M6 13.5h9.5" :stroke="color" stroke-linecap="round"/><path d="M2.833 3.833L3.5 4.5l-.667.667m0 3.166L3.5 9l-.667.667m0 3.166l.667.667-.667.667" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5H21M7.5 12H21M7.5 19H21" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M3 4l1 1-1 1m0 5l1 1-1 1m0 5l1 1-1 1" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'categoriesIcon',
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