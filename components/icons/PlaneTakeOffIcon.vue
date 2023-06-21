
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201203)" :stroke="color"><path d="M3 15h12" stroke-linecap="round"/><path d="M13.961 6.54L4.718 9.287a.934.934 0 0 1-1.082-.442l-.48-.863c-.38-.684.445-1.4 1.07-.93.21.158.488.19.728.084l.772-.342.031-.014a1 1 0 0 0 .339-1.563l-.023-.026-.038-.042C5.466 4.51 5.92 3.5 6.775 3.5a.99.99 0 0 1 .429.098L9.825 4.86c.302.146.453.218.617.239.163.02.327-.014.655-.082l2.36-.487.057-.011a1 1 0 0 1 1.112.632l.02.056.021.064a1 1 0 0 1-.64 1.249l-.066.02z"/></g><defs><clipPath id="clip0_489_201203"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191439)" :stroke="color" stroke-width="2"><path d="M3 21h17.5" stroke-linecap="round"/><path d="M20.111 8.792L8.177 13.19c-.732.27-1.099.405-1.456.404-.351 0-.696-.093-1-.268-.309-.18-.563-.485-1.07-1.096-1.143-1.377-1.715-2.066-1.697-2.452a1 1 0 0 1 .66-.895c.363-.132 1.173.203 2.792.872.209.086.313.129.42.148a1 1 0 0 0 .347 0c.108-.019.212-.062.421-.148l.767-.317c.546-.226.819-.338.972-.512a1 1 0 0 0 .227-.879c-.05-.226-.234-.457-.602-.918-.869-1.088-1.303-1.632-1.315-1.962a1 1 0 0 1 .718-.995c.316-.093.97.147 2.276.626l3.443 1.264c.564.208.847.311 1.143.328.295.017.588-.053 1.172-.194l2.729-.657a1.703 1.703 0 0 1 .987 3.253z"/></g><defs><clipPath id="clip0_489_191439"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'plane-take-offIcon',
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