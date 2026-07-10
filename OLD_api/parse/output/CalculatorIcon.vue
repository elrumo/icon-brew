
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197767)"><path d="M4 4.5c0-.943 0-1.414.293-1.707C4.586 2.5 5.057 2.5 6 2.5h6c.943 0 1.414 0 1.707.293C14 3.086 14 3.557 14 4.5v9c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H6c-.943 0-1.414 0-1.707-.293C4 14.914 4 14.443 4 13.5v-9z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm1 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/></g><defs><clipPath id="clip0_489_197767"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191261)"><path d="M4.5 7c0-1.886 0-2.828.586-3.414C5.672 3 6.614 3 8.5 3h7c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v10c0 1.886 0 2.828-.586 3.414C18.328 21 17.386 21 15.5 21h-7c-1.886 0-2.828 0-3.414-.586C4.5 19.828 4.5 18.886 4.5 17V7z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0-11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zM9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191261"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'calculatorIcon',
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