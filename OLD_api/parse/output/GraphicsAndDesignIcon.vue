
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_199352)"><path d="M15.5 8.5l-3.955 4.28" :stroke="color" stroke-linecap="round"/><path d="M10.364 14.523c0 .468-.86.749-2.292.562-.314-.041.497-.187.573-.562.076-.374.241-.561.716-.561s1.003.251 1.003.561z" :fill="color" :stroke="color"/><path d="M6.5 13h-2c-.943 0-1.414 0-1.707-.293C2.5 12.414 2.5 11.943 2.5 11V5c0-.943 0-1.414.293-1.707C3.086 3 3.557 3 4.5 3h7c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2.5" :stroke="color" stroke-linecap="round"/><path d="M8.142 10.833c.19.2.511.213.718.03a.482.482 0 0 0 .03-.696l-.748.666zM2.657 8.137l-.374.332.685.726.375-.332-.686-.726zm3.686.064l-.375.332.375-.332zm-1.39-1.044l.022-.492-.022.492zm1.015 1.376l2.174 2.3.749-.666-2.174-2.299-.749.665zm-2.625.33l.474-.421-.686-.726-.474.42.686.727zm3.374-.995c-.314-.332-.583-.618-.829-.817-.258-.208-.548-.37-.913-.386l-.044.984c.054.002.136.02.307.158.181.147.397.374.73.726l.749-.665zm-2.9.574c.364-.323.6-.53.794-.662.182-.123.265-.134.32-.131l.044-.984c-.365-.015-.669.121-.944.307-.264.178-.557.44-.9.744l.686.726z" :fill="color"/><path d="M13.5 7l-.527-.527c-.692-.692-1.038-1.038-1.47-1.036-.434.002-.776.352-1.46 1.05L7.335 9.25" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_199352"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191358)" :stroke="color"><path d="M21 12l-5.5 5.5" stroke-width="2" stroke-linecap="round"/><path d="M14 19.95c0 .792-1.454 1.268-3.878.95-.532-.069.84-.316.97-.95.128-.633.408-.95 1.211-.95.803 0 1.697.425 1.697.95z" :fill="color"/><path d="M7.5 17H7c-1.886 0-2.828 0-3.414-.586C3 15.828 3 14.886 3 13V8c0-1.886 0-2.828.586-3.414C4.172 4 5.114 4 7 4h6c1.886 0 2.828 0 3.414.586C17 5.172 17 6.114 17 8v1" stroke-width="2" stroke-linecap="round"/><path d="M10 13l-2.036-1.842c-.692-.626-1.038-.938-1.466-.938-.427 0-.773.313-1.464.938L3 13m14-4l-2.67-1.335c-.642-.32-.963-.481-1.298-.441-.336.04-.602.27-1.133.73l-3.526 3.054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191358"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'graphics-and-designIcon',
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