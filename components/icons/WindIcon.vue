
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 9.5S3.934 9 6 9c2.16 0 3.43.5 6 .5S16 8 15 6s-3.643-1.073-4 0M5.5 3.5c1-1.5 2.5-1 3 0s0 2.875-2 2.375-3-.375-4 .125m5.363 8.788c.715 1.072 2.026.715 2.503 0C10.842 14.073 11.003 12.5 9 12s-5.5 0-6.5.5" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13s2.111-1 5-1c3.02 0 5.163 1 8.758 1 3.596 0 5.541-3 3.742-5.5-1.8-2.5-5-1-5.5.5M3 8.5c2.321-1.16 3.31-1 6-1 3 0 3.489-2.903 2.5-4-.989-1.097-3-1-3.5.5M3 17.5c2.5-1 4-1.5 8-1s3.667 2.5 3 3.5c-.667 1-2.5 1.5-3.5 0" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'windIcon',
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