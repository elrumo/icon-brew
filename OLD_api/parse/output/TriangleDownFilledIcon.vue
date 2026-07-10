
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202937)"><path d="M10.728 12.539l3.518-6.031c.779-1.336 1.168-2.004.88-2.506-.288-.502-1.061-.502-2.608-.502H5.482c-1.547 0-2.32 0-2.608.502-.288.502.101 1.17.88 2.506l3.518 6.03c.77 1.318 1.154 1.977 1.728 1.977.574 0 .959-.659 1.728-1.976z" :fill="color"/></g><defs><clipPath id="clip0_489_202937"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191536)"><path d="M15.497 15.206l3.202-5.763c1.47-2.648 2.206-3.972 1.626-4.957-.58-.986-2.095-.986-5.123-.986H8.798c-3.028 0-4.543 0-5.123.986-.58.985.156 2.31 1.626 4.957l3.202 5.763c1.547 2.784 2.32 4.176 3.497 4.176s1.95-1.392 3.497-4.176z" :fill="color"/></g><defs><clipPath id="clip0_489_191536"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'triangle-down-filledIcon',
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