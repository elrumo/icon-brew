
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196241)" :stroke="color"><path d="M5 13h-.5c-.943 0-1.414 0-1.707-.293C2.5 12.414 2.5 11.943 2.5 11V5c0-.943 0-1.414.293-1.707C3.086 3 3.557 3 4.5 3h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v6c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H13" stroke-linecap="round"/><path d="M7.8 12.6c.361-.482.542-.722.753-.828a1 1 0 0 1 .894 0c.211.106.392.346.753.828.514.685.77 1.027.796 1.31a1 1 0 0 1-.47.94C10.284 15 9.856 15 9 15s-1.284 0-1.526-.15a1 1 0 0 1-.47-.94c.026-.283.282-.625.796-1.31z"/></g><defs><clipPath id="clip0_489_196241"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191195)" :stroke="color" stroke-width="2"><path d="M7.5 17H7c-1.886 0-2.828 0-3.414-.586C3 15.828 3 14.886 3 13V7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v6c0 1.886 0 2.828-.586 3.414C19.828 17 18.886 17 17 17h-.5" stroke-linecap="round"/><path d="M10.507 18.133c.609-.87.913-1.304 1.323-1.375.113-.019.227-.019.34 0 .41.071.714.506 1.323 1.375.788 1.125 1.181 1.688 1.046 2.15-.037.124-.097.24-.178.341C14.06 21 13.374 21 12 21s-2.06 0-2.36-.376a1 1 0 0 1-.179-.342c-.136-.461.258-1.024 1.046-2.15z"/></g><defs><clipPath id="clip0_489_191195"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'airplayIcon',
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