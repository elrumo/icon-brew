
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2.5a6.5 6.5 0 0 0-2.745 12.394l1.164-3.476a2.889 2.889 0 1 1 3.161 0l1.165 3.476A6.501 6.501 0 0 0 9 2.5z" :stroke="color" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.34A9 9 0 0 0 8.2 20.5l1.612-4.812a4 4 0 1 1 4.377 0L15.8 20.5A9 9 0 0 0 12 3.34z" :stroke="color" stroke-width="2" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'open-sourceIcon',
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