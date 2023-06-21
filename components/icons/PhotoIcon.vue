
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201163)" :stroke="color"><path d="M14 2H4c-.943 0-1.414 0-1.707.293C2 2.586 2 3.057 2 4v10c0 .943 0 1.414.293 1.707C2.586 16 3.057 16 4 16h10c.943 0 1.414 0 1.707-.293C16 15.414 16 14.943 16 14V4c0-.943 0-1.414-.293-1.707C15.414 2 14.943 2 14 2z"/><path d="M9 11.5L7.031 9.531c-.717-.717-1.075-1.075-1.515-1.06-.44.014-.774.395-1.44 1.157L2 12m14-2.5l-2.574-2.895c-.668-.752-1.002-1.128-1.44-1.14-.438-.013-.794.343-1.505 1.054L7.5 9.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201163"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191436)" :stroke="color" stroke-width="2"><path d="M18 2H6c-1.886 0-2.828 0-3.414.586C2 3.172 2 4.114 2 6v12c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18V6c0-1.886 0-2.828-.586-3.414C20.828 2 19.886 2 18 2z"/><path d="M12 15.846L9.827 13.73c-1.335-1.3-2.003-1.951-2.83-1.951-.825 0-1.493.65-2.827 1.952L2 15.846m20-3.516l-3.145-3.056c-1.346-1.308-2.02-1.962-2.85-1.958-.831.005-1.497.666-2.83 1.99L9.677 12.78" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191436"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'photoIcon',
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