import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _18c2ed8a = () => interopDefault(import('../pages/accomodation.vue' /* webpackChunkName: "pages/accomodation" */))
const _45124cc9 = () => interopDefault(import('../pages/hostel.vue' /* webpackChunkName: "pages/hostel" */))
const _1ad1c273 = () => interopDefault(import('../pages/ijmb/index.vue' /* webpackChunkName: "pages/ijmb/index" */))
const _5968fc5b = () => interopDefault(import('../pages/jupeb/index.vue' /* webpackChunkName: "pages/jupeb/index" */))
const _4985ae29 = () => interopDefault(import('../pages/universities/index.vue' /* webpackChunkName: "pages/universities/index" */))
const _09cc30a4 = () => interopDefault(import('../pages/ijmb/about.vue' /* webpackChunkName: "pages/ijmb/about" */))
const _ed3f61dc = () => interopDefault(import('../pages/ijmb/register.vue' /* webpackChunkName: "pages/ijmb/register" */))
const _11a5577d = () => interopDefault(import('../pages/ijmb/tuition.vue' /* webpackChunkName: "pages/ijmb/tuition" */))
const _39b12196 = () => interopDefault(import('../pages/jupeb/about.vue' /* webpackChunkName: "pages/jupeb/about" */))
const _49bbec2a = () => interopDefault(import('../pages/jupeb/register.vue' /* webpackChunkName: "pages/jupeb/register" */))
const _0755b765 = () => interopDefault(import('../pages/jupeb/tuition.vue' /* webpackChunkName: "pages/jupeb/tuition" */))
const _153e4cc8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/accomodation",
      component: _18c2ed8a,
      name: "accomodation"
    }, {
      path: "/hostel",
      component: _45124cc9,
      name: "hostel"
    }, {
      path: "/ijmb",
      component: _1ad1c273,
      name: "ijmb"
    }, {
      path: "/jupeb",
      component: _5968fc5b,
      name: "jupeb"
    }, {
      path: "/universities",
      component: _4985ae29,
      name: "universities"
    }, {
      path: "/ijmb/about",
      component: _09cc30a4,
      name: "ijmb-about"
    }, {
      path: "/ijmb/register",
      component: _ed3f61dc,
      name: "ijmb-register"
    }, {
      path: "/ijmb/tuition",
      component: _11a5577d,
      name: "ijmb-tuition"
    }, {
      path: "/jupeb/about",
      component: _39b12196,
      name: "jupeb-about"
    }, {
      path: "/jupeb/register",
      component: _49bbec2a,
      name: "jupeb-register"
    }, {
      path: "/jupeb/tuition",
      component: _0755b765,
      name: "jupeb-tuition"
    }, {
      path: "/",
      component: _153e4cc8,
      name: "index"
    }],

    fallback: false
  })
}
