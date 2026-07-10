
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202626)"><path d="M3 3h12M3 7h12M3 11h12M3 15h12" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202626"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191518)"><path d="M3 3h18M3 9h18M3 15h18M3 21h18" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191518"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'text-align-justifiedIcon',
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