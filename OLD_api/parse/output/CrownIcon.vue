
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.765 15h8.823M3 5.824l.502 3.01c.266 1.596.399 2.395.958 2.869.56.474 1.369.474 2.987.474h3.267c1.703 0 2.554 0 3.124-.51.57-.51.663-1.356.852-3.049L15 5.824 11.47 7.94 9 3 6.53 7.941 3 5.824z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 20.5H18M3 7.5l.943 5.658c.266 1.596.399 2.394.959 2.868.559.474 1.368.474 2.987.474h7.53c1.704 0 2.555 0 3.125-.51.57-.51.663-1.356.851-3.048L20 7.5l-5 3-3.5-7-3.5 7-5-3z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'crownIcon',
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