
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5.462 10.728l6.03 3.518c1.336.779 2.004 1.168 2.506.88s.502-1.061.502-2.608V5.482c0-1.547 0-2.32-.502-2.608s-1.17.101-2.506.88l-6.03 3.518C4.144 8.042 3.485 8.426 3.485 9s.659.959 1.977 1.728z" :fill="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.647 13.748l11.882 6.601c1.323.736 1.985 1.103 2.478.813s.493-1.047.493-2.561V5.399c0-1.514 0-2.271-.493-2.561s-1.155.077-2.478.813l-11.882 6.6c-1.392.774-2.088 1.16-2.088 1.749 0 .588.696.975 2.088 1.748z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'triangle-leftIcon',
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