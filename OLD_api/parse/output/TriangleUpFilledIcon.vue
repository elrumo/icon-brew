
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_203070)"><path d="M7.272 5.462l-3.517 6.03c-.78 1.336-1.17 2.004-.881 2.506.288.502 1.061.502 2.608.502h7.036c1.546 0 2.32 0 2.608-.502.288-.502-.101-1.17-.88-2.506l-3.518-6.03C9.958 4.144 9.574 3.485 9 3.485c-.574 0-.959.659-1.728 1.977z" :fill="color"/></g><defs><clipPath id="clip0_489_203070"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191543)"><path d="M8.527 9.078L5.42 14.515c-1.521 2.662-2.282 3.993-1.703 4.989.578.996 2.11.996 5.176.996h6.214c3.066 0 4.598 0 5.177-.996.578-.996-.183-2.327-1.704-4.989l-3.107-5.437C13.931 6.38 13.161 5.03 12 5.03c-1.16 0-1.931 1.349-3.473 4.047z" :fill="color"/></g><defs><clipPath id="clip0_489_191543"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'triangle-up-filledIcon',
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