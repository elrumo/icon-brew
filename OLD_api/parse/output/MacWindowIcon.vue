
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200198)"><path stroke="#9B51E0" stroke-width=".1" d="M0.035 -0.035L18.035 17.965"/><path transform="scale(-1 1) rotate(45 -9 -21.728)" stroke="#9B51E0" stroke-width=".1" d="M0 -0.05L25.456 -0.05"/><circle cx="9" cy="9" r="7" stroke="#9B51E0" stroke-width=".1"/><path stroke="#9B51E0" stroke-width=".1" d="M3 3H15V15H3z"/><path stroke="#9B51E0" stroke-width=".1" d="M2 4H16V14H2z"/><path transform="rotate(90 14 2)" stroke="#9B51E0" stroke-width=".1" d="M14 2H28V12H14z"/><path d="M2.5 5v7.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V5" :stroke="color"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.8h14V5c0-.943 0-1.414-.293-1.707C15.414 3 14.943 3 14 3H4c-.943 0-1.414 0-1.707.293C2 3.586 2 4.057 2 5v.8zm2-1.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" :fill="color"/></g><defs><clipPath id="clip0_489_200198"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v9c0 1.886 0 2.828.586 3.414C4.172 20 5.114 20 7 20h10c1.886 0 2.828 0 3.414-.586C21 18.828 21 17.886 21 16V7" :stroke="color" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7h20c0-1.886 0-2.828-.586-3.414C20.828 3 19.886 3 18 3H6c-1.886 0-2.828 0-3.414.586C2 4.172 2 5.114 2 7zm3-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'mac-windowIcon',
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