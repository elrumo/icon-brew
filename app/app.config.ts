export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'slate'
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
