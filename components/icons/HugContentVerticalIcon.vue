
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199608)"><g clip-path="url(#clip1_489_199608)"><path d="M12 4.5l-1.555 1.625C9.766 6.833 9.427 7.188 9 7.188c-.427 0-.766-.355-1.445-1.063L6 4.5m6 9l-1.555-1.625c-.679-.708-1.018-1.063-1.445-1.063-.427 0-.766.355-1.445 1.063L6 13.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_199608"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_199608"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191371)"><g clip-path="url(#clip1_489_191371)"><path d="M17 5l-2.208 2.152C13.473 8.44 12.814 9.082 12 9.082c-.814 0-1.473-.643-2.792-1.93L7 5m10 14l-2.208-2.152c-1.319-1.287-1.978-1.93-2.792-1.93-.814 0-1.473.643-2.792 1.93L7 19" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191371"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191371"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'hug-content-verticalIcon',
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