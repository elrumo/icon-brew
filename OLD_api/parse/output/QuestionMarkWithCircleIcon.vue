
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201326)"><circle cx="9" cy="9" r="6.5" :stroke="color" stroke-linecap="round"/><path d="M9.5 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/><path d="M9 10.5V10c0-.873 1.791-1.5 1.5-3-.291-1.5-2.5-1.5-3 0" :stroke="color" stroke-linecap="round" filter="url(#filter0_d_489_201326)"/></g><defs><filter id="filter0_d_489_201326" x="3" y="5.375" width="12.033" height="13.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_489_201326"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_489_201326" result="shape"/></filter><clipPath id="clip0_489_201326"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191446)"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/><path d="M12 14v-1c0-1 3-1.5 2.5-4s-4.5-2.5-5 0" :stroke="color" stroke-width="2" stroke-linecap="round" filter="url(#filter0_d_489_191446)"/></g><defs><filter id="filter0_d_489_191446" x="4.5" y="6.125" width="15.056" height="16.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_489_191446"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_489_191446" result="shape"/></filter><clipPath id="clip0_489_191446"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'question-mark-with-circleIcon',
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