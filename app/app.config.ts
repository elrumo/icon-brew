export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'neutral'
    },

    button: {
      slots: {
        base: 'flex-shrink-0 font-medium'
      },
      defaultVariants: {
        color: 'primary'
      }
    }
  }
})
