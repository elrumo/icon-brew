
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.263 8.234c-.123-1.042-.184-1.563.114-1.899C4.676 6 5.2 6 6.25 6h5.502c1.049 0 1.573 0 1.872.335.298.336.237.857.114 1.899l-.53 4.5c-.098.84-.148 1.26-.432 1.513-.284.253-.707.253-1.553.253H6.779c-.847 0-1.27 0-1.554-.253-.284-.252-.334-.673-.433-1.513l-.53-4.5z" :stroke="color"/><path d="M2.5 4L4 6.5l.947-1.894c.27-.538.404-.807.645-.957.242-.149.543-.149 1.144-.149h4.528c.601 0 .902 0 1.144.15.241.149.376.418.645.956L14 6.5 15.5 4" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.361 12.332c-.169-2.027-.253-3.04.34-3.686C6.297 8 7.314 8 9.348 8h5.306c2.034 0 3.051 0 3.645.646.594.646.51 1.66.341 3.686l-.333 4c-.145 1.741-.218 2.611-.792 3.14C16.94 20 16.066 20 14.32 20H9.68c-1.746 0-2.62 0-3.194-.528-.574-.529-.647-1.399-.792-3.14l-.333-4z" :stroke="color" stroke-width="2"/><path d="M3 5l2 4 .994-2.486c.487-1.217.73-1.826 1.239-2.17C7.74 4 8.397 4 9.708 4h4.584c1.312 0 1.967 0 2.475.344s.752.953 1.239 2.17L19 9l2-4" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'take-awayIcon',
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