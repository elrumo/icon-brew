
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202881)"><g clip-path="url(#clip1_489_202881)"><path d="M12.5 4H11c-.943 0-1.414 0-1.707.293C9 4.586 9 5.057 9 6v3m3.5 5H11c-.943 0-1.414 0-1.707-.293C9 13.414 9 12.943 9 12V9m0 0H5.5M4 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" :stroke="color"/></g></g><defs><clipPath id="clip0_489_202881"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202881"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191533)"><g clip-path="url(#clip1_489_191533)"><path d="M16 5.5c-1.886 0-2.828 0-3.414.586C12 6.672 12 7.614 12 9.5V12m4 6.5c-1.886 0-2.828 0-3.414-.586C12 17.328 12 16.386 12 14.5V12m0 0H8M5.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" :stroke="color" stroke-width="2"/></g></g><defs><clipPath id="clip0_489_191533"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191533"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tree-map-rightIcon',
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