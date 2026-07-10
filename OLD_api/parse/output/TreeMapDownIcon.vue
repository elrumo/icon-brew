
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202844)"><path d="M14 12.5V11c0-.943 0-1.414-.293-1.707C13.414 9 12.943 9 12 9H9m-5 3.5V11c0-.943 0-1.414.293-1.707C4.586 9 5.057 9 6 9h3m0 0V5.5M10.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :stroke="color"/></g><defs><clipPath id="clip0_489_202844"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191531)"><path d="M18.5 16c0-1.886 0-2.828-.586-3.414C17.328 12 16.386 12 14.5 12H12m-6.5 4c0-1.886 0-2.828.586-3.414C6.672 12 7.614 12 9.5 12H12m0 0V8m2.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM8 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm13 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" :stroke="color" stroke-width="2"/></g><defs><clipPath id="clip0_489_191531"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tree-map-downIcon',
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