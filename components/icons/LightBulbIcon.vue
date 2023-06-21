
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199942)" :stroke="color" stroke-linecap="round"><path d="M6 11.5c0-1.167-1.667-2-1.667-4.333C4.333 4.833 6.083 2.5 9 2.5s4.667 2.333 4.667 4.667C13.667 9.5 12 10.333 12 11.5" stroke-linejoin="round"/><path d="M6.5 13.5h5m-3.5 2h2"/></g><defs><clipPath id="clip0_489_199942"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191384)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M8 14.5c0-1.667-2-3-2-6s2-6 6-6 6 3 6 6-2 4.333-2 6" stroke-linejoin="round"/><path d="M8.5 17.5h7M10 21h4"/></g><defs><clipPath id="clip0_489_191384"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'light-bulbIcon',
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