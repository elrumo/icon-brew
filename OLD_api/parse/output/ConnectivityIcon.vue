
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198474)"><path d="M9 9v6.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="9" r=".857" :fill="color"/><path d="M4.715 13.2a6 6 0 1 1 8.57 0" :stroke="color" stroke-linecap="round"/><path d="M6.597 11.29a3.364 3.364 0 1 1 4.805 0" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_198474"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191305)"><path d="M12 12v9" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" :fill="color"/><path d="M5.573 18A8.707 8.707 0 0 1 3 11.823C3 6.95 7.03 3 12 3s9 3.95 9 8.823A8.707 8.707 0 0 1 18.427 18" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M8.5 15.5C7.616 14.651 7 13.283 7 12c0-2.599 2-5 5-5s5 2.401 5 5c0 1.283-.474 2.651-1.359 3.5" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191305"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'connectivityIcon',
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