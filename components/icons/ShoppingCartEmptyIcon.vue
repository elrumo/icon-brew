
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201909)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm6.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/><path d="M14.486 12.499H7.097c-.808 0-1.212 0-1.492-.237-.28-.236-.346-.634-.48-1.431l-.953-5.664c-.134-.797-.2-1.195-.48-1.431-.28-.237-.684-.237-1.492-.237H2m2.162 1.508l9.358-.005c1.146-.001 1.718-.002 2.019.37.3.373.179.932-.063 2.052l-.27 1.25c-.164.756-.245 1.134-.52 1.356-.275.222-.662.222-1.435.222H5.027"/></g><defs><clipPath id="clip0_489_201909"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191481)"><path d="M19.5 17H9.195c-.81 0-1.214 0-1.494-.237s-.346-.636-.48-1.435l-1.443-8.67c-.133-.798-.2-1.197-.479-1.434-.28-.237-.684-.237-1.494-.237H3M5.857 7l11.308-.007c1.704 0 2.556-.001 3.102.43a2 2 0 0 1 .552.683c.309.624.13 1.457-.226 3.124-.243 1.133-.364 1.7-.71 2.092a2 2 0 0 1-.522.422c-.456.256-1.035.256-2.194.256H7.001" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191481"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'shopping-cart-emptyIcon',
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