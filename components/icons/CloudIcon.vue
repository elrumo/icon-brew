
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198428)"><path d="M13 9a2 2 0 1 1 0 4H5.5a2.5 2.5 0 1 1 2.292-3.5M13 9c.8-2.286-1.2-4-3.4-4S5.7 6.714 6 8m7 1c-.597 0-1.133.262-1.5.677" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_198428"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191302)"><path d="M18 12a3 3 0 1 1 0 6H6.75a3.75 3.75 0 1 1 3.438-5.25M18 12c1.2-3.429-1.8-6-5.1-6s-5.85 2.571-5.4 4.5M18 12c-.896 0-1.7.393-2.25 1.016" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191302"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'cloudIcon',
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