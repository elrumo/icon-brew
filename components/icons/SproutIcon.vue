
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202195)" :stroke="color"><path d="M9 14V9m-5.5 6.5S4.482 14 9 14s5.5 1.5 5.5 1.5" stroke-linecap="round"/><path d="M3.32 2.68c.661-.662 2.538.142 4.193 1.796C9.167 6.131 9.97 8.008 9.31 8.67c-.662.661-2.54-.143-4.194-1.797C3.462 5.218 2.658 3.34 3.32 2.679z"/><path d="M8.885 8.941c.87-.185 2.042-.903 3.12-1.98 1.654-1.655 2.459-3.532 1.797-4.194-.662-.661-2.54.143-4.193 1.797-.323.324-.614.655-.868.985" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_202195"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191492)" :stroke="color" stroke-width="2"><path d="M11.979 18.622v-5.708M4.844 21s1.427-1.903 7.135-1.903c5.707 0 8.085 1.903 8.085 1.903" stroke-linecap="round"/><path d="M4.085 3.19c.944-.944 3.622.204 5.98 2.563 2.36 2.36 3.508 5.037 2.564 5.98-.944.944-3.621-.203-5.98-2.562C4.288 6.81 3.14 4.134 4.084 3.19z"/><path d="M12.023 12.121c1.24-.265 2.913-1.287 4.45-2.825 2.36-2.36 3.507-5.037 2.563-5.98-.944-.944-3.621.203-5.98 2.563-.461.46-.876.934-1.238 1.403" stroke-linecap="round"/></g><defs><clipPath id="clip0_489_191492"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'sproutIcon',
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