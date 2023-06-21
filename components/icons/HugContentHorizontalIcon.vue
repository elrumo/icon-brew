
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199597)"><path d="M4.5 6l1.625 1.555C6.833 8.234 7.188 8.573 7.188 9c0 .427-.355.766-1.063 1.445L4.5 12m9-6l-1.625 1.555c-.708.679-1.063 1.018-1.063 1.445 0 .427.355.766 1.063 1.445L13.5 12" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199597"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191370)"><path d="M5 7l2.152 2.208c1.287 1.319 1.93 1.978 1.93 2.792 0 .814-.643 1.473-1.93 2.792L5 17M19 7l-2.152 2.208c-1.287 1.319-1.93 1.978-1.93 2.792 0 .814.643 1.473 1.93 2.792L19 17" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191370"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'hug-content-horizontalIcon',
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