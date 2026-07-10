
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201444)" :stroke="color"><path d="M2.5 8.5c0-1.886 0-2.828.586-3.414C3.672 4.5 4.614 4.5 6.5 4.5h5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v1c0 1.886 0 2.829-.586 3.414-.586.586-1.528.586-3.414.586h-5c-1.886 0-2.828 0-3.414-.586C2.5 12.33 2.5 11.386 2.5 9.5v-1z"/><path d="M7.5 9h-3m0 0l1-1m-1 1l1 1m5-1h3m0 0l-1-1m1 1l-1 1" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201444"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191452)" :stroke="color"><rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2"/><path d="M10 12H6m0 0l1.5-1.5M6 12l1.5 1.5M14 12h4m0 0l-1.5-1.5M18 12l-1.5 1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191452"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'rectangle-expandIcon',
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