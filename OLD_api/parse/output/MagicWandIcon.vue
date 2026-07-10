
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.786 15.281L8.242 9.707a1.055 1.055 0 1 1 1.504-1.48l5.48 5.638a1.01 1.01 0 0 1-1.44 1.416z" :stroke="color" stroke-linecap="round"/><path d="M12.53 11.47a.75.75 0 1 0-1.06 1.06l1.06-1.06zm-1.06 1.06l3 3 1.06-1.06-3-3-1.06 1.06z" :fill="color"/><path d="M7.158 2v2.21M6.053 3.106h2.21m-5.158 2.21v2.211M2 6.421h2.21" :stroke="color" stroke-width=".8" stroke-linecap="round"/><path d="M4.579 12.684v2.948m-1.474-1.474h2.948m8.105-11.053v2.948m-1.474-1.474h2.948" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 20.5c.69-.69.69-1.81 0-2.5l-7.75-7.75a1.768 1.768 0 1 0-2.5 2.5L18 20.5c.69.69 1.81.69 2.5 0zm0 0l-4.25-4.25" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M9.5 2.5v3M8 4h3M4 7v3M2.5 8.5h3" :stroke="color" stroke-width="1.5" stroke-linecap="round"/><path d="M6 17v4m-2-2h4M19 4v4m-2-2h4" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'magic-wandIcon',
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