<template>
  <section class="AlphaHomePage">
    <div class="AlphaBackdrop">
      <div class="AlphaOverlay">
        <topbar :content="links"/>
        <div class="AlphaCatchPhrases">
          <h1 class="h1 Fredoka">
            {{ catchPhrases[0] }}
            {{dateData}}
          </h1>
          <div class="mt-1 mb-1">
            <button>
              REGISTER HERE
            </button>
          </div>
          <i class="AlphaCatchPhrasesPointer icon icon-2x icon-arrow-down" />
        </div>
      </div>
    </div>
    <about />
    <registration-options />
    <testimonials />
    <bottombar />
    <back-to-top />
    <tweetAtUs/>
  </section>
</template>

<script>
import Topbar from '~/components/Topbar'
import About from '~/components/About'
import RegistrationOptions from '~/components/RegistrationOptions'
import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'
import TweetAtUs from '~/components/TweetAtUs'


export default {
  name: 'HomePage',
  components: {
    Topbar,
    About,
    RegistrationOptions,
    Testimonials,
    Bottombar,
    BackToTop,
    TweetAtUs
  },
  head () {
            return {
                meta: [
                    {
                        name: 'description',
                        content: 'Jupeb'
                    },
                    {
                      name: 'twitter:card',
                      content: 'summary'
                    },
                     {
                      name: 'twitter:site',
                      content: '@AlphaAlevels'
                    },
                    {
                      name: 'twitter:creator',
                      content:'@AlphaAlevels'
                    },
                    {
                      name: 'twitter:title',
                      content: 'IJMB & JUPEB Alevels | #JUPEB | #IJMB #IFB Gain Admission'
                    },
                    {
                      name: 'twitter:decription',
                      content: 'Every day we march on, Accomplished. We are doing the right thing... Register Now with us http://alpha-alevels.com.ng'
                    }
                ],
                title: 'IJMB and JUPEB| IJMB & JUPEB Alevels',
                script: [
                  { src: 'https://alpha-alevels.com.ng/ChangeDateHere.js' }
                   ]
            }
        },
  data () {
    return {
      dateData: null,
      catchPhrases: [
        'You can be among over 200,000 candidates, who secure admission into the University of their choice annually',
        'We\'re creating new routes for alternative university admission',
        'No Jamb Required! Low Fees! Approved By NUC! Government Approved!'
      ]
    }
  },

  computed: {
    links () {
      return this.$store.getters.mainLinks
    },
  },

  mounted () {
    // this.dateData = date()
    this.dateData = "21st of March"
  },

}
</script>
