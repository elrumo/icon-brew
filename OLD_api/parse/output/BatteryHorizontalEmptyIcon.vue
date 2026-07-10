
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196966)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5c0-1.414 0-2.121.44-2.56C3.878 5.5 4.585 5.5 6 5.5h5c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44H6c-1.414 0-2.121 0-2.56-.44C3 11.622 3 10.915 3 9.5v-1z"/><path d="M14 9.6V8.4c0-.22.18-.4.4-.4a.6.6 0 0 1 .6.6v.8a.6.6 0 0 1-.6.6.4.4 0 0 1-.4-.4z" :fill="color"/></g><defs><clipPath id="clip0_489_196966"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191235)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c0-1.886 0-2.828.586-3.414C4.172 7 5.114 7 7 7h8c1.886 0 2.828 0 3.414.586C19 8.172 19 9.114 19 11v2c0 1.886 0 2.828-.586 3.414C17.828 17 16.886 17 15 17H7c-1.886 0-2.828 0-3.414-.586C3 15.828 3 14.886 3 13v-2z"/><path d="M19 12.5v-1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191235"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'battery-horizontal-emptyIcon',
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