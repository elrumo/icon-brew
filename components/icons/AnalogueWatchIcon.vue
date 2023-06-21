
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 11.5l.429 1.6.14.783c.135.757.202 1.136.463 1.367l.04.033c.274.217.659.217 1.428.217.77 0 1.154 0 1.427-.217a.938.938 0 0 0 .04-.033c.262-.231.33-.61.465-1.367l.14-.783.428-1.6m-5-5l.429-1.6.14-.783c.135-.757.202-1.136.463-1.367l.04-.033C7.847 2.5 8.232 2.5 9 2.5c.77 0 1.154 0 1.427.217.014.01.027.022.04.033.262.231.33.61.465 1.367l.14.783.428 1.6" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" :stroke="color"/><path d="M9 7.5V9h1" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 16l.5 2 .089.534c.193 1.157.29 1.736.686 2.088l.053.044C10.24 21 10.827 21 12 21s1.76 0 2.172-.334a1.48 1.48 0 0 0 .053-.044c.397-.352.493-.93.686-2.088L15 18l.5-2m-7-8L9 6l.089-.534c.193-1.157.29-1.736.686-2.088l.053-.044C10.24 3 10.827 3 12 3s1.76 0 2.172.334l.053.044c.397.352.493.93.686 2.088L15 6l.5 2" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="5" :stroke="color" stroke-width="2"/><path d="M12 10v2h1.5" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'analogue-watchIcon',
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