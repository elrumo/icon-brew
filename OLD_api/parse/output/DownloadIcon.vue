
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198824)" :stroke="color" stroke-linecap="round"><path d="M2.5 11.8v1.7c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707v-1.7"/><path d="M9 2.5v9.3m0 0L5 7.55m4 4.25l4-4.25" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198824"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191324)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M3 15v2c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17v-2"/><path d="M12 3v13m0 0L6 9.929M12 16l6-6.071" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191324"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'downloadIcon',
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