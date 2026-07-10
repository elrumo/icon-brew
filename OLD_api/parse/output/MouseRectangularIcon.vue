
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_200476)"><path d="M9 2.5v3m4 6v-5c0-1.886 0-2.828-.586-3.414C11.828 2.5 10.886 2.5 9 2.5c-1.886 0-2.828 0-3.414.586C5 3.672 5 4.614 5 6.5v5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586C13 14.328 13 13.386 13 11.5z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_200476"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191408)"><path d="M12 3v5.5m6 6.5V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3c-2.828 0-4.243 0-5.121.879C6 4.757 6 6.172 6 9v6c0 2.828 0 4.243.879 5.121C7.757 21 9.172 21 12 21c2.828 0 4.243 0 5.121-.879C18 19.243 18 17.828 18 15z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191408"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'mouse-rectangularIcon',
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