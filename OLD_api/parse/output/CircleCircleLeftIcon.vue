
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198193)"><g clip-path="url(#clip1_489_198193)"><circle cx="9" cy="9" r="6.5" transform="rotate(-90 9 9)" :stroke="color"/><path d="M7.996 10.664l.395.263c1.368.913 2.053 1.369 2.58 1.086.529-.283.529-1.105.529-2.75v-.526c0-1.645 0-2.468-.528-2.75-.528-.283-1.213.173-2.581 1.086l-.395.263C6.867 8.089 6.303 8.465 6.303 9c0 .535.564.911 1.693 1.664z" :fill="color"/></g></g><defs><clipPath id="clip0_489_198193"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198193"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191288)"><g clip-path="url(#clip1_489_191288)"><circle cx="12" cy="12" r="9" transform="rotate(-90 12 12)" :stroke="color" stroke-width="2"/><path d="M9.714 13.696l2.226 1.392c1.353.845 2.03 1.268 2.545.982.515-.285.515-1.083.515-2.678v-2.784c0-1.595 0-2.393-.515-2.678-.515-.286-1.192.137-2.545.982l-2.226 1.392c-1.218.761-1.827 1.142-1.827 1.696s.609.935 1.827 1.696z" :fill="color"/></g></g><defs><clipPath id="clip0_489_191288"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191288"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-circle-leftIcon',
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