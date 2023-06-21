
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198214)"><g clip-path="url(#clip1_489_198214)"><circle cx="9" cy="9" r="6.5" transform="rotate(90 9 9)" :stroke="color"/><path d="M10.004 7.336l-.395-.263C8.241 6.16 7.556 5.704 7.03 5.987 6.5 6.269 6.5 7.092 6.5 8.737v.526c0 1.645 0 2.467.528 2.75.528.283 1.213-.173 2.581-1.086l.395-.263c1.129-.753 1.693-1.129 1.693-1.664 0-.535-.564-.911-1.693-1.664z" :fill="color"/></g></g><defs><clipPath id="clip0_489_198214"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198214"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191289)"><g clip-path="url(#clip1_489_191289)"><circle cx="12" cy="12" r="9" transform="rotate(90 12 12)" :stroke="color" stroke-width="2"/><path d="M14.286 10.304L12.06 8.912c-1.353-.845-2.03-1.268-2.545-.982C9 8.215 9 9.013 9 10.608v2.784c0 1.595 0 2.393.515 2.678.515.286 1.192-.137 2.545-.982l2.226-1.392c1.218-.761 1.827-1.142 1.827-1.696s-.609-.935-1.827-1.696z" :fill="color"/></g></g><defs><clipPath id="clip0_489_191289"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191289"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-circle-rightIcon',
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