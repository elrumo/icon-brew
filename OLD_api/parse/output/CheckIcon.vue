
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197931)"><path d="M3 11l2.2 2.933c.367.49.55.734.8.734s.433-.245.8-.734L15 3" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_197931"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191272)"><path d="M4 14.667l3.2 4.266c.367.49.55.734.8.734s.433-.245.8-.734L20 4" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191272"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'checkIcon',
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