
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198641)"><path d="M3 4.5c0-.943 0-1.414.293-1.707C3.586 2.5 4.057 2.5 5 2.5h8c.943 0 1.414 0 1.707.293C15 3.086 15 3.557 15 4.5v9c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H5c-.943 0-1.414 0-1.707-.293C3 14.914 3 14.443 3 13.5v-9z" :stroke="color"/><path d="M3 7h12M3 11.5h12" :stroke="color" stroke-linecap="round"/><path d="M6 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/></g><defs><clipPath id="clip0_489_198641"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191315)"><path d="M4 7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h8c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v10c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4 19.828 4 18.886 4 17V7z" :stroke="color" stroke-width="2"/><path d="M4 9h16M4 15h16" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191315"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'databseIcon',
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