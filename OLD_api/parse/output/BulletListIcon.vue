
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197745)"><path d="M5.5 5h10m-10 4h10m-10 4h10" :stroke="color" stroke-linecap="round"/><path d="M3 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/></g><defs><clipPath id="clip0_489_197745"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191259)"><path d="M8 7h13M8 12h13M8 17h13" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M4 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191259"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'bullet-listIcon',
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