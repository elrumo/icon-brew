
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198669)" :stroke="color"><path d="M4.5 4.5v9c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h5c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V6.26c0-.418 0-.626-.079-.813-.079-.187-.228-.332-.528-.622l-1.811-1.76c-.287-.279-.43-.418-.612-.492-.18-.073-.38-.073-.781-.073H6.5c-.943 0-1.414 0-1.707.293C4.5 3.086 4.5 3.557 4.5 4.5z"/><path d="M10.5 3v1c0 .943 0 1.414.293 1.707C11.086 6 11.557 6 12.5 6h1"/></g><defs><clipPath id="clip0_489_198669"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191317)" :stroke="color" stroke-width="2"><path d="M5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V9.281c0-.877 0-1.316-.173-1.704-.173-.388-.499-.682-1.151-1.269L15.14 4.027c-.564-.508-.846-.761-1.192-.894S13.224 3 12.465 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7z"/><path d="M13 3v2c0 1.886 0 2.828.586 3.414C14.172 9 15.114 9 17 9h2"/></g><defs><clipPath id="clip0_489_191317"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'documentIcon',
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