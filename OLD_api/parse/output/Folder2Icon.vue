
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6v6c0 .943 0 1.414.293 1.707C3.086 14 3.557 14 4.5 14h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V8.333c0-.942 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293h-1.461c-.43 0-.645 0-.836-.083-.191-.083-.337-.24-.63-.556l-.98-1.055c-.292-.315-.438-.472-.63-.556C8.774 4 8.559 4 8.129 4H4.5c-.943 0-1.414 0-1.707.293C2.5 4.586 2.5 5.057 2.5 6z" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5v7c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h10c1.886 0 2.828 0 3.414-.586C21 18.328 21 17.386 21 15.5V12c0-1.886 0-2.828-.586-3.414C19.828 8 18.886 8 17 8h-.16c-.905 0-1.358 0-1.756-.183-.398-.183-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214-.398-.183-.85-.183-1.756-.183H7c-1.886 0-2.828 0-3.414.586C3 5.672 3 6.614 3 8.5z" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'folder-2Icon',
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