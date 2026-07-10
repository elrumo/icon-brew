
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_197835)"><path d="M2.5 7.9c0-.943 0-1.414.293-1.707C3.086 5.9 3.557 5.9 4.5 5.9h.64c.337 0 .506 0 .66-.05a1 1 0 0 0 .276-.143c.13-.095.228-.232.424-.507.196-.275.294-.412.424-.507a1 1 0 0 1 .277-.142c.153-.051.322-.051.66-.051h2.279c.337 0 .506 0 .66.05.098.033.191.081.276.143.13.095.228.232.424.507.196.275.294.412.424.507.085.062.178.11.277.142.153.051.322.051.66.051h.639c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v3.85c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707V7.9z" :stroke="color" stroke-linecap="round"/><path d="M11 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" :stroke="color" stroke-linecap="round"/><path d="M12.472 8.014a.514.514 0 1 1 1.028 0 .514.514 0 1 1-1.028 0z" :fill="color"/></g><defs><clipPath id="clip0_489_197835"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191266)"><path d="M3 10.238c0-1.282 0-1.923.283-2.397a2 2 0 0 1 .691-.691c.474-.283 1.115-.283 2.397-.283h.639c.08 0 .12 0 .158-.002a2 2 0 0 0 1.618-.932l.09-.13a2 2 0 0 1 1.528-.802L10.562 5h2.876l.158.001a2 2 0 0 1 1.527.803c.023.03.046.063.091.13l.091.129a2 2 0 0 0 1.685.804h.639c1.282 0 1.923 0 2.397.283.284.17.521.407.69.691.284.474.284 1.115.284 2.397V15c0 1.886 0 2.828-.586 3.414C19.828 19 18.886 19 17 19H7c-1.886 0-2.828 0-3.414-.586C3 17.828 3 16.886 3 15v-4.762z" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M15.143 12.571a3.143 3.143 0 1 1-6.286 0 3.143 3.143 0 0 1 6.286 0z" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M16.571 10a.571.571 0 1 1 1.143 0 .571.571 0 1 1-1.143 0z" :fill="color"/></g><defs><clipPath id="clip0_489_191266"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'cameraIcon',
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