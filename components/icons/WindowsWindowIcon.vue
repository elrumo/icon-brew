
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5v7.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V5" :stroke="color"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3h10c.943 0 1.414 0 1.707.293C16 3.586 16 4.057 16 5H2c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3zm6 .8v.4a.3.3 0 0 0 .3.3h.4a.3.3 0 0 0 .3-.3v-.4a.3.3 0 0 0-.3-.3h-.4a.3.3 0 0 0-.3.3zm2 .4v-.4a.3.3 0 0 1 .3-.3h.4a.3.3 0 0 1 .3.3v.4a.3.3 0 0 1-.3.3h-.4a.3.3 0 0 1-.3-.3zm2 0v-.4a.3.3 0 0 1 .3-.3h.4a.3.3 0 0 1 .3.3v.4a.3.3 0 0 1-.3.3h-.4a.3.3 0 0 1-.3-.3z" :fill="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v9c0 1.886 0 2.828.586 3.414C4.172 20 5.114 20 7 20h10c1.886 0 2.828 0 3.414-.586C21 18.828 21 17.886 21 16V7" :stroke="color" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7h-2V6H4v1H2c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3zm9 1.3v.4a.3.3 0 0 0 .3.3h.4a.3.3 0 0 0 .3-.3v-.4a.3.3 0 0 0-.3-.3h-.4a.3.3 0 0 0-.3.3zm2 .4v-.4a.3.3 0 0 1 .3-.3h.4a.3.3 0 0 1 .3.3v.4a.3.3 0 0 1-.3.3h-.4a.3.3 0 0 1-.3-.3zm2 0v-.4a.3.3 0 0 1 .3-.3h.4a.3.3 0 0 1 .3.3v.4a.3.3 0 0 1-.3.3h-.4a.3.3 0 0 1-.3-.3z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'windows-windowIcon',
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