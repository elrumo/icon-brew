
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201784)"><path d="M12.5 7.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-1.167 3.833L15.5 15.5" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_201784"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191474)" :stroke="color" stroke-width="2" stroke-linecap="round"><circle cx="9.375" cy="9.375" r="6.375"/><path d="M14.333 14.333L20 20"/></g><defs><clipPath id="clip0_489_191474"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'searchIcon',
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