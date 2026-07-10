
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197942)" :stroke="color" stroke-linecap="round"><circle cx="9" cy="9" r="6.5"/><path d="M6.5 10l.493.877c.366.65.549.975.832.983.284.007.484-.307.884-.937l2.916-4.59"/></g><defs><clipPath id="clip0_489_197942"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191273)" :stroke="color" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14l1.119 1.399c.401.501.602.752.86.737.258-.015.428-.287.769-.832L15.5 8.5"/></g><defs><clipPath id="clip0_489_191273"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'check-with-circleIcon',
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