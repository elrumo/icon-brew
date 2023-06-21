
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200507)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15.5a3 3 0 0 1-3-3v-3a3 3 0 1 1 6 0v3a3 3 0 0 1-3 3z"/><path d="M9 8V5.863c0-.466 0-.7.032-.84a1.25 1.25 0 0 1 1.822-.81c.126.069.3.225.646.537.347.312.52.468.646.538a1.25 1.25 0 0 0 1.821-.812c.033-.14.033-.373.033-.84V2.5"/></g><defs><clipPath id="clip0_489_200507"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191411)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z"/><path d="M12 11.5V8.308c0-.686 0-1.029.063-1.274a2 2 0 0 1 2.24-1.478c.252.039.567.174 1.197.444.63.27.945.405 1.196.444a2 2 0 0 0 2.24-1.478C19 4.721 19 4.378 19 3.692V3"/></g><defs><clipPath id="clip0_489_191411"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'mouse-rounded-wiredIcon',
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