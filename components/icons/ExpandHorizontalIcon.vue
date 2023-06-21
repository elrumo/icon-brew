
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198950)"><path d="M6.634 6L5.009 7.555C4.301 8.234 3.946 8.573 3.946 9c0 .427.355.766 1.063 1.445L6.634 12m4.732-6l1.625 1.555c.709.679 1.063 1.018 1.063 1.445 0 .427-.354.766-1.063 1.445L11.366 12" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198950"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191335)"><path d="M8.875 7L6.723 9.208c-1.287 1.319-1.93 1.978-1.93 2.792 0 .814.643 1.473 1.93 2.792L8.875 17m6.25-10l2.152 2.208c1.287 1.319 1.93 1.978 1.93 2.792 0 .814-.643 1.473-1.93 2.792L15.125 17" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191335"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'expand-horizontalIcon',
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