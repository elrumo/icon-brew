
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202714)"><g clip-path="url(#clip1_489_202714)"><path d="M4.5 6.5l.802 7.22c.094.847.141 1.27.426 1.525.285.255.71.255 1.562.255h3.42c.851 0 1.277 0 1.562-.255.285-.255.332-.678.426-1.524L13.5 6.5M7 4.5c0-.943 0-1.414.293-1.707C7.586 2.5 8.057 2.5 9 2.5c.943 0 1.414 0 1.707.293C11 3.086 11 3.557 11 4.5m3 0H4" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M11 7.5l-.5 5.5M7 7.5l.5 5.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_202714"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202714"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191523)"><g clip-path="url(#clip1_489_191523)"><path d="M5 9.5l1.087 8.036c.223 1.65.335 2.476.9 2.97.566.494 1.398.494 3.064.494h3.898c1.666 0 2.499 0 3.064-.494s.677-1.32.9-2.97L19 9.5M9 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 3 11.068 3 12 3c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 4.602 15 5.068 15 6m4 0H5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M9.5 10l.5 7.5m4.5-7.5l-.5 7.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191523"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191523"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'trash-with-linesIcon',
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