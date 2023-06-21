
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201341)" :stroke="color"><path d="M4.394 4.308a6.574 6.574 0 0 0-1.957 4.69c0 1.802.722 3.434 1.89 4.623m9.279.066a6.574 6.574 0 0 0 1.957-4.69 6.574 6.574 0 0 0-1.89-4.622M6.12 6.067a4.109 4.109 0 0 0-1.223 2.93c0 1.127.451 2.147 1.182 2.89m5.799.042a4.11 4.11 0 0 0 1.223-2.931c0-1.126-.451-2.147-1.182-2.89" stroke-linecap="round"/><path d="M10.14 8.998c0 .634-.512 1.146-1.14 1.146-.628 0-1.14-.512-1.14-1.146 0-.635.512-1.146 1.14-1.146.628 0 1.14.511 1.14 1.146z" :fill="color"/></g><defs><clipPath id="clip0_489_201341"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191447)" :stroke="color" stroke-width="2"><path d="M5.62 5.636A8.831 8.831 0 0 0 2.91 12c0 2.445.998 4.66 2.618 6.273m12.853.09A8.831 8.831 0 0 0 21.09 12c0-2.445-1-4.66-2.619-6.273M8.012 8.023a5.517 5.517 0 0 0-.057 7.898m8.033.056a5.517 5.517 0 0 0 .057-7.898" stroke-linecap="round"/><path d="M13.273 12c0 .665-.554 1.233-1.273 1.233-.72 0-1.273-.568-1.273-1.233 0-.665.554-1.233 1.273-1.233.72 0 1.273.568 1.273 1.233z" :fill="color"/></g><defs><clipPath id="clip0_489_191447"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'radioIcon',
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