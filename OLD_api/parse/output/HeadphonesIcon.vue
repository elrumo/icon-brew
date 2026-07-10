
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199398)"><path d="M3.719 13.053l-.475-1.69C2.75 9.604 2.312 7.69 3.13 6.056 4.182 3.954 6.437 2.5 9 2.5c2.557 0 4.806 1.469 5.862 3.558.824 1.631.387 3.546-.106 5.306l-.475 1.69M6 11l1 4m4 0l1-4" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_199398"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191361)"><path d="M4.688 17l-.881-3.005c-.535-1.827-.973-3.788-.267-5.555C4.806 5.267 8.152 3 12 3c3.84 0 7.18 2.292 8.452 5.442.713 1.764.276 3.726-.259 5.553L19.313 17M8 14l1.5 6m5 0l1.5-6" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191361"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'headphonesIcon',
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