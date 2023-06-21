import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Skeleton from 'primevue/skeleton'
import Divider from 'primevue/divider'
import ColorPicker from 'primevue/colorpicker'
import Dropdown from 'primevue/dropdown'
import FileUpload from 'primevue/FileUpload'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Skeleton', Skeleton)
    nuxtApp.vueApp.component('Divider', Divider)
    nuxtApp.vueApp.component('ColorPicker', ColorPicker)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('FileUpload', FileUpload)
    //other components that you need
})
