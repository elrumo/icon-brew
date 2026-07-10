
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202602)"><path d="M9 2.5v13m0-13h3c.943 0 1.414 0 1.707.293C14 3.086 14 3.557 14 4.5v.154M9 2.5H6c-.943 0-1.414 0-1.707.293C4 3.086 4 3.557 4 4.5v.154M9 15.5H6m3 0h3" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202602"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191516)"><path d="M12 3v18m0-18h4.14c1.75 0 2.625 0 3.194.51a2 2 0 0 1 .156.156c.51.57.51 1.444.51 3.194V7m-8-4H7.86c-1.75 0-2.625 0-3.194.51-.055.05-.107.101-.156.156C4 4.236 4 5.11 4 6.86V7m8 14H8m4 0h4" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191516"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'text-3Icon',
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