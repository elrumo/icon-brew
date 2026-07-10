
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200927)" :stroke="color" stroke-linecap="round"><path d="M14 15l-1.083-4.93c-.166-.752-.249-1.129-.523-1.35-.274-.22-.66-.22-1.43-.22H7.036c-.771 0-1.156 0-1.431.22-.274.221-.357.598-.523 1.35L4 15"/><path d="M9 2.5l-2 6h4l-2-6z" :fill="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_200927"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191427)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M19 21l-1.357-6.784c-.308-1.54-.462-2.31-1.015-2.763C16.075 11 15.29 11 13.721 11h-3.442c-1.57 0-2.354 0-2.907.453-.553.454-.707 1.223-1.015 2.763L5 21"/><path d="M12 3l-3 8h6l-3-8z" :fill="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191427"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'pencil-tipIcon',
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