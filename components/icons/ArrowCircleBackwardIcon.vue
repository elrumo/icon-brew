
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196487)"><g clip-path="url(#clip1_489_196487)"><path d="M3.5 10c0 2.974 2.462 5.5 5.5 5.5s5.5-2.525 5.5-5.5c0-2.974-2.462-5.5-5.5-5.5H4m0 0l2.072-2M4 4.5l2.072 2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_196487"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196487"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191207)"><g clip-path="url(#clip1_489_191207)"><path d="M4.122 13.286c0 4.26 2.96 7.714 7.378 7.714s8-3.058 8-7.714c0-4.656-3.582-7.715-8-7.715h-7m0 0L7.167 3M4.5 5.571l2.667 2.572" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191207"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191207"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-circle-backwardIcon',
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