
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_202136)" :stroke="color" stroke-linecap="round"><circle cx="9" cy="9" r="6.5"/><path d="M8.978 7.143l1.88 1.393-.465 2.321H7.607l-.464-2.321 1.835-1.393zM2.5 9.445l2.692-1.818-.337-3.231m8.197-.039l-.338 3.231 2.692 1.818m-.745 2.513l-3.208.51-1.06 2.607M6.214 3.15L9 4.82l2.786-1.671M7.607 15.036l-1.06-2.607-3.208-.51" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_202136"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191490)" :stroke="color" stroke-linecap="round"><circle cx="12" cy="12" r="9" stroke-width="2"/><path d="M11.97 9.429l2.601 1.928-.642 3.215H10.07l-.642-3.215 2.54-1.928z" stroke-width="2" stroke-linejoin="round"/><path d="M3 12.617l3.728-2.518-.468-4.474m11.35-.054l-.467 4.474 3.727 2.518m-1.032 3.478l-4.442.707-1.467 3.609M8.143 3.9L12 6.214 15.857 3.9m-5.786 16.457l-1.467-3.61-4.442-.706" stroke-width="1.5" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191490"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'sportsIcon',
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