
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198602)"><path d="M12.12 9.73l1.1-.4c.97-.353 1.454-.53 1.468-.864.014-.334-.455-.55-1.392-.983L7.43 4.775c-2.065-.953-3.098-1.43-3.59-.937-.494.493-.017 1.526.936 3.59l2.708 5.868c.432.937.649 1.406.983 1.392.335-.014.511-.499.864-1.469l.4-1.098c.314-.862.471-1.293.784-1.607.314-.313.745-.47 1.607-.784z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198602"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191312)"><path d="M15.06 12.865l3.765-1.534c.93-.379 1.394-.568 1.399-.899.005-.33-.453-.534-1.37-.941l-7.35-3.267c-4.005-1.78-6.007-2.67-6.979-1.699-.971.972-.081 2.974 1.699 6.979l3.267 7.35c.407.917.61 1.375.941 1.37.33-.005.52-.47.899-1.399l1.534-3.765c.313-.77.47-1.154.755-1.44.286-.285.67-.442 1.44-.755z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191312"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'cursor-pointerIcon',
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