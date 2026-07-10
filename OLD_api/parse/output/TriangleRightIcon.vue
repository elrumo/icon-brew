
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12.539 7.272L6.508 3.755c-1.336-.78-2.004-1.17-2.506-.881C3.5 3.162 3.5 3.935 3.5 5.482v7.036c0 1.546 0 2.32.502 2.608s1.17-.101 2.506-.88l6.03-3.518c1.318-.77 1.977-1.154 1.977-1.728s-.659-.959-1.976-1.728z" :fill="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.353 10.252L6.471 3.65c-1.323-.736-1.985-1.103-2.478-.813S3.5 3.884 3.5 5.398V18.6c0 1.514 0 2.271.493 2.561s1.155-.077 2.478-.813l11.882-6.6c1.392-.774 2.088-1.16 2.088-1.749 0-.588-.696-.975-2.088-1.748z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'triangle-rightIcon',
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