
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5H6c-.957 0-1.624.001-2.128.069-.49.066-.748.186-.933.37-.184.185-.304.444-.37.933C2.5 5.376 2.5 6.043 2.5 7v4c0 .957.001 1.624.069 2.128.066.49.186.748.37.933.185.184.444.305.933.37.504.068 1.171.069 2.128.069h6c.957 0 1.624-.001 2.128-.069.49-.065.748-.186.933-.37.184-.185.305-.444.37-.933.068-.504.069-1.171.069-2.128V7c0-.957-.001-1.624-.069-2.128-.065-.49-.186-.748-.37-.933-.185-.184-.444-.304-.933-.37C13.624 3.5 12.957 3.5 12 3.5z" :stroke="color"/><path d="M7.5 3.5v11m-2-7h-1m1 2h-1m1-4h-1" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H7c-1.442 0-2.424.002-3.159.1-.706.096-1.033.263-1.255.486-.223.222-.39.55-.485 1.255C2.002 6.576 2 7.558 2 9v6c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485C4.576 19.998 5.558 20 7 20h9c1.442 0 2.424-.002 3.159-.1.706-.096 1.033-.263 1.255-.486.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159V9c0-1.442-.002-2.424-.1-3.159-.096-.706-.263-1.033-.486-1.255-.222-.223-.55-.39-1.255-.485C18.424 4.002 17.443 4 16 4z" :stroke="color" stroke-width="2"/><path d="M9 4v16" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10H5m1 3H5m1-6H5" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'side-bar-leftIcon',
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