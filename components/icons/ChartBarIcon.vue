
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197905)"><path d="M12.5 4c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v10c0 .466 0 .699-.076.883a1 1 0 0 1-.541.541c-.184.076-.417.076-.883.076s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V4zm-5 7.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.301 10 8.534 10 9 10s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V14c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C7.5 14.699 7.5 14.466 7.5 14v-2.5zM2.333 7.583c0-.544 0-.816.103-1.025a1 1 0 0 1 .455-.455C3.101 6 3.372 6 3.917 6c.544 0 .816 0 1.025.103a1 1 0 0 1 .455.455c.103.209.103.481.103 1.025v6.334c0 .544 0 .816-.103 1.025a1 1 0 0 1-.455.455c-.209.103-.481.103-1.025.103-.545 0-.817 0-1.026-.103a1 1 0 0 1-.454-.455c-.104-.209-.104-.48-.104-1.025V7.583z" :stroke="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_197905"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191270)" :stroke="color" stroke-width="2" stroke-linejoin="round"><rect x="3" y="8" width="4" height="13" rx="1"/><rect x="10" y="14" width="4" height="7" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></g><defs><clipPath id="clip0_489_191270"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'chart-barIcon',
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