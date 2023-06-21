
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202858)"><g clip-path="url(#clip1_489_202858)"><path d="M5.5 14H7c.943 0 1.414 0 1.707-.293C9 13.414 9 12.943 9 12V9M5.5 4H7c.943 0 1.414 0 1.707.293C9 4.586 9 5.057 9 6v3m0 0h3.5m1.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-10-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" :stroke="color"/></g></g><defs><clipPath id="clip0_489_202858"><path :fill="color" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_202858"><path :fill="color" transform="rotate(90 9 9)" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191532)"><g clip-path="url(#clip1_489_191532)"><path d="M8 18.5c1.886 0 2.828 0 3.414-.586C12 17.328 12 16.386 12 14.5V12M8 5.5c1.886 0 2.828 0 3.414.586C12 6.672 12 7.614 12 9.5V12m0 0h4m2.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" :stroke="color" stroke-width="2"/></g></g><defs><clipPath id="clip0_489_191532"><path :fill="color" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191532"><path :fill="color" transform="rotate(90 12 12)" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'tree-map-leftIcon',
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