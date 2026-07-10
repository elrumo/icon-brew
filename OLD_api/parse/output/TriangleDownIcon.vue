
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.728 12.539l3.518-6.031c.779-1.336 1.168-2.004.88-2.506S14.065 3.5 12.518 3.5H5.482c-1.547 0-2.32 0-2.608.502s.101 1.17.88 2.506l3.518 6.03c.77 1.318 1.154 1.977 1.728 1.977s.959-.659 1.728-1.976z" :fill="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 18.353L20.35 6.471c.736-1.323 1.103-1.985.813-2.478S20.116 3.5 18.602 3.5H5.399c-1.514 0-2.271 0-2.561.493s.077 1.155.813 2.478l6.6 11.882c.774 1.392 1.16 2.088 1.749 2.088.588 0 .975-.696 1.748-2.088z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'triangle-downIcon',
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