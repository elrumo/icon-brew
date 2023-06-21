
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201190)" :stroke="color"><path d="M3 15h12" stroke-linecap="round"/><path d="M12.6 10.201L3.753 6.364a.934.934 0 0 1-.545-1.033l.188-.97c.148-.767 1.24-.787 1.416-.025.06.256.252.46.505.532l.81.235.033.01a1 1 0 0 0 1.265-.98l-.001-.036-.002-.056c-.026-.854.97-1.337 1.626-.788a.99.99 0 0 1 .266.351l1.197 2.653c.138.305.207.458.319.578.112.12.26.2.554.36l2.12 1.142.052.029a1 1 0 0 1 .425 1.254l-.025.064a1 1 0 0 1-1.356.517z"/></g><defs><clipPath id="clip0_489_201190"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191438)" :stroke="color" stroke-width="2"><path d="M3 21h17.5" stroke-linecap="round"/><path d="M18.376 15.715L5.423 11.236c-.985-.34-1.477-.51-1.81-.854a2 2 0 0 1-.367-.53c-.206-.43-.194-.951-.17-1.993l.004-.152c.052-2.211.078-3.317.49-3.607a1 1 0 0 1 .744-.168c.497.085.996 1.072 1.993 3.046.134.265.2.398.3.503a1 1 0 0 0 .182.153c.12.078.262.121.547.207l.832.252c.765.23 1.148.346 1.451.243a1 1 0 0 0 .467-.332c.197-.252.214-.651.248-1.45.082-1.919.122-2.878.5-3.163a1 1 0 0 1 .78-.185c.465.085.933.923 1.868 2.601l1.905 3.417c.304.544.456.817.679 1.027.223.211.503.348 1.064.62l2.708 1.32a1.911 1.911 0 0 1-1.462 3.524z"/></g><defs><clipPath id="clip0_489_191438"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'plane-landingIcon',
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