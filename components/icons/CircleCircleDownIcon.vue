
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198172)"><g clip-path="url(#clip1_489_198172)"><circle cx="9" cy="9" r="6.5" transform="rotate(-180 9 9)" :stroke="color"/><path d="M10.664 10.004l.263-.395c.913-1.368 1.369-2.053 1.086-2.58-.283-.529-1.105-.529-2.75-.529h-.526c-1.645 0-2.468 0-2.75.528-.283.528.173 1.213 1.086 2.581l.263.395c.753 1.129 1.129 1.693 1.664 1.693.535 0 .911-.564 1.664-1.693z" :fill="color"/></g></g><defs><clipPath id="clip0_489_198172"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_198172"><path :fill="color" transform="rotate(-180 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191287)"><g clip-path="url(#clip1_489_191287)"><circle cx="12" cy="12" r="9" transform="rotate(-180 12 12)" :stroke="color" stroke-width="2"/><path d="M13.696 14.286l1.392-2.226c.845-1.353 1.268-2.03.982-2.545C15.785 9 14.987 9 13.392 9h-2.784c-1.595 0-2.393 0-2.678.515-.286.515.137 1.192.982 2.545l1.392 2.226c.761 1.218 1.142 1.827 1.696 1.827s.935-.609 1.696-1.827z" :fill="color"/></g></g><defs><clipPath id="clip0_489_191287"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191287"><path :fill="color" transform="rotate(-180 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-circle-downIcon',
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