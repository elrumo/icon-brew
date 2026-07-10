
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201873)" :stroke="color"><path d="M15.5 15.5v-.14c0-1.271 0-1.907-.278-2.378a2.001 2.001 0 0 0-.704-.704C14.048 12 13.411 12 12.14 12h-1.78c-1.271 0-1.907 0-2.378.278a2 2 0 0 0-.703.704C7 13.452 7 14.089 7 15.36v.14M2.5 13v-.34c0-1.082 0-1.624.204-2.04a2 2 0 0 1 .916-.916c.416-.204.958-.204 2.04-.204H6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.833 7.667a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0z"/><path d="M8.222 3.51A2.333 2.333 0 1 0 5.5 7" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_201873"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191478)" :stroke="color" stroke-width="2"><path d="M21 21v-.45c0-.977 0-1.465-.113-1.864a3 3 0 0 0-2.073-2.073c-.399-.113-.887-.113-1.864-.113h-4.4c-.977 0-1.465 0-1.864.113a3 3 0 0 0-2.073 2.073c-.113.399-.113.887-.113 1.864V21M3 17.5v-1.6c0-.837 0-1.255.083-1.6A3 3 0 0 1 5.3 12.083C5.645 12 6.063 12 6.9 12H7" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/><path d="M11 4.38C10.414 3.548 9.411 3 8.273 3 6.465 3 5 4.382 5 6.088 5 7.432 5.91 8.576 7.182 9" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191478"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'sharingIcon',
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