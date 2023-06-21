
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5h11c.943 0 1.414 0 1.707.293S15.5 6.057 15.5 7v5c0 .943 0 1.414-.293 1.707S14.443 14 13.5 14h-9c-.943 0-1.414 0-1.707-.293S2.5 12.943 2.5 12zm0 0v2m0-2c0-.768 0-1.152.2-1.419a1 1 0 0 1 .2-.2c.267-.2.65-.2 1.42-.2h6.997c.577 0 .865 0 1.1.14.236.138.375.391.653.896L13.5 5" :stroke="color"/><path d="M11 8.5a1 1 0 1 1 2 0 1 1 0 1 1-2 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c0-1.886 0-2.828.586-3.414S5.114 8 7 8h10c1.886 0 2.828 0 3.414.586S21 10.114 21 12v4c0 1.886 0 2.828-.586 3.414S18.886 20 17 20H7c-1.886 0-2.828 0-3.414-.586S3 17.886 3 16z" :stroke="color" stroke-width="2"/><path d="M18 8l-.461-1.076c-.504-1.175-.756-1.763-1.257-2.094-.5-.33-1.14-.33-2.42-.33H7c-1.886 0-2.828 0-3.414.586S3 6.614 3 8.5V15" :stroke="color" stroke-width="2"/><rect :fill="color" height="2" rx="1" width="2" x="16.5" y="11"/></svg>
</template>


<script>
    export default {
        name: 'walletIcon',
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