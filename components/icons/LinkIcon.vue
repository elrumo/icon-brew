
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200122)"><path d="M6.9 7a.5.5 0 0 0 0-1v1zm0 5a.5.5 0 0 0 0-1v1zm4.2-1a.5.5 0 1 0 0 1v-1zm0-5a.5.5 0 1 0 0 1V6zM5 11.5V11v.5zM5 7h1.9V6H5v1zm1.9 4H5v1h1.9v-1zm6.1 0h-1.9v1H13v-1zm-1.9-4H13V6h-1.9v1zM2 9a3 3 0 0 0 3 3v-1a2 2 0 0 1-2-2H2zm13 0a2 2 0 0 1-2 2v1a3 3 0 0 0 3-3h-1zm1 0a3 3 0 0 0-3-3v1a2 2 0 0 1 2 2h1zM3 9a2 2 0 0 1 2-2V6a3 3 0 0 0-3 3h1z" :fill="color"/><path d="M11.5 9h-5" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_200122"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191393)"><path d="M9.3 9a1 1 0 0 0 0-2v2zm0 8a1 1 0 1 0 0-2v2zm5.4-2a1 1 0 1 0 0 2v-2zm0-8a1 1 0 1 0 0 2V7zM7 9h2.3V7H7v2zm2.3 6H7v2h2.3v-2zm7.7 0h-2.3v2H17v-2zm-2.3-6H17V7h-2.3v2zM2 12a5 5 0 0 0 5 5v-2a3 3 0 0 1-3-3H2zm18 0a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2zm2 0a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3h2zM4 12a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5h2z" :fill="color"/><path d="M15 12H9" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191393"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'linkIcon',
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