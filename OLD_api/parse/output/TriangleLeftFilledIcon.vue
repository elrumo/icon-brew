
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202988)"><path d="M5.462 10.728l6.03 3.518c1.336.779 2.004 1.168 2.506.88.502-.288.502-1.061.502-2.608V5.482c0-1.547 0-2.32-.502-2.608-.502-.288-1.17.101-2.506.88l-6.03 3.518C4.144 8.042 3.485 8.426 3.485 9c0 .574.659.959 1.977 1.728z" :fill="color"/></g><defs><clipPath id="clip0_489_202988"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191539)"><path d="M8.794 15.497l5.763 3.202c2.648 1.47 3.972 2.206 4.957 1.626.986-.58.986-2.095.986-5.123V8.798c0-3.028 0-4.543-.986-5.123-.985-.58-2.31.156-4.957 1.626L8.794 8.503C6.01 10.05 4.618 10.823 4.618 12s1.392 1.95 4.176 3.497z" :fill="color"/></g><defs><clipPath id="clip0_489_191539"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'triangle-left-filledIcon',
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