
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202422)" :stroke="color" stroke-linecap="round"><path d="M10 14H6.5c-1.886 0-2.828 0-3.414-.586C2.5 12.828 2.5 11.886 2.5 10V8c0-1.886 0-2.828.586-3.414C3.672 4 4.614 4 6.5 4h5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v.5" stroke-linejoin="round"/><path d="M13.5 10v4m2-2h-4"/><path d="M8.846 4v10m1.758-3.367H3M15 7.57H3" stroke-width=".5"/></g><defs><clipPath id="clip0_489_202422"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191508)" :stroke="color" stroke-linecap="round"><path d="M12.9 19H7c-1.886 0-2.828 0-3.414-.586C3 17.828 3 16.886 3 15V9c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h10c1.886 0 2.828 0 3.414.586C21 6.172 21 7.114 21 9v2" stroke-width="2" stroke-linejoin="round"/><path d="M18 13v6m3-3h-6" stroke-width="2"/><path d="M11.77 5v14m1.845-5H3m18-4H3"/></g><defs><clipPath id="clip0_489_191508"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tabcells-addIcon',
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