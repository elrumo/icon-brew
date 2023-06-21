
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198882)" :stroke="color"><path d="M2.5 6.5c0-.943 0-1.414.293-1.707C3.086 4.5 3.557 4.5 4.5 4.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707V12c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293C2.5 13.414 2.5 12.943 2.5 12V6.5z"/><path d="M3.4 4.8l3.2 2.4c1.156.867 1.733 1.3 2.4 1.3.667 0 1.245-.433 2.4-1.3l3.2-2.4"/></g><defs><clipPath id="clip0_489_198882"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191329)" :stroke="color" stroke-width="2"><path d="M8 5h8c1.442 0 2.424.002 3.159.1.706.096 1.033.263 1.255.486.223.222.39.55.485 1.255.099.735.101 1.717.101 3.159v4c0 1.443-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.735.099-1.716.101-3.159.101H8c-1.442 0-2.424-.002-3.159-.1-.706-.096-1.033-.263-1.255-.486-.223-.222-.39-.55-.485-1.255C3.002 16.424 3 15.443 3 14v-4c0-1.442.002-2.424.1-3.159.096-.706.263-1.033.486-1.255.222-.223.55-.39 1.255-.485C5.576 5.002 6.558 5 8 5z"/><path d="M4 6l5.6 4.2c1.156.867 1.733 1.3 2.4 1.3.667 0 1.244-.433 2.4-1.3L20 6"/></g><defs><clipPath id="clip0_489_191329"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'emailIcon',
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