
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201559)"><path d="M5.467 7.741l-1.398 2.446c-.76 1.331-1.14 1.997-.852 2.495.29.498 1.056.498 2.589.498h.698M5.467 7.74l-2.46.375m2.46-.375l.905 2.317m3.17 3.25l2.817-.012c1.532-.006 2.299-.01 2.585-.51.287-.499-.096-1.162-.862-2.49l-.35-.604m-4.19 3.617l1.553 1.942M9.542 13.31l1.553-1.942M12.29 7.07L10.87 4.638c-.772-1.324-1.158-1.986-1.734-1.985-.576.001-.96.665-1.726 1.992l-.349.605m5.229 1.821l.905-2.317m-.905 2.317l-2.46-.374" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201559"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191461)"><path d="M6.5 11.5l-.58 1.015c-1.521 2.662-2.282 3.993-1.703 4.989.578.996 2.11.996 5.176.996h.442m-3.335-7l-3.165.482M6.5 11.5l1.165 2.982m8.065-6.518l-.59-1.01c-1.544-2.648-2.316-3.972-3.468-3.97-1.152.003-1.918 1.33-3.45 3.985L8 7.352m7.73.612l1.165-2.982M15.73 7.964l-3.165-.482m1.102 10.906l1.17-.005c3.065-.014 4.598-.02 5.172-1.02.573-.998-.193-2.325-1.726-4.98l-.22-.383m-4.396 6.388l2 2.5m-2-2.5l2-2.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191461"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'recycle-triangleIcon',
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