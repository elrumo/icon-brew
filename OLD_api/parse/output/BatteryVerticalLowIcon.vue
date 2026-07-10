
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="M0 0h18v18H0z"/></clipPath><clipPath id="b"><path d="M0 0h18v18H0z" transform="rotate(-90 9 9)"/></clipPath><g clip-path="url(#a)"><g clip-path="url(#b)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 15c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56V7c0-1.414 0-2.121.44-2.56C6.378 4 7.085 4 8.5 4h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v5c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44z"/><path d="M9.6 4H8.4a.4.4 0 0 1-.4-.4.6.6 0 0 1 .6-.6h.8a.6.6 0 0 1 .6.6.4.4 0 0 1-.4.4z" :fill="color"/><path d="M7.5 12.5h3"/></g></g></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath><clipPath id="b"><path d="M0 0h24v24H0z" transform="rotate(-90 12 12)"/></clipPath><g clip-path="url(#a)"><g clip-path="url(#b)" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 21c-1.886 0-2.828 0-3.414-.586S7 18.886 7 17V9c0-1.886 0-2.828.586-3.414S9.114 5 11 5h2c1.886 0 2.828 0 3.414.586S17 7.114 17 9v8c0 1.886 0 2.828-.586 3.414S14.886 21 13 21z"/><path d="M12.5 5h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z" :fill="color"/><path d="M10 17.5h4"/></g></g></svg>
</template>


<script>
    export default {
        name: 'battery-vertical-lowIcon',
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