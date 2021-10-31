<template>
   <section class="AlphaHomePage">
    <div class="AlphaBackdrop">
      <div class="AlphaOverlay">
        <topbar :content ="$store.getters.ijmb" />

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
                      REGISTRATION FOR THE 2021/2022 IJMB SESSION HAS OFFICIALLY COMMENCED; THE ONGOING REGISTRATION CLOSES ON {{dateData}}
          </h1>
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
    <specialInfo />
    <centerInfo  :content="options" :titleHeader = "IJMB"/>
    <testimonials />    
    <faqHome :content="catchPhrases[2]"/>
    <visionStatement />
    <bottombar />
    <back-to-top />
    <tweetAtUs/>
  </section>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
import Topbar from '~/components/Topbar'
import FaqHome from '~/components/FaqHome'
import SpecialInfo from '~/components/SpecialInfo'
import VisionStatement from '~/components/VisionStatement'
import CenterInfo from '~/components/CenterInfo'
import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'
import TweetAtUs from '~/components/TweetAtUs'


    export default {
        name: 'ijmb-home',
        components: {
    Topbar,
    // Carousel,
    // Slide
    SpecialInfo,
    FaqHome,
    VisionStatement,
    CenterInfo,
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
                        content: 'ijmb'
                    }
                ],
                title: 'IJMB | IJMB & JUPEB Alevels',
                script: [
                  { src: 'https://alpha-alevels.com.ng/ChangeDateHere.js' }
                   ]
            }
        },
        data () {
            return {
                dateData: null,
                auto: 3000,
                options: [
                    {
                        image: '/img/affordabl.svg',
                        title: 'TUITION FEES',
                        subtitle: 'Tuition fees information',
                        link: 'https://www.alpha-alevels.com.ng/ijmb/tuition'
                    },
                    {
                        image: '/img/house.svg',
                        title: 'ACCOMODATION',
                        subtitle: 'Conducive Acommodation for Students during the program ',
                        link: 'https://ijmb.alpha-alevels.com.ng/hostel.html'
                    },
                    {
                        image: '/img/course.svg',
                        title: 'COURSES',
                        subtitle: 'All courses offered for the program',
                        link: 'https://ijmb.alpha-alevels.com.ng/courses.html'
                    },
                    {
                        image: '/img/universities.svg',
                        title: 'Universities',
                        subtitle: 'All Universities accepting the program',
                        link: 'https://ijmb.alpha-alevels.com.ng/uni.html'
                    }
                ],
                 catchPhrases: [
                      'We\'re creating new routes for alternative university admission',
                      'No Jamb Required! Low Fees! Approved By NUC! Government Approved!',
                       {
                            icon: '/img/ijmb.png',
                            caption: 'Why choose IJMB?',
                            url: 'https://ijmb.alpha-alevels.com.ng/faqs.html',
                            text: 'Enrolling with us gives applicants the opportunity to choose from our list of partnering IJMB Study centres across the country which is closer to applicant area, among other advantages like;..',
                        }
      ],
            linkRegister: "ijmb/register",
            }
        },
        mounted () {
             // this.dateData = date()
            this.dateData = "21st of March"
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