
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197860)"><path d="M3.944 15.5v-2.167m9.75 2.167v-2.167M3.584 8.278c-.599 0-1.084.484-1.084 1.082v1.084c0 .352.025.674.066.963.09.631.134.946.698 1.436s1.045.49 2.008.49h6.844c1.385 0 2.077 0 2.65-.52.571-.52.62-1.026.717-2.039.011-.113.017-.224.017-.33V9.361c0-.598-.485-1.083-1.083-1.083m-10.834 0L4.27 5.53c.364-1.455.546-2.183 1.089-2.606C5.9 2.5 6.65 2.5 8.15 2.5h1.698c1.5 0 2.25 0 2.793.424.542.423.724 1.15 1.088 2.606l.687 2.748m-10.834 0h10.834" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm7.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" :fill="color"/></g><defs><clipPath id="clip0_489_197860"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191268)"><path d="M5 21v-3m13.5 3v-3m-14-7c-.828 0-1.5.67-1.5 1.499V14c0 .827.1 1.532.238 2.108.163.687.245 1.03.79 1.461C4.573 18 5.065 18 6.05 18h11.288c1.335 0 2.003 0 2.551-.439s.672-.99.92-2.095c.113-.503.191-1.015.191-1.466v-1.5a1.5 1.5 0 0 0-1.5-1.5m-15 0l1.243-4.97c.363-1.455.545-2.183 1.088-2.606C7.373 3 8.123 3 9.623 3h4.754c1.5 0 2.25 0 2.792.424.543.423.725 1.15 1.088 2.606L19.5 11m-15 0h15" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191268"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'carIcon',
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