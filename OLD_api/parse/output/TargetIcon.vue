
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202557)" :stroke="color" stroke-linecap="round"><path d="M13.694 9a4.694 4.694 0 1 1-9.388 0 4.694 4.694 0 0 1 9.388 0z" stroke-linejoin="round"/><path d="M15.5 9h-3.611M9 2.5v3.611m0 5.778V15.5M6.111 9H2.5"/></g><defs><clipPath id="clip0_489_202557"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191514)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M18.5 12a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" stroke-linejoin="round"/><path d="M21 12h-5m-4-9v5m0 8v5m-4-9H3"/></g><defs><clipPath id="clip0_489_191514"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'targetIcon',
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