
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201116)"><path d="M13.864 14.5C10.528 17.837.34 7.65 3.677 4.313l1.407-1.407a1 1 0 0 1 1.57.202l.908 1.551a1 1 0 0 1-.036 1.066l-.52.77a1 1 0 0 0 .12 1.267L8.77 9.406l1.645 1.645a1 1 0 0 0 1.268.12l.769-.52a1 1 0 0 1 1.065-.036l1.552.908a1 1 0 0 1 .202 1.57L13.864 14.5zM9.5 5.5l3-3m0 0h-2m2 0v2m3 1l-3 3m0 0h2m-2 0v-2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201116"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191434)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M17.935 19.5C13.535 23.9.1 10.465 4.5 6.065l1.232-1.232a2 2 0 0 1 3.14.405l.535.914a2 2 0 0 1-.071 2.131l-.363.535a1.5 1.5 0 0 0 .182 1.902l2.062 2.063 2.063 2.062a1.5 1.5 0 0 0 1.902.181l.535-.362a2 2 0 0 1 2.131-.07l.914.534a2 2 0 0 1 .404 3.14L17.935 19.5z" stroke-width="2"/><path d="M13 6.5l4-4m0 0h-2.5m2.5 0V5m4 1.5l-4 4m0 0h2.5m-2.5 0V8" stroke-width="1.5"/></g><defs><clipPath id="clip0_489_191434"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'phone-call-transferIcon',
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