
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201662)" :stroke="color" stroke-linecap="round"><path d="M11.5 2.5v4m2-2h-4"/><path d="M13 8.5v2.893c0 2.34 0 3.508-.664 3.745-.664.237-1.404-.668-2.884-2.479L9 12.107l-.452.552c-1.48 1.81-2.22 2.716-2.884 2.48C5 14.901 5 13.731 5 11.392V4.5c0-.943 0-1.414.293-1.707C5.586 2.5 6.057 2.5 7 2.5h1" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201662"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191468)" :stroke="color" stroke-width="2" stroke-linecap="round"><path d="M10.5 3H10c-1.886 0-2.828 0-3.414.586C6 4.172 6 5.114 6 7v8.222c0 3.46 0 5.19.989 5.55.989.358 2.097-.971 4.314-3.628l.697-.835.697.835c2.217 2.657 3.325 3.986 4.314 3.627.989-.358.989-2.089.989-5.55V12" stroke-linejoin="round"/><path d="M15.5 3v6m3-3h-6"/></g><defs><clipPath id="clip0_489_191468"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'ribbon-addIcon',
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