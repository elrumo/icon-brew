
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199204)"><path d="M16 13h-4m-1-7.5L9.594 3.39c-.29-.435-.436-.653-.657-.772C8.716 2.5 8.454 2.5 7.93 2.5H4.5c-.943 0-1.414 0-1.707.293C2.5 3.086 2.5 3.557 2.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293H9m2-10h2.5c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1m-4.5-3H2.5" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_199204"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191348)"><path d="M22 18h-6M15 7l-1.8-2.4c-.589-.785-.883-1.178-1.306-1.389C11.472 3 10.981 3 10 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h4m4-14h2c1.886 0 2.828 0 3.414.586C21 8.172 21 9.114 21 11v.5M15 7H3" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191348"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'folder-minusIcon',
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