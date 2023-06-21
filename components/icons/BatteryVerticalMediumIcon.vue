
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197230)"><g clip-path="url(#clip1_489_197230)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 15c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56V7c0-1.414 0-2.121.44-2.56C6.378 4 7.085 4 8.5 4h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v5c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-1z"/><path d="M9.6 4H8.4a.4.4 0 0 1-.4-.4.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6.4.4 0 0 1-.4.4z" :fill="color"/><path d="M7.5 12.5h3m-3-3h3"/></g></g><defs><clipPath id="clip0_489_197230"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_197230"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191242)"><g clip-path="url(#clip1_489_191242)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21c-1.886 0-2.828 0-3.414-.586C7 19.828 7 18.886 7 17V9c0-1.886 0-2.828.586-3.414C8.172 5 9.114 5 11 5h2c1.886 0 2.828 0 3.414.586C17 6.172 17 7.114 17 9v8c0 1.886 0 2.828-.586 3.414C15.828 21 14.886 21 13 21h-2z"/><path d="M12.5 5h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z" :fill="color"/><path d="M10 17.5h4M10 13h4"/></g></g><defs><clipPath id="clip0_489_191242"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191242"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'battery-vertical-mediumIcon',
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