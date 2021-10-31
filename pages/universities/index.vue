<template>
   <section class="AlphaHomePage">
    <div class="AlphaBackdrop">
      <div class="AlphaOverlay">
        <topbar :content ="links" />

        <!-- <carousel>
              <slide>
                   Slide 1 Content
                    </slide>
                <slide>
                    Slide 2 Content
                    </slide>
        </carousel> -->

        <div class="AlphaCatchPhrases">
          <h1 class="h1 Fredoka">
            {{ catchPhrases[0] }}
          </h1>
          <div class="mt-1 mb-1">
              <a :href="linkRegister">
            <button>
              REGISTER NOW
            </button>
              </a>
          </div>
          <i class="AlphaCatchPhrasesPointer icon icon-2x icon-arrow-down" />
        </div>
      </div>
    </div>
    <!-- <specialInfo /> -->
    <!-- <centerInfo :titleHeader = "IJMB"/>
    <testimonials />    
    <faqHome />
    <visionStatement /> -->
    <bottombar />
    <back-to-top />
  </section>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
import Topbar from '~/components/Topbar'
// import FaqHome from '~/components/FaqHome'
// import SpecialInfo from '~/components/SpecialInfo'
// import VisionStatement from '~/components/VisionStatement'
// import CenterInfo from '~/components/CenterInfo'
// import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'

    export default {
        name: 'ijmb-home',
        components: {
    Topbar,
    // Carousel,
    // Slide
    // SpecialInfo,
    Bottombar,
    BackToTop
  },
        head () {
            return {
                meta: [
                    {
                        name: 'description',
                        content: 'ijmb'
                    }
                ],
                title: 'IJMB & JUPEB Alevels | IJMB',
            }
        },
        data () {
            return {
                auto: 3000,
                 catchPhrases: [
                      'REGISTRATION FOR THE 2021/2022 IJMB SESSION HAS OFFICIALLY COMMENCED; THE ONGOING REGISTRATION CLOSES ON FRIDAY 16TH AUGUST, 2019. ',
                      'We\'re creating new routes for alternative university admission',
                      'No Jamb Required! Low Fees! Approved By NUC! Government Approved!'
      ],
       links: [
                { name: 'Home', link: '/ijmb' },
                { name: 'About IJMB', link: '/ijmb/about' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Get in Touch', link: '#get-in-touch' },
                { name: 'Register', link: '#register' },
            ],
            linkRegister: "ijmb/register",
            }
        }
    }
</script>

<style scoped>
.AlphaTopbar {
    background-color: #ff5722;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20000;
}

.AlphaOverlay {
    background-color: rgba(249, 88, 56, 0.8)
}

.AlphaCatchPhrases button {
    color: white;
    border: 1.5px solid white;
}

.AlphaCatchPhrases button:hover {
    color: #fafafa;
    background: #ff5722;
}
</style>