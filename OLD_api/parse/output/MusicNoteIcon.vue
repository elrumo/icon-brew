
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202547)"><path d="M14.762 6.262h.5v-1h-.5v1zM7.5 9H8V8h-.5v1zm7.262-3.738A3.262 3.262 0 0 1 11.5 2h-1a4.262 4.262 0 0 0 4.262 4.262v-1zM10.5 2v10h1V2h-1zm0 10a3 3 0 0 1-3 3v1a4 4 0 0 0 4-4h-1zm-3 3a3 3 0 0 1-3-3h-1a4 4 0 0 0 4 4v-1zm-3-3a3 3 0 0 1 3-3V8a4 4 0 0 0-4 4h1z" :fill="color"/></g><defs><clipPath id="clip0_489_202547"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191513)"><path d="M19.737 8.737h1v-2h-1v2zM10.5 12h1v-2h-1v2zm9.237-5.263A3.737 3.737 0 0 1 16 3h-2a5.737 5.737 0 0 0 5.737 5.737v-2zM14 3v12.5h2V3h-2zm0 12.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5h-2zM10.5 19A3.5 3.5 0 0 1 7 15.5H5a5.5 5.5 0 0 0 5.5 5.5v-2zM7 15.5a3.5 3.5 0 0 1 3.5-3.5v-2A5.5 5.5 0 0 0 5 15.5h2z" :fill="color"/></g><defs><clipPath id="clip0_489_191513"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'music-noteIcon',
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