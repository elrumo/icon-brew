
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196253)" :stroke="color"><path d="M15.5 9a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/><path d="M4.357 13.643L2.5 15.5m13 0l-1.857-1.857M3.429 2.5l-.929.929M14.571 2.5l.929.929M9 9v3m0-3l2.121-2.121" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196253"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191196)" :stroke="color" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M5.25 18.75L3 21m18 0l-2.25-2.25M3.9 3l-.9.9M20.1 3l.9.9M12 12v4m0-4l2.828-2.828" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191196"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'alarm-clockIcon',
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