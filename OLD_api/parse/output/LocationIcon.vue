
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200134)"><path d="M13 6.513a8.466 8.466 0 0 1-.784 3.56l-1.947 4.193c-.306.66-.46.99-.638 1.135a1 1 0 0 1-1.262 0c-.179-.146-.332-.476-.638-1.135l-1.947-4.194A8.467 8.467 0 0 1 5 6.513C5 4.303 6.79 2.5 9 2.5s4 1.804 4 4.013z" :stroke="color"/><path d="M10.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :fill="color"/></g><defs><clipPath id="clip0_489_200134"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191394)"><path d="M18 8.953a8.93 8.93 0 0 1-.892 3.89l-2.105 4.351c-1.03 2.128-1.545 3.192-2.276 3.477a2 2 0 0 1-1.454 0c-.731-.285-1.246-1.349-2.276-3.477l-2.105-4.352A8.93 8.93 0 0 1 6 8.953C6 5.665 8.712 3 12 3s6 2.665 6 5.953z" :stroke="color" stroke-width="2"/><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191394"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'locationIcon',
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