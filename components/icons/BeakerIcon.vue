
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197275)"><path d="M6.333 2.5v4.122c0 .188 0 .283-.017.375-.017.092-.052.18-.12.355L4.07 12.77c-.486 1.238-.729 1.857-.43 2.293.297.437.962.437 2.292.437h6.134c1.33 0 1.995 0 2.293-.437.298-.436.055-1.055-.43-2.293l-2.125-5.418c-.07-.175-.104-.263-.12-.355-.018-.092-.018-.187-.018-.375V2.5m1.222 8.056H5.11M13 2.5H5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197275"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191243)"><path d="M8 3v5.668c0 .415 0 .622-.042.823-.042.202-.124.392-.29.772l-2.235 5.142c-1.098 2.525-1.647 3.788-1.055 4.692C4.97 21 6.348 21 9.1 21h5.798c2.754 0 4.13 0 4.723-.903.592-.904.043-2.167-1.055-4.692l-2.235-5.142c-.166-.38-.248-.57-.29-.772C16 9.29 16 9.083 16 8.668V3m1 11H7M18 3H6" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191243"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'beakerIcon',
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