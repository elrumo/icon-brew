
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199975)"><path d="M9 9.5h3c.978 0 1.467 0 1.762-.458.296-.458.14-.8-.17-1.485C12.827 5.862 11.059 4.805 9 4.805M9 9.5H7.5m1.5 0h1.5c0 1.083 0 2-1.5 2s-1.5-.917-1.5-2M9 4.805c-2.058 0-3.826 1.057-4.593 2.752-.31.685-.465 1.027-.17 1.485.296.458.785.458 1.763.458h1.5M9 4.805V2.5M5.071 14.916l1.072-1.444M9 15.5V14m3.929.916l-1.072-1.444" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199975"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191387)"><path d="M12 12.5h3c1.892 0 2.838 0 3.394-1.095.556-1.094.176-1.614-.584-2.654C16.552 7.031 14.42 6 12 6m0 6.5H9.5m2.5 0h2.5c0 1.5 0 3-2.5 3s-2.5-1.5-2.5-3M12 6C9.58 6 7.448 7.032 6.19 8.751c-.76 1.04-1.14 1.56-.584 2.654C6.162 12.5 7.108 12.5 9 12.5h.5M12 6V3M6.5 20L8 18m4 3v-2m5.5 1L16 18" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191387"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'lights-onIcon',
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