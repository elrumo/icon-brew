
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199113)"><path d="M5.354 15.5c-.54-.539-2.26-1.862-1.62-3.5.766-1.961.24-3.157 0-4.115-.294-1.168 2.16 1.615 3.242 2.154.54.269-.54-2.154.54-3.77 1.08-1.615.54-1.825.54-3.769.9.18 3.458 1.077 2.162 5.385-1.621 5.384.872-1.682 3.242-2.154 2.701-.539-1.282 1.95.54 5.384C15 13 13.5 15 12.5 15.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199113"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191342)"><path d="M6.792 21c-.786-.77-2.792-1.5-2.358-4.923.4-3.16.35-4.016 0-5.385C4.008 9.024 7.578 13 9.15 13.77c.786.385-.786-3.077.786-5.384 1.572-2.308.786-2.608.786-5.385 1.31.256 5.03 1.538 3.144 7.692-2.358 7.693 1.269-2.402 4.715-3.077 3.93-.769-1.38 2.545.786 7.693C20.5 18 18.5 20.5 17.5 21" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191342"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'flameIcon',
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