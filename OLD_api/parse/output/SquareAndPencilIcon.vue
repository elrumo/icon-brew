
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202219)"><path d="M7.646 9.646a.5.5 0 0 0 .708.708l-.708-.708zm5.465-4.05l.353-.353-.707-.707-.354.353.708.708zm.638-2.052l-.353.353.707.707.353-.353-.707-.707zm1.605-.19a.5.5 0 0 0-.708-.708l.708.708zm-7 7l4.757-4.757-.708-.708-4.757 4.757.708.708zm6.102-6.103l.898-.897-.708-.708-.897.898.707.707z" :fill="color"/><path d="M8 4.5H4.5c-.943 0-1.414 0-1.707.293C2.5 5.086 2.5 5.557 2.5 6.5v7c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h7c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V10" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202219"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191494)"><path d="M10.293 12.293a1 1 0 1 0 1.414 1.414l-1.414-1.414zm8.414-5.586L19.414 6 18 4.586l-.707.707 1.414 1.414zm.586-3.414L18.586 4 20 5.414l.707-.707-1.414-1.414zm2.414.414a1 1 0 0 0-1.414-1.414l1.414 1.414zm-10 10l7-7-1.414-1.414-7 7 1.414 1.414zm9-9l1-1-1.414-1.414-1 1 1.414 1.414z" :fill="color"/><path d="M10 7H7c-1.886 0-2.828 0-3.414.586C3 8.172 3 9.114 3 11v6c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h6c1.886 0 2.828 0 3.414-.586C17 19.828 17 18.886 17 17v-3" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191494"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'square-and-pencilIcon',
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