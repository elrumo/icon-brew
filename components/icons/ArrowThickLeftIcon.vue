
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196817)"><path d="M3.52 7.552l1.521-1.449c.573-.544.859-.817 1.216-.96C6.615 5 7.01 5 7.8 5h5.85c1.003 0 1.505 0 1.635.304.13.305-.219.666-.915 1.39l-.885.92c-.631.655-.947.983-.947 1.386 0 .403.316.731.947 1.387l.885.92c.696.723 1.044 1.085.915 1.389-.13.304-.632.304-1.636.304H7.8c-.79 0-1.185 0-1.543-.143-.357-.143-.643-.415-1.216-.96l-1.52-1.449C2.807 9.768 2.45 9.428 2.45 9c0-.429.357-.768 1.07-1.448z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196817"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191226)"><path d="M4.828 9.172l1.415-1.415c.867-.867 1.3-1.3 1.852-1.529C8.645 6 9.259 6 10.485 6h9.242c.975 0 1.463 0 1.594.299.131.298-.198.658-.857 1.377l-1.486 1.621C17.8 10.58 17.213 11.222 17.213 12c0 .778.588 1.42 1.765 2.703l1.486 1.621c.659.72.988 1.079.857 1.377-.131.299-.619.299-1.594.299h-9.242c-1.226 0-1.84 0-2.39-.228-.552-.229-.985-.662-1.852-1.53l-1.415-1.414c-1.333-1.333-2-2-2-2.828 0-.828.667-1.495 2-2.828z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191226"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-thick-leftIcon',
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