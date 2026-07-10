
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196828)"><path d="M14.48 10.448l-1.521 1.449c-.572.544-.859.817-1.216.96C11.385 13 10.99 13 10.2 13H4.35c-1.003 0-1.505 0-1.635-.304-.13-.304.219-.666.915-1.39l.885-.92c.631-.655.947-.983.947-1.386 0-.403-.316-.731-.947-1.387l-.885-.92c-.696-.723-1.044-1.084-.915-1.389C2.845 5 3.347 5 4.35 5h5.85c.79 0 1.185 0 1.543.143.357.143.643.416 1.216.96l1.52 1.449c.714.68 1.071 1.02 1.071 1.448 0 .429-.357.768-1.07 1.448z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196828"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191227)"><path d="M19.172 14.828l-1.415 1.415c-.867.867-1.3 1.3-1.852 1.529-.55.228-1.164.228-2.39.228H4.273c-.975 0-1.463 0-1.594-.299-.131-.298.198-.658.857-1.377l1.486-1.621C6.2 13.42 6.787 12.778 6.787 12c0-.778-.588-1.42-1.765-2.703L3.536 7.676c-.659-.72-.988-1.079-.857-1.377C2.81 6 3.298 6 4.273 6h9.242c1.226 0 1.84 0 2.39.228.552.229.985.662 1.852 1.53l1.415 1.414c1.333 1.333 2 2 2 2.828 0 .828-.667 1.495-2 2.828z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191227"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-thick-rightIcon',
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