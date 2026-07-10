
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199315)" :stroke="color"><path d="M12 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/><path d="M3.216 8.702c3.135.784 6.986-1.782 7.484-4.659M4 4c2.743 0 5.574 3.267 5.574 6.793"/><path d="M3 12c1 1 2.611 1.393 4.18 1.393a6.966 6.966 0 0 0 6.965-6.966C14.145 4.86 13.5 3.5 12.5 2.5M9.966 13v2.5m0 0H7.5m2.466 0H12" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_199315"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191355)" :stroke="color" stroke-width="2"><path d="M15.5 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM12 14.5C12 10 8.5 5 5 5m-1 6c4 1 9.366-2.33 10-6"/><path d="M3 16c1.5 1 3.5 2 6 2 6 0 9.5-4 9.5-9.5 0-2.5-1-4.5-2-5.5m-2 14v4m0 0H11m3.5 0h3" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191355"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'globeIcon',
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