
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201150)"><path d="M12.5 4c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v10c0 .466 0 .699-.076.883a1 1 0 0 1-.541.541c-.184.076-.417.076-.883.076s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V4zm-5 3.333c0-.466 0-.699.076-.882a1 1 0 0 1 .541-.542c.184-.076.417-.076.883-.076s.699 0 .883.076a1 1 0 0 1 .54.542c.077.183.077.416.077.882V14c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C7.5 14.699 7.5 14.466 7.5 14V7.333zM2.333 10.75c0-.544 0-.816.104-1.025a1 1 0 0 1 .454-.455c.21-.103.481-.103 1.026-.103.544 0 .816 0 1.025.103a1 1 0 0 1 .455.455c.103.209.103.48.103 1.025v3.167c0 .544 0 .816-.103 1.025a1 1 0 0 1-.455.455c-.209.103-.48.103-1.025.103-.545 0-.817 0-1.026-.103a1 1 0 0 1-.454-.455c-.104-.209-.104-.48-.104-1.025V10.75z" :stroke="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_201150"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191435)" :stroke="color" stroke-width="2" stroke-linejoin="round"><rect x="3" y="13" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></g><defs><clipPath id="clip0_489_191435"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'phone-signalIcon',
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