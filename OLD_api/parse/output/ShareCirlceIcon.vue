
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="6.5" :stroke="color"/><path d="M9.486 6.969v1.15c-2.938 0-2.67 2.59-2.67 2.59s.8-1.44 2.67-1.44v1.151L12 8.695 9.486 6.969z" :fill="color" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2"/><path d="M12.73 8.27v2.153c-5.5 0-5 4.846-5 4.846s1.5-2.692 5-2.692v2.154l4.707-3.23-4.706-3.232z" :fill="color" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'share-cirlceIcon',
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