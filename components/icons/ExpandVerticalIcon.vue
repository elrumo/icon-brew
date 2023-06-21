
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198961)"><g clip-path="url(#clip1_489_198961)"><path d="M12 6.634l-1.555-1.625C9.766 4.301 9.427 3.946 9 3.946c-.427 0-.766.355-1.445 1.063L6 6.634m6 4.732l-1.555 1.625C9.766 13.7 9.427 14.054 9 14.054c-.427 0-.766-.354-1.445-1.063L6 11.366" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_198961"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198961"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191336)"><g clip-path="url(#clip1_489_191336)"><path d="M17 8.875l-2.208-2.152c-1.319-1.287-1.978-1.93-2.792-1.93-.814 0-1.473.643-2.792 1.93L7 8.875m10 6.25l-2.208 2.152c-1.319 1.287-1.978 1.93-2.792 1.93-.814 0-1.473-.643-2.792-1.93L7 15.125" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191336"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191336"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'expand-verticalIcon',
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