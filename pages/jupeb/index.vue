<template>
   <section class="AlphaHomePage">
    <div class="AlphaBackdrop">
      <div class="AlphaOverlay">
        <topbar :titleHeader="title" :content ="links" />

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
                      REGISTRATION FOR THE 2021/2022 JUPEB SESSION HAS OFFICIALLY COMMENCED; THE ONGOING REGISTRATION CLOSES ON {{dateData}}. 
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
    <centerInfo :content="options" :titleHeader = "JUPEB"/>
    <testimonials />    
    <faqHome :content="catchPhrases[2]" />
    <visionStatement />
    <bottombar />
    <back-to-top />
    <tweetAtUs />
  </section>
</template>

<script>
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
        name: 'jupeb-home',
        components: {
    Topbar,
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
                      content: 'Every day we march on, Accomplished. #IJMB and #JUPEB. We are doing the right thing... Register Now with us http://alpha-alevels.com.ng'
                    },
                    {
                        name: 'description',
                        content: 'Jupeb'
                    }
                ],
                title: 'JUPEB Registration | IJMB & JUPEB Alevels',
                  script: [
                  { src: 'https://alpha-alevels.com.ng/ChangeDateHere.js' }
                   ]
            }
        },
        data () {
            return {
                dateData: null,
                title: 'IJMB & JUPEB Alevels | JUPEB',
                auto: 3000,
                 options: [
                    {
                        image: '/img/affordabl.svg',
                        title: 'TUITION FEES',
                        subtitle: 'Tuition fees information',
                        link: 'https://www.alpha-alevels.com.ng/jupeb/tuition'
                    },
                    {
                        image: '/img/house.svg',
                        title: 'ACCOMODATION',
                        subtitle: 'Conducive Acommodation for Students during the program ',
                        link: 'https://jupeb.alpha-alevels.com.ng/hostel.html'
                    },
                    {
                        image: '/img/course.svg',
                        title: 'COURSES',
                        subtitle: 'All courses offered for the program',
                        link: 'https://jupeb.alpha-alevels.com.ng/courses.html'
                    },
                    {
                        image: '/img/universities.svg',
                        title: 'Universities',
                        subtitle: 'All Universities accepting the program',
                        link: 'https://jupeb.alpha-alevels.com.ng/uni.html'
                    }
                ],
                 catchPhrases: [
                      'We\'re creating new routes for alternative university admission',
                      'No Jamb Required! Low Fees! Approved By NUC! Government Approved!',
                      {
                        icon: '/img/jupeb.png',
                        caption: 'Why choose JUPEB?',
                        url: 'https://jupeb.alpha-alevels.com.ng/faqs.html',
                        text: 'Enrolling with us gives applicants the opportunity to choose from our list of partnering JUPEB Study centres across the country which is closer to applicant area, among other advantages like;..',
                    }
                    ],
        links: [
                    { name: 'Home', link: '/' },
                    { name: 'About JUPEB', link: '/jupeb/about' },
                    { name: 'Testimonials', link: '#testimonials' },
                    { name: 'Get in Touch', link: '#get-in-touch' },
                    { name: 'Register', link: '/jupeb/register' },
                ],
        linkRegister: "jupeb/register",
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
    background-color: #4f7dd4;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20000;
}

.AlphaOverlay {
    background-color: rgba(79, 125, 212, 0.8)
}

.AlphaCatchPhrases button {
    color: white;
    border: 1.5px solid white;
}

.AlphaCatchPhrases button:hover {
    color: #fafafa;
    background: #4f7dd4;
}
</style>