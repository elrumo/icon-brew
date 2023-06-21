
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5h8l-.817 9.8c-.064.776-.097 1.164-.269 1.458a1.5 1.5 0 0 1-.647.595c-.307.147-.696.147-1.475.147H8.208c-.779 0-1.168 0-1.475-.147a1.5 1.5 0 0 1-.647-.595c-.172-.294-.205-.682-.27-1.459L5 3.5z" :stroke="color"/><path d="M6 7.5h6V11H6V7.5z" :fill="color" :stroke="color"/><path d="M4.5 3.5h9" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.191 2.5a.5.5 0 0 1 0 1H5.809a.5.5 0 0 1 0-1h6.382z" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 4h11l-.735 13.968c-.056 1.067-.084 1.6-.31 2.005a2 2 0 0 1-.867.823c-.417.204-.95.204-2.019.204h-3.052c-1.062 0-1.593 0-2.008-.202a2 2 0 0 1-.866-.817c-.227-.403-.258-.933-.32-1.993L6.5 4z" :stroke="color" stroke-width="2"/><path d="M17 10.5H7l.455 4.5h9.09L17 10.5z" :fill="color" :stroke="color" stroke-width="2"/><path d="M5 4.5h14" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.793 3a.5.5 0 0 1 0 1H6.203a.5.5 0 0 1 0-1h11.59z" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'icon-brewIcon',
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