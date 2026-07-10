
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201216)"><path d="M4 5.482c0-1.547 0-2.32.502-2.608.502-.288 1.17.101 2.506.88l6.03 3.518c1.318.77 1.977 1.154 1.977 1.728 0 .574-.659.959-1.976 1.728l-6.031 3.518c-1.336.779-2.004 1.168-2.506.88C4 14.838 4 14.065 4 12.518V5.482z" :stroke="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201216"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191440)"><path d="M5 8.798c0-3.028 0-4.543.986-5.123.985-.58 2.31.156 4.957 1.626l5.763 3.202c2.784 1.547 4.176 2.32 4.176 3.497s-1.392 1.95-4.176 3.497l-5.763 3.202c-2.648 1.47-3.972 2.206-4.957 1.626C5 19.745 5 18.23 5 15.202V8.798z" :stroke="color" stroke-width="2" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191440"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'playIcon',
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