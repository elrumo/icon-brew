
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14h3.5c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V6c0-.943 0-1.414-.293-1.707C14.914 4 14.443 4 13.5 4h-9c-.943 0-1.414 0-1.707.293C2.5 4.586 2.5 5.057 2.5 6v.5" :stroke="color" stroke-linecap="round"/><path d="M3.263 13.845a.643.643 0 0 1-.631.655.643.643 0 0 1-.632-.655c0-.361.283-.654.632-.654.348 0 .631.293.631.654z" :fill="color"/><path d="M7.684 14c0-2.892-2.262-5.237-5.052-5.237m0 2.619c1.395 0 2.526 1.172 2.526 2.618" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 19.5h2.56c1.827 0 2.741 0 3.32-.553.023-.021.046-.044.067-.066C21 18.3 21 17.387 21 15.56V8.44c0-1.827 0-2.741-.553-3.32a1.947 1.947 0 0 0-.066-.067C19.8 4.5 18.887 4.5 17.06 4.5H6.94c-1.827 0-2.741 0-3.32.553a1.994 1.994 0 0 0-.067.067C3 5.699 3 6.613 3 8.44v.06" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M4 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/><path d="M11 19.5a8 8 0 0 0-8-8m0 4a4 4 0 0 1 4 4" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'chromecastIcon',
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