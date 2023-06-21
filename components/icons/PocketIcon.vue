
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201226)" :stroke="color"><path d="M3 6.475c0-1.38 0-2.07.326-2.57a2 2 0 0 1 .58-.579C4.403 3 5.093 3 6.474 3h5.05c1.38 0 2.07 0 2.57.326a2 2 0 0 1 .579.58C15 4.403 15 5.093 15 6.474V8.63a6.658 6.658 0 0 1-.726 3.025c-2.197 4.307-8.351 4.307-10.548 0A6.66 6.66 0 0 1 3 8.63V6.475z"/><path d="M6 8l1.586 1.586c.666.666 1 1 1.414 1 .414 0 .748-.334 1.414-1L12 8" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_201226"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191441)" :stroke="color" stroke-width="2"><path d="M3 6.513c0-.944 0-1.416.156-1.788a2 2 0 0 1 1.07-1.069c.37-.156.843-.156 1.787-.156h11.974c.944 0 1.416 0 1.788.156a2 2 0 0 1 1.069 1.07c.156.37.156.843.156 1.787v2.044a16 16 0 0 1-1.874 7.483l-.088.165c-3.024 5.596-11.052 5.596-14.076 0l-.088-.165-.029-.055A16 16 0 0 1 3 8.557V6.513z"/><path d="M8 10l2.586 2.586c.666.666 1 1 1.414 1 .414 0 .748-.334 1.414-1L16 10" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191441"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'pocketIcon',
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