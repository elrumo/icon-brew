
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200486)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15.5c-1.414 0-2.121 0-2.56-.44C6 14.622 6 13.915 6 12.5v-3c0-1.414 0-2.121.44-2.56C6.878 6.5 7.585 6.5 9 6.5c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v3c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44z"/><path d="M9 8V5.863c0-.466 0-.7.032-.84a1.25 1.25 0 0 1 1.822-.81c.126.069.3.225.646.537.347.312.52.468.646.538a1.25 1.25 0 0 0 1.821-.812c.033-.14.033-.373.033-.84V2.5"/></g><defs><clipPath id="clip0_489_200486"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191409)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-1.886 0-2.828 0-3.414-.586C8 19.828 8 18.886 8 17v-4c0-1.886 0-2.828.586-3.414C9.172 9 10.114 9 12 9c1.886 0 2.828 0 3.414.586C16 10.172 16 11.114 16 13v4c0 1.886 0 2.828-.586 3.414C14.828 21 13.886 21 12 21z"/><path d="M12 11.5V8.308c0-.686 0-1.029.063-1.274a2 2 0 0 1 2.24-1.478c.252.039.567.174 1.197.444.63.27.945.405 1.196.444a2 2 0 0 0 2.24-1.478C19 4.721 19 4.378 19 3.692V3"/></g><defs><clipPath id="clip0_489_191409"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'mouse-rectangular-wiredIcon',
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