
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202435)" :stroke="color"><path d="M11 4H6.5c-1.886 0-2.828 0-3.414.586C2.5 5.172 2.5 6.114 2.5 8v2c0 1.886 0 2.828.586 3.414C3.672 14 4.614 14 6.5 14H11c1.886 0 2.828 0 3.414-.586C15 12.828 15 11.886 15 10V8c0-1.886 0-2.828-.586-3.414C13.828 4 12.886 4 11 4z"/><path d="M9 4v10m6-3.5H3m12-3H3" stroke-width=".5" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202435"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191509)" :stroke="color"><path d="M17 5H7c-1.886 0-2.828 0-3.414.586C3 6.172 3 7.114 3 9v6c0 1.886 0 2.828.586 3.414C4.172 19 5.114 19 7 19h10c1.886 0 2.828 0 3.414-.586C21 17.828 21 16.886 21 15V9c0-1.886 0-2.828-.586-3.414C19.828 5 18.886 5 17 5z" stroke-width="2"/><path d="M11.77 5v14M21 14H3m18-4H3" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191509"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tabcellsIcon',
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