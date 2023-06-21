
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196591)"><g clip-path="url(#clip1_489_196591)"><path d="M3.5 10c0 2.974 2.462 5.5 5.5 5.5s5.5-2.525 5.5-5.5c0-2.974-2.462-5.5-5.5-5.5H4m0 0l2.072-2M4 4.5l2.072 2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M7.146 10.018c.448-.046 1.22-.077 1.22-.975 0-1.314-1.866-.985-1.866-.328m.646 1.303c-.184.02-.313.01-.313.01s.13-.019.313-.01zm0 0c.448.023 1.22 0 1.22.996 0 1.157-1.533 1.315-1.866.658m3-1.643c0-1.519.333-1.971 1-1.971s1 .532 1 1.97c0 1.44-.333 1.972-1 1.972s-1-.453-1-1.971z" :stroke="color" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196591"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196591"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191212)"><g clip-path="url(#clip1_489_191212)"><path d="M4.122 13.286c0 4.26 2.96 7.714 7.378 7.714s8-3.058 8-7.714c0-4.656-3.582-7.715-8-7.715h-7m0 0L7.167 3M4.5 5.571l2.667 2.572" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M9.5 13.5c.672-.07 1.5-.5 1.5-1.5 0-1.5-2-1.5-2.5-.5m1 2c-.275.029-.469.016-.469.016s.194-.03.469-.016zm0 0c.672.034 1.5.328 1.5 1.5 0 1.5-1.5 2-2.5 1m4.5-2.5c0-2.31.5-3 1.5-3s1.5.81 1.5 3-.5 3-1.5 3-1.5-.69-1.5-3z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191212"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191212"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-circle-bckwards-thirtyIcon',
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