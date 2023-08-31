import DefaultTheme from 'vitepress/theme'
import VpDemo from '../../components/vp-demo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    window.examples = import.meta.glob('../../../examples/**/*.vue', { eager: true })
    ctx.app.component('VpDemo', VpDemo)
  }
}
