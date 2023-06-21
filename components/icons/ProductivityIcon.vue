
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201314)"><path d="M2.717 12.358a.5.5 0 1 0 .885-.466l-.885.466zm2.628-9.496a.5.5 0 1 0-.69-.724l.69.724zm-1.743 9.03c-.919-1.748-1.521-5.926 1.743-9.03l-.69-.724c-3.677 3.497-3.001 8.196-1.938 10.22l.885-.466z" :fill="color"/><path d="M8.637 8.875l-2.94 3.609a1.01 1.01 0 0 0-.158.27l-.705 1.813c-.263.676.511 1.296 1.166.933l1.827-1.013a1.06 1.06 0 0 0 .309-.257l7.083-8.77a.993.993 0 0 0-.194-1.439L14.32 3.5a1.114 1.114 0 0 0-1.511.18l-.575.705a.279.279 0 0 1-.377.045l-.567-.418a.557.557 0 0 0-.755.09L9.5 5.373" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_201314"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191445)"><path d="M6.747 3.665a1 1 0 0 0-1.494-1.33l1.494 1.33zM2.574 15.289a1 1 0 0 0 1.914-.578l-1.914.578zm1.914-.578c-.812-2.695-.945-7.445 2.26-11.046l-1.495-1.33C1.429 6.633 1.64 12.192 2.573 15.29l1.915-.578z" :fill="color"/><path d="M11.16 12.064l-3.875 4.674a1.3 1.3 0 0 0-.208.35l-.93 2.348c-.348.876.673 1.679 1.537 1.209l2.41-1.312A1.39 1.39 0 0 0 10.5 19L20.541 7.038c.48-.579.366-1.413-.255-1.863l-.931-.675c-.62-.45-1.513-.346-1.993.233l-.757.914a.372.372 0 0 1-.499.058l-.746-.541a.744.744 0 0 0-.997.116L13 6.924" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191445"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'productivityIcon',
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