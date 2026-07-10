
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196839)"><path d="M10.414 3.414l1.414 1.414c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594v5.929c0 1.027 0 1.541-.309 1.669-.308.128-.672-.236-1.398-.962l-.879-.879c-.666-.666-1-1-1.414-1-.414 0-.748.334-1.414 1l-.879.879c-.726.726-1.09 1.09-1.398.962C5 15.127 5 14.613 5 13.585V7.658c0-.818 0-1.226.152-1.594.152-.367.442-.657 1.02-1.235l1.414-1.414c.666-.666 1-1 1.414-1 .414 0 .748.334 1.414 1z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196839"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191228)"><path d="M14.828 4.828l1.415 1.415c.867.867 1.3 1.3 1.529 1.852.228.55.228 1.164.228 2.39v9.1c0 1.028 0 1.542-.309 1.67-.308.128-.672-.236-1.398-.962l-1.465-1.465c-1.333-1.333-2-2-2.828-2-.828 0-1.495.667-2.828 2l-1.465 1.465c-.726.726-1.09 1.09-1.398.962C6 21.127 6 20.613 6 19.585v-9.1c0-1.226 0-1.84.228-2.39.229-.552.662-.985 1.53-1.852l1.414-1.415c1.333-1.333 2-2 2.828-2 .828 0 1.495.667 2.828 2z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191228"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-thick-upIcon',
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