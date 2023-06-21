
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201639)"><path d="M4.5 4.5v7c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2m-4-9l-2 2m2-2l2 2m7 7v-7c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293h-2m4 9l2-2m-2 2l-2-2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201639"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191466)"><path d="M18 18.5v-9c0-1.886 0-2.828-.586-3.414C16.828 5.5 15.886 5.5 14 5.5h-1.5m5.5 13l3-2.5m-3 2.5L15 16M6 5.5v9c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.413.586H11.5M6 5.5L3 8m3-2.5L9 8" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191466"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'retweetIcon',
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