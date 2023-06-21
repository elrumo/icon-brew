
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><g :stroke="color"><path d="M4 4.5c0-.943 0-1.414.293-1.707S5.057 2.5 6 2.5h6c.943 0 1.414 0 1.707.293S14 3.557 14 4.5v7c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293H6c-.943 0-1.414 0-1.707-.293S4 12.443 4 11.5z"/><path d="M6 4.7c0-.094 0-.141.03-.17.029-.03.076-.03.17-.03h5.6c.094 0 .141 0 .17.03.03.029.03.076.03.17v3.6c0 .094 0 .141-.03.17-.029.03-.076.03-.17.03H6.2c-.094 0-.141 0-.17-.03C6 8.442 6 8.395 6 8.3z" :fill="color"/><path d="M5 13.5h8c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293H7c-.943 0-1.414 0-1.707-.293S5 14.443 5 13.5z"/><path d="M9 11h3" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"/></g><path d="M6.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-width="2"><path d="M4.5 7c0-1.886 0-2.828.586-3.414S6.614 3 8.5 3h7c1.886 0 2.828 0 3.414.586S19.5 5.114 19.5 7v7c0 1.886 0 2.828-.586 3.414S17.386 18 15.5 18h-7c-1.886 0-2.828 0-3.414-.586S4.5 15.886 4.5 14z"/><path d="M8 7.5c0-.471 0-.707.146-.854C8.293 6.5 8.53 6.5 9 6.5h6c.471 0 .707 0 .854.146.146.147.146.383.146.854V10c0 .471 0 .707-.146.854C15.707 11 15.47 11 15 11H9c-.471 0-.707 0-.854-.146C8 10.707 8 10.47 8 10z" :fill="color"/><path d="M6 18h12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 21 15.932 21 15 21H9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C6 19.398 6 18.932 6 18z"/></g><path d="M9 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/><path d="M13 14.5h3.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'macintoshIcon',
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