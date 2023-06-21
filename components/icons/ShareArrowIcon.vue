
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.642 6v1.846C4.548 7.846 5.01 12 5.01 12s1.39-2.308 4.63-2.308v1.847L14 8.769 9.642 6z" :fill="color" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 6v3.385C4.246 9.385 5.018 17 5.018 17s2.316-4.23 7.718-4.23v3.384L20 11.077 12.736 6z" :fill="color" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'share-arrowIcon',
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