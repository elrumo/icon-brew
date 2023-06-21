
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200146)"><path d="M12.5 8h-7c-.943 0-1.414 0-1.707.293C3.5 8.586 3.5 9.057 3.5 10v3.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h7c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V10c0-.943 0-1.414-.293-1.707C13.914 8 13.443 8 12.5 8zm-6-.5V5c0-1.875.519-2.5 2.5-2.5 1.981 0 2.5.625 2.5 2.5v2.5" :stroke="color"/></g><defs><clipPath id="clip0_489_200146"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191395)"><path d="M16 10H8c-1.886 0-2.828 0-3.414.586C4 11.172 4 12.114 4 14v3c0 1.886 0 2.828.586 3.414C5.172 21 6.114 21 8 21h8c1.886 0 2.828 0 3.414-.586C20 19.828 20 18.886 20 17v-3c0-1.886 0-2.828-.586-3.414C18.828 10 17.886 10 16 10zm-8 0V6.5c0-3 2.438-3.5 4-3.5 1.562 0 4 .5 4 3v4" :stroke="color" stroke-width="2"/></g><defs><clipPath id="clip0_489_191395"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'lockedIcon',
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