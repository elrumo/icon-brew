
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round" stroke-linejoin="round"><rect height="14" rx="1" width="14" x="2" y="2"/><path d="M5 8h8m-8 4h4.8M2 4.5h14"/></g></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect height="18" rx="2" width="18" x="3" y="3"/><path d="M3 7h18M7 11.5h10M7 16h6"/></g></svg>
</template>


<script>
    export default {
        name: 'website-with-textIcon',
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