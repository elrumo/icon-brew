
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_203029)"><path d="M12.539 7.272L6.508 3.755c-1.336-.78-2.004-1.17-2.506-.881C3.5 3.162 3.5 3.935 3.5 5.482v7.036c0 1.546 0 2.32.502 2.608.502.288 1.17-.101 2.506-.88l6.03-3.518c1.318-.77 1.977-1.154 1.977-1.728 0-.574-.659-.959-1.976-1.728z" :fill="color"/></g><defs><clipPath id="clip0_489_203029"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191541)"><path d="M15.206 8.503L9.443 5.301C6.795 3.831 5.47 3.095 4.486 3.675 3.5 4.255 3.5 5.77 3.5 8.798v6.404c0 3.028 0 4.543.986 5.123.985.58 2.31-.156 4.957-1.626l5.763-3.202c2.784-1.547 4.176-2.32 4.176-3.497s-1.392-1.95-4.176-3.497z" :fill="color"/></g><defs><clipPath id="clip0_489_191541"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'triangle-right-filledIcon',
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