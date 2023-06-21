
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198457)"><path d="M13.5 9v3.5h1V9h-1zm-9 3.5V9h-1v3.5h1zm-.5-3h5v-1H4v1zm5 0h5v-1H9v1zm.5-.5V5.5h-1V9h1zm-5 0V5.5h-1V9h1zm10 0V5.5h-1V9h1zm-6 0v3.5h1V9h-1z" :fill="color"/><path d="M10.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :stroke="color"/></g><defs><clipPath id="clip0_489_198457"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191304)"><path d="M18 12v5h2v-5h-2zM6 17v-5H4v5h2zm-1-4h7v-2H5v2zm7 0h7v-2h-7v2zm1-1V7h-2v5h2zm-7 0V7H4v5h2zm14 0V7h-2v5h2zm-9 0v5h2v-5h-2z" :fill="color"/><path d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-7 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" :stroke="color" stroke-width="2"/></g><defs><clipPath id="clip0_489_191304"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'connectionsIcon',
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