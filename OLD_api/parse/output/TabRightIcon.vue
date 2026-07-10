
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202390)"><g clip-path="url(#clip1_489_202390)"><path d="M2.5 9h13m0 0l-6 6m6-6l-6-6m6 0v12" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_202390"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202390"><path :fill="color" transform="rotate(-90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191506)"><g clip-path="url(#clip1_489_191506)"><path d="M3 12h18m0 0l-9 9m9-9l-9-9m9 0v18" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><clipPath id="clip0_489_191506"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191506"><path :fill="color" transform="rotate(-90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tab-rightIcon',
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