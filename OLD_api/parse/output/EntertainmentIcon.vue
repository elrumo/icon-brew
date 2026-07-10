
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198894)"><path d="M2.5 5.5c0-.943 0-1.414.293-1.707C3.086 3.5 3.557 3.5 4.5 3.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707V10c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293C2.5 11.414 2.5 10.943 2.5 10V5.5zm2 6.5h9c.517.861.775 1.292.723 1.646a1 1 0 0 1-.355.627c-.277.227-.779.227-1.784.227H5.916c-1.004 0-1.506 0-1.783-.227a1 1 0 0 1-.355-.627c-.052-.354.206-.785.723-1.646z" :stroke="color"/></g><defs><clipPath id="clip0_489_198894"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191330)"><path d="M3 8c0-1.886 0-2.828.586-3.414C4.172 4 5.114 4 7 4h10c1.886 0 2.828 0 3.414.586C21 5.172 21 6.114 21 8v4c0 1.886 0 2.828-.586 3.414C19.828 16 18.886 16 17 16H7c-1.886 0-2.828 0-3.414-.586C3 14.828 3 13.886 3 12V8zm3.5 8h11l.598.683c1.25 1.429 1.875 2.143 1.609 2.73C19.44 20 18.49 20 16.592 20H7.408c-1.9 0-2.849 0-3.115-.587s.36-1.301 1.61-2.73L6.5 16z" :stroke="color" stroke-width="2"/></g><defs><clipPath id="clip0_489_191330"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'entertainmentIcon',
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