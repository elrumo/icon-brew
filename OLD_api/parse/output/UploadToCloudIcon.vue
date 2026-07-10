
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round"><path d="M13 11a2 2 0 1 0 0-4m0 0c.8-2.286-1.2-4-3.4-4S5.7 4.714 6 6m7 1c-.597 0-1.133.262-1.5.677M7.792 7.5a2.5 2.5 0 1 0-3.078 3.374"/><path d="M9 16v-5m0 0l-2 2m2-2l2 2" stroke-linejoin="round"/></g></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g :stroke="color" stroke-linecap="round" stroke-width="2"><path d="M18 9.222c1.657 0 3 1.393 3 3.111A3.134 3.134 0 0 1 19.546 15M18 9.222C19.2 5.667 16.2 3 12.9 3S7.05 5.667 7.5 7.667M18 9.222c-.67 0-1.29.229-1.79.615a3.025 3.025 0 0 0-.46.438M10.188 10a3.933 3.933 0 0 0-.32-.606C9.195 8.353 8.05 7.667 6.75 7.667 4.679 7.667 3 9.407 3 11.556c0 1.407.72 2.64 1.8 3.322"/><path d="M12 22v-7.5m0 0l-3 3m3-3l3 3" stroke-linejoin="round"/></g></svg>
</template>


<script>
    export default {
        name: 'upload-to-cloudIcon',
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