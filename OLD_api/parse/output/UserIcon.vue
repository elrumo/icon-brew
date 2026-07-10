
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14.5v-.8c0-.651 0-.977-.075-1.243a2 2 0 0 0-1.382-1.382C12.277 11 11.95 11 11.3 11H6.7c-.651 0-.977 0-1.243.075a2 2 0 0 0-1.382 1.382C4 12.723 4 13.05 4 13.7v.8m7.75-8.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-1.45c0-.977 0-1.465-.113-1.864a3 3 0 0 0-2.073-2.073c-.399-.113-.887-.113-1.864-.113h-6.9c-.977 0-1.465 0-1.864.113a3 3 0 0 0-2.073 2.073C4 18.085 4 18.573 4 19.55V21M16.2 7.06c0 2.245-1.88 4.065-4.2 4.065S7.8 9.305 7.8 7.06 9.68 2.996 12 2.996s4.2 1.82 4.2 4.064z" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'userIcon',
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