
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202302)"><path d="M15 9H3m9.49-5.2C11.807 2.912 10.5 2.5 9 2.5c-2.21 0-4 .895-4 2.889 0 .664.133 1.206.414 1.661.217.35.52.648.92.91C6.97 8.378 7.85 8.704 9 9c1.376.355 2.366.752 3.017 1.3.673.567.983 1.297.983 2.311 0 1.994-1.79 2.889-4 2.889-1.391 0-2.617-.355-3.333-1.116" :stroke="color" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202302"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191501)"><path d="M21 12H3m14.236-7.2C16.209 3.57 14.249 3 12 3 8.686 3 6 4.239 6 7c0 .92.2 1.67.621 2.3.325.485.781.897 1.379 1.26.957.579 2.276 1.03 4 1.44 2.064.492 3.549 1.04 4.525 1.8C17.535 14.585 18 15.596 18 17c0 2.761-2.686 4-6 4-2.087 0-3.925-.491-5-1.545" :stroke="color" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191501"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'strikethroughIcon',
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