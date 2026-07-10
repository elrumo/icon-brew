
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198337)" :stroke="color"><path d="M5.875 3.5c-.822 0-1.233 0-1.51.227a.999.999 0 0 0-.138.139C4 4.142 4 4.553 4 5.375V13.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h6c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V5.375c0-.822 0-1.233-.227-1.51a.998.998 0 0 0-.139-.138c-.276-.227-.687-.227-1.509-.227"/><path d="M6 3.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"/></g><defs><clipPath id="clip0_489_198337"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191296)" :stroke="color" stroke-width="2"><path d="M7 3.5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 5.102 4 5.568 4 6.5V17c0 1.886 0 2.828.586 3.414C5.172 21 6.114 21 8 21h8c1.886 0 2.828 0 3.414-.586C20 19.828 20 18.886 20 17V6.5c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 3.5 17.932 3.5 17 3.5"/><path d="M7 3.25c0-.966.784-1.75 1.75-1.75h6.5a1.75 1.75 0 1 1 0 3.5h-6.5A1.75 1.75 0 0 1 7 3.25z"/></g><defs><clipPath id="clip0_489_191296"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'clipboard-emptyIcon',
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