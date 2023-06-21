
<template>
        <svg v-if="size === 18" fill="none" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.802 8.764c-.14-1.054-.211-1.581.088-1.923.299-.341.83-.341 1.894-.341h8.432c1.064 0 1.595 0 1.894.341.299.342.229.869.088 1.923l-.467 3.5c-.11.827-.165 1.24-.448 1.488s-.7.248-1.533.248H5.251c-.834 0-1.251 0-1.534-.248-.283-.247-.338-.66-.448-1.488zM12 6.5V6c0-.943 0-1.414-.293-1.707S10.943 4 10 4H8c-.943 0-1.414 0-1.707.293S6 5.057 6 6v.5" :stroke="color"/></svg>
        

        <svg v-if="size === 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.12 13.54c-.29-2.113-.433-3.17.165-3.855C3.882 9 4.949 9 7.082 9h9.835c2.134 0 3.2 0 3.798.685s.454 1.742.166 3.855l-.41 3c-.224 1.65-.337 2.474-.902 2.967s-1.397.493-3.06.493H7.491c-1.664 0-2.496 0-3.061-.493-.566-.494-.678-1.318-.903-2.966l-.409-3zM17 9V8c0-1.886 0-2.828-.586-3.414S14.886 4 13 4h-2c-1.886 0-2.828 0-3.414.586S7 6.114 7 8v1" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'shopping-basketIcon',
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