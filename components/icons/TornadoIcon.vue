
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.547 8.475C-.009 9.133.735 3.777 8.175 2.88 15.616 1.981 16.36 6.171 14.5 6.5" :stroke="color" stroke-linecap="round"/><path d="M11.775 6.028c-.467-.7-3.192-.797-5.161 0m2.272 9.389C11 14 11.5 13.159 9.247 12.889 6 12.5 13.292 9.71 10.691 10.36c-2.398.6-4.72.71-5.691-.361" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.565 10.923C-.283 11.834.747 4.417 11.05 3.174c10.302-1.243 11.333 4.558 8.757 5.014" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M16 8c-.646-.969-4.419-1.103-7.146 0M12 21c3-1.5 2.342-3.154.5-3-6 .5 5.601-4.9 2-4-3.321.83-6.536.983-7.88-.5" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'tornadoIcon',
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