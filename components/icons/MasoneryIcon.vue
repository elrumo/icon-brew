
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.501c0-.943 0-1.415.293-1.708C3.086 2.5 3.557 2.5 4.5 2.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v9c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.765-.293-1.708V4.5z" :stroke="color"/><path d="M2.5 11.528h13M6.833 6.472v5.056M11.167 2.5v3.972m0 5.056V15.5M2.5 6.472h13" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191400)" :stroke="color" stroke-width="2"><path d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7z"/><path d="M3 15.5h18m-12-7v7M15 3v5.5m0 7V21M3 8.5h18" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191400"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'masoneryIcon',
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