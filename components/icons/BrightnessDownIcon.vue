
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="3" :stroke="color"/><path d="M5.559 13.206a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0zM4.029 9A.765.765 0 1 1 2.5 9a.765.765 0 0 1 1.53 0zm1.53-4.206a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0zm4.206-1.53a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0zm4.206 1.53a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0zM15.5 9a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0zm-1.53 4.206a.765.765 0 1 1-1.529 0 .765.765 0 0 1 1.53 0zm-4.205 1.53a.765.765 0 1 1-1.53 0 .765.765 0 0 1 1.53 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" :stroke="color" stroke-width="2"/><path d="M7.5 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2-5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2-5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5.5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'brightness-downIcon',
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