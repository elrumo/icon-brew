
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199567)" :stroke="color"><path d="M2.5 9.23v-.065a1 1 0 0 1 .971-.971h7.735a1 1 0 0 1 .971.97v1.449a4.839 4.839 0 0 1-9.677 0V9.23z" stroke-linecap="round"/><path d="M9 8.193h3.984c1.113 0 2.016.841 2.016 1.955 0 1.113-.903 2.078-2.016 2.078h-.807"/><path d="M4.92 2.548l-.051.101c-.09.181-.136.272-.161.363a1 1 0 0 0 .04.66c.037.087.094.17.206.34.095.142.143.214.176.288a1 1 0 0 1 .077.57c-.013.08-.04.162-.095.325l-.193.58m5.242-3.227l-.05.101c-.09.181-.136.272-.162.363a1 1 0 0 0 .042.66c.036.087.093.17.205.34.095.142.143.214.176.288a1 1 0 0 1 .077.57 2.17 2.17 0 0 1-.095.325l-.193.58" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_199567"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191368)" :stroke="color" stroke-width="2"><path d="M3 12.429c0-.4 0-.599.056-.76a1 1 0 0 1 .614-.613C3.83 11 4.03 11 4.429 11H14.57c.4 0 .599 0 .76.056a1 1 0 0 1 .613.614c.056.16.056.36.056.759V14.5c0 .464 0 .696-.013.892a6 6 0 0 1-5.595 5.595C10.196 21 9.964 21 9.5 21s-.696 0-.892-.013a6 6 0 0 1-5.595-5.595C3 15.196 3 14.964 3 14.5v-2.071z" stroke-linecap="round"/><path d="M12 11h5.222C18.756 11 20 12.25 20 13.908 20 15.565 18.756 17 17.222 17h-1.11"/><path d="M6.188 3l-.106.212c-.254.506-.38.76-.364 1.028.017.269.174.505.488.976l.064.095c.266.4.4.6.43.829.031.23-.045.457-.197.913L6.187 8m8.125-5l-.105.212c-.254.506-.38.76-.364 1.028.017.269.174.505.488.976l.064.095c.266.4.4.6.43.829.031.23-.045.457-.197.913L14.312 8" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191368"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'hot-brewIcon',
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