
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199411)" :stroke="color" stroke-linecap="round"><path d="M8.896 2.5C12.543 2.5 15.5 5.41 15.5 9s-2.957 6.5-6.604 6.5c-3.077 0-5.663-2.072-6.396-4.875"/><path d="M9 4.938a4.062 4.062 0 1 1-3.96 3.148"/><path d="M7.375 9A1.625 1.625 0 1 0 9 7.375"/></g><defs><clipPath id="clip0_489_199411"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191362)"><path d="M11.856 3C16.906 3 21 7.03 21 12s-4.094 9-9.144 9c-4.26 0-7.84-2.868-8.856-6.75" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M12 7a5 5 0 1 1-4.873 3.875" :stroke="color" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="2" :fill="color"/></g><defs><clipPath id="clip0_489_191362"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'health-and-fitnessIcon',
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