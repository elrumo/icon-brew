
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 13l5.056 2.528M6.5 13V2.528M6.5 13l-.898.572c-1.358.864-2.037 1.296-2.555 1.01-.52-.284-.52-1.089-.52-2.698V5.882c0-.579 0-.868.14-1.104.141-.236.395-.375.903-.652L6.5 2.528m5.056 13V4.694m0 10.834l3.148-2.29c.404-.294.606-.44.715-.655.109-.213.109-.463.109-.963V5.897c0-1.503 0-2.254-.49-2.545-.49-.29-1.149.07-2.468.79l-1.014.552m0 0L6.5 2.528" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 17.5l7 3.5m-7-3.5V3m0 14.5l-2.426 1.544c-1.358.864-2.036 1.296-2.555 1.01C3 19.77 3 18.967 3 17.358V7.187c0-.578 0-.868.14-1.104.14-.236.394-.374.902-.652L8.5 3m7 18V6m0 15l4.676-3.401c.404-.294.606-.44.715-.654.109-.214.109-.464.109-.963V6.369c0-1.502 0-2.254-.49-2.544-.49-.291-1.149.069-2.468.788L15.5 6m0 0l-7-3" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'map-foldedIcon',
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