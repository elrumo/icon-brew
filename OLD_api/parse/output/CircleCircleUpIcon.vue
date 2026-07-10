
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198235)"><circle cx="9" cy="9" r="6.5" :stroke="color"/><path d="M7.336 7.996l-.263.395c-.913 1.368-1.369 2.053-1.086 2.58.282.529 1.105.529 2.75.529h.526c1.645 0 2.467 0 2.75-.528.283-.528-.173-1.213-1.086-2.581l-.263-.395C9.911 6.867 9.535 6.303 9 6.303c-.535 0-.911.564-1.664 1.693z" :fill="color"/></g><defs><clipPath id="clip0_489_198235"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191290)"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2"/><path d="M10.304 9.714L8.912 11.94c-.845 1.353-1.268 2.03-.982 2.545.285.515 1.083.515 2.678.515h2.784c1.595 0 2.393 0 2.678-.515.286-.515-.137-1.192-.982-2.545l-1.392-2.226C12.935 8.496 12.554 7.887 12 7.887s-.935.609-1.696 1.827z" :fill="color"/></g><defs><clipPath id="clip0_489_191290"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-circle-upIcon',
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