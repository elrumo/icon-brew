
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201724)"><path d="M2.5 7.5c0-.943 0-1.414.293-1.707C3.086 5.5 3.557 5.5 4.5 5.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v3c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-3zM9 6v3M5.5 6v2m7-2v2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201724"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191471)"><path d="M3 11c0-1.886 0-2.828.586-3.414C4.172 7 5.114 7 7 7h10c1.886 0 2.828 0 3.414.586C21 8.172 21 9.114 21 11v2c0 1.886 0 2.828-.586 3.414C19.828 17 18.886 17 17 17H7c-1.886 0-2.828 0-3.414-.586C3 15.828 3 14.886 3 13v-2zm9-4v4M7.5 7v3m9-3v3" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191471"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'rulerIcon',
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