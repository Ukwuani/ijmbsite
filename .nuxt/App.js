import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"IJMB & JUPEB Alevels","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"We offer IJMB, interim joint matriculation board, a nine (9) months Advanced Level programme conducted by ABU Zaria in various campuses and JUPEB, a six (6) months program also conducted in various campuses.\n        IJMB and Jupeb guarantees admission into 200 level in your preferred institution studying your desired course of study without JAMB (UTME),\n        IJMB registration 2021 and JUPEB registration 2019 is ongoing and applicants can pick from the list of IJMB study centres available nationwide. Call 07067278331. \n        Register for the ongoing 2021\u002F2022 session and get LOW FEES! AWAITING RESULT!! and express admission into the univeristy."},{"name":"author","content":"IJMB & JUPEB Alevels"},{"name":"copyright","content":"IJMB & JUPEB Alevels"},{"name":"robots"},{"name":"DC.title"},{"name":"keywords","content":"about ijmb, about jupeb, ijmb, jupeb 2019, jupeb 2020, ijmbe, admission, university, jamb,\n        jamb.org.ng, learn more nigeria,  i-jmb, ijmb programs and jamb, all about ijmb, cornerstone, ilorin, kwasu, ui, unn, esut, \n        is jamb still needed after ijmb programs, ijmb 2021\u002F2022, ijmb 2021\u002F2022, ijmb 2017\u002F2018,\n        ijmb admission procedure, ijmb naij, polytechnic, ijmbway.com, ijmbe.com.ng, ijmb.com.ng, cerdnigeria.com, ijmbe.org,\n        ijmbadmissions.com, naij.com\u002Fijmb, myschool.com\u002Fijmbmeaning of IJMB, ijmb official website, ijmb fees, ijmb result, \n        how to apply for ijmb, aboutijmb.com, ijmb closing date, ijmb 2017\u002F18, ijmb registration, ijmb timetable, ijmb exams, \n        ijmb unilorin, ijmb : news, ijmb news,  ijmb centers, ijmb form, post utme, admission without jamb, ijmbe.org.ng, ijmb.org.ng, \n        ijmb admission website, brainfillacademy.com, ijmb online payment, ijmb voguepay, myschool ijmb, naij ijmb, ijmb facebook, ijmb lagos,\n        ijmb south, ijmbalevel.com, ijmbway.com, ijmb.org, aboutijmb.com, ijmbguide.com, post JAMB, remedial, unilorin remedial, diplome, ND, OND,\n        admission into 200 level, ijmb admission nigeria, cerd nigeria, ijmbcenter.com"},{"name":"google-site-verification","content":"JdPBCVWMyI2U9PoB4fmBDH2ED-5QEyoOZ4SB2ScKmnE"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"\u002Fcss\u002Fstyles.css"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
