
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197822)" :stroke="color"><path d="M15.5 7.143h-13M12.714 2.5v2.786M5.286 2.5v2.786M7.5 15.5h-1c-1.886 0-2.828 0-3.414-.586C2.5 14.328 2.5 13.386 2.5 11.5V7.893c0-1.886 0-2.829.586-3.414.586-.586 1.529-.586 3.415-.586h4.998c1.886 0 2.83 0 3.415.586.586.585.586 1.528.586 3.414V8" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M13 12v1h1" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197822"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191265)" :stroke="color" stroke-width="2"><path d="M21 10H3m14.4-7v3.6M6.6 3v3.6M10 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V8.8c0-1.886 0-2.828.586-3.414C4.172 4.8 5.115 4.8 7 4.8H17c1.886 0 2.83 0 3.415.586C21 5.972 21 6.914 21 8.8v1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/><path d="M17.5 16v1.5H19" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191265"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'calendar-bookingIcon',
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