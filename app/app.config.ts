export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },

    button: {
      slots: {
        base: 'flex-shrink-0'
      },
      defaultVariants: {
        color: 'primary'
      }
    }
  }
})
