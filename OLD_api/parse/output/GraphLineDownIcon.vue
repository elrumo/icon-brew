
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199332)"><path d="M2.5 2.5v11c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h11m-.5-3l-.329-.986c-.29-.872-.436-1.308-.75-1.345-.316-.038-.56.352-1.046 1.131l-.103.165c-.542.867-.813 1.3-1.142 1.246-.329-.055-.446-.552-.68-1.547l-.886-3.767c-.24-1.017-.36-1.526-.692-1.578-.332-.052-.601.396-1.139 1.293l-.284.473c-.604 1.007-.906 1.51-1.252 1.44-.346-.07-.43-.65-.595-1.813L5.5 3" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199332"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191356)"><path d="M3 3v14c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h14m-1-4l-.498-1.329c-.29-.77-.433-1.155-.653-1.328a1 1 0 0 0-1.021-.13c-.256.113-.492.45-.964 1.124-.528.754-.792 1.131-1.064 1.243a1 1 0 0 1-1.056-.19c-.216-.2-.332-.645-.564-1.535l-1.286-4.927c-.229-.877-.343-1.316-.533-1.507a1 1 0 0 0-1.211-.16c-.233.134-.458.528-.908 1.315-.555.972-.833 1.458-1.087 1.594a1 1 0 0 1-1.26-.269c-.178-.227-.233-.784-.345-1.898L7 3.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191356"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'graph-line-downIcon',
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