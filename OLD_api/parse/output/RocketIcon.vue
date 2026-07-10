
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201675)"><path d="M6 8.025c0-1.937.77-3.795 2.14-5.164a1.217 1.217 0 0 1 1.72 0A7.304 7.304 0 0 1 12 8.025v3.219c0 .238 0 .357-.02.456a1 1 0 0 1-.78.78c-.1.02-.218.02-.456.02H7.256c-.238 0-.357 0-.456-.02a1 1 0 0 1-.78-.78C6 11.6 6 11.482 6 11.244V8.025z" :stroke="color"/><path d="M9.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/><path d="M12 7l1.215 2.672c.579 1.274.868 1.91.573 2.37-.296.458-.995.458-2.394.458H6.606c-1.399 0-2.098 0-2.394-.459-.295-.458-.006-1.095.573-2.369L6 7m3 7.5V16m2-1.5v.5m-4-.5v.5" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_201675"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191469)"><path d="M8 11.017c0-2.6.885-5.123 2.51-7.154a1.909 1.909 0 0 1 2.98 0A11.452 11.452 0 0 1 16 11.017v2.762c0 1.14 0 1.71-.226 2.144a2 2 0 0 1-.851.851c-.434.226-1.004.226-2.144.226h-1.558c-1.14 0-1.71 0-2.144-.226a2 2 0 0 1-.851-.851C8 15.489 8 14.919 8 13.779v-2.762z" :stroke="color" stroke-width="2"/><path d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/><path d="M16 9.5l.854 1.281c1.825 2.738 2.738 4.106 2.172 5.163C18.461 17 16.816 17 13.526 17h-3.052c-3.29 0-4.935 0-5.5-1.056-.566-1.057.347-2.425 2.172-5.163L8 9.5" :stroke="color" stroke-width="2"/><path d="M12 20v2m3-2v1m-6-1v1" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191469"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'rocketIcon',
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