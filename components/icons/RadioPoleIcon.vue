
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201364)" :stroke="color"><path d="M4.47 2.5A6.623 6.623 0 0 0 2.5 7.224c0 1.815.727 3.46 1.904 4.658m9.347.067a6.623 6.623 0 0 0 1.971-4.725c0-1.815-.726-3.46-1.904-4.657M6.211 4.272a4.14 4.14 0 0 0-1.232 2.952c0 1.135.454 2.163 1.19 2.911m5.842.042a4.14 4.14 0 0 0 1.232-2.953 4.139 4.139 0 0 0-1.19-2.91" stroke-linecap="round"/><path d="M10.264 7.224c0 .641-.518 1.158-1.153 1.158a1.155 1.155 0 0 1-1.153-1.158c0-.64.518-1.158 1.153-1.158s1.153.517 1.153 1.158z" :fill="color"/><path d="M9.111 7.222v8.028" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201364"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191448)" :stroke="color" stroke-width="2"><path d="M5.483 2.714a9.02 9.02 0 0 0-2.769 6.5c0 2.498 1.021 4.76 2.675 6.408m13.128.092a9.02 9.02 0 0 0 2.769-6.5c0-2.497-1.021-4.76-2.675-6.407M7.927 5.152a5.635 5.635 0 0 0-.059 8.067m8.205.058a5.636 5.636 0 0 0 .059-8.067" stroke-linecap="round"/><path d="M13.321 9.214c0 .692-.575 1.282-1.321 1.282s-1.321-.59-1.321-1.282c0-.69.575-1.28 1.321-1.28s1.321.59 1.321 1.28z" :fill="color"/><path d="M12 11.072v9.285" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191448"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'radio-poleIcon',
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