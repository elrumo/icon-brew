
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201651)"><path d="M5 4.5v6.893c0 2.34 0 3.509.664 3.745.664.237 1.404-.668 2.884-2.479L9 12.107l.452.552c1.48 1.811 2.22 2.716 2.884 2.48.664-.237.664-1.407.664-3.746V4.5c0-.943 0-1.414-.293-1.707C12.414 2.5 11.943 2.5 11 2.5H7c-.943 0-1.414 0-1.707.293C5 3.086 5 3.557 5 4.5z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201651"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191467)"><path d="M6 7v8.222c0 3.46 0 5.19.989 5.55.989.358 2.097-.971 4.314-3.628l.697-.835.697.835c2.217 2.657 3.325 3.986 4.314 3.627.989-.358.989-2.089.989-5.55V7c0-1.886 0-2.828-.586-3.414C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586C6 4.172 6 5.114 6 7z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191467"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'ribbonIcon',
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