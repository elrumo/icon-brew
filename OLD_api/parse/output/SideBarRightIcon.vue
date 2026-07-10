
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5h6c.957 0 1.624.001 2.128.069.49.066.748.186.933.37.184.185.305.444.37.933.068.504.069 1.171.069 2.128v4c0 .957-.001 1.624-.069 2.128-.065.49-.186.748-.37.933-.185.184-.444.305-.933.37-.504.068-1.171.069-2.128.069H6c-.957 0-1.624-.001-2.128-.069-.49-.065-.748-.186-.933-.37-.184-.185-.304-.444-.37-.933C2.5 12.624 2.5 11.957 2.5 11V7c0-.957.001-1.624.069-2.128.066-.49.186-.748.37-.933.185-.184.444-.304.933-.37C4.376 3.5 5.043 3.5 6 3.5z" :stroke="color"/><path d="M10.5 3.5v11m2-7h1m-1 2h1m-1-4h1" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4h9c1.442 0 2.424.002 3.159.1.706.096 1.033.263 1.255.486.223.222.39.55.485 1.255C20.998 6.576 21 7.558 21 9v6c0 1.442-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.735.099-1.716.101-3.159.101H7c-1.442 0-2.424-.002-3.159-.1-.706-.096-1.033-.263-1.255-.486-.223-.222-.39-.55-.485-1.255C2.002 17.424 2 16.443 2 15V9c0-1.442.002-2.424.1-3.159.096-.706.263-1.033.486-1.255.222-.223.55-.39 1.255-.485C4.576 4.002 5.558 4 7 4z" :stroke="color" stroke-width="2"/><path d="M14 4v16" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 10h1m-1 3h1m-1-6h1" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</template>


<script>
    export default {
        name: 'side-bar-rightIcon',
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