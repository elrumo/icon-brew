
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198591)"><path d="M6.752 4.112L15 7.778 11.5 9.5l3 3-2.237 2.158L9.5 11.5 7.778 15 4.112 6.752c-.89-2.003-1.335-3.004-.85-3.49.486-.485 1.487-.04 3.49.85z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198591"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191311)"><path d="M11.504 6.224l7.26 3.227c.95.422 1.425.633 1.415.969-.01.335-.497.517-1.471.881l-.12.045c-1.38.516-2.071.774-2.176 1.327-.105.553.443 1.046 1.539 2.033l.982.884c.735.662 1.103.992 1.114 1.422.011.43-.338.78-1.038 1.479l-.518.518c-.7.7-1.05 1.05-1.48 1.038-.429-.011-.76-.379-1.421-1.114l-.884-.982c-.987-1.096-1.48-1.644-2.033-1.54-.553.106-.811.796-1.327 2.178l-.045.119c-.364.974-.546 1.46-.881 1.47-.336.01-.547-.464-.97-1.414l-3.226-7.26c-1.78-4.005-2.67-6.007-1.699-6.979.972-.971 2.974-.081 6.979 1.699z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191311"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'cursor-defaultIcon',
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