
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199191)" :stroke="color" stroke-linecap="round"><path d="M12 15l3.5-3.5m-3.5 0l3.5 3.5" stroke-linejoin="round"/><path d="M11 5.5L9.594 3.39c-.29-.435-.436-.653-.657-.772C8.716 2.5 8.454 2.5 7.93 2.5H4.5c-.943 0-1.414 0-1.707.293C2.5 3.086 2.5 3.557 2.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293H9m2-10h2.5c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1m-4.5-3H2.5"/></g><defs><clipPath id="clip0_489_199191"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191347)" :stroke="color" stroke-width="2"><path d="M21.5 11.5V11c0-1.886 0-2.828-.586-3.414C20.328 7 19.386 7 17.5 7H17c-.981 0-1.472 0-1.894-.211-.423-.211-.717-.604-1.306-1.389l-.6-.8c-.589-.785-.883-1.178-1.306-1.389C11.472 3 10.981 3 10 3H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h4" stroke-linecap="round"/><path d="M16 20.5l5-5m-5 0l5 5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 7H3.5"/></g><defs><clipPath id="clip0_489_191347"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'folder-crossIcon',
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