// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1, // max 1 attribute per line on single-line elements
        multiline: {
          max: 1, // max 1 per line on multi-line elements
          allowFirstLine: false
        }
      }
    ]
  }
)
