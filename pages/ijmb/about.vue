<template>
   <section class="AlphaHomePage">
        <topbar :content ="links" />


        <div class="AlphaAboutContainer" >
            <h1 class="AlphaTextPurple h1 Fredoka"> {{ catchPhrases[1]}}</h1>

            <uniqAboutColL v-for="(item, index) in aboutContent"  :key="index"  :content="item"/>

            <div class="AlphaCatchPhrases">
                 <div class=" mt-1 mb-1">
                    <a :href="linkRegister">
                    <button>
                        Register Now
                    </button>
                    </a>
                </div>

                <h1 class="AlphaTextPurple h4">
                    {{ catchPhrases[0] }}
                </h1>
                <div class=" mt-1 mb-1">
                    <a :href="linkUni">
                    <button>
                        See Universities List
                    </button>
                    </a>
                </div>
                <i class="AlphaCatchPhrasesPointer icon icon-2x icon-arrow-down" />
            </div>
        </div>

    <testimonials />    
    <bottombar />
    <back-to-top />
    <tweetAtUs/>
  </section>
</template>

<script>
import Topbar from '~/components/Topbar'
import UniqAboutColL from '~/components/UniqAboutColL'
import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'
import TweetAtUs from '~/components/TweetAtUs'


    export default {
        name: 'ijmb-about',
        components: {
            Topbar,
            UniqAboutColL,
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
                                content: `IJMB & JUPEB Alevels is an Alevels Centre, creating new routes for alternative University Admission via IJMB, 
                                                    JUPEB, NABTEB, and Cambridge. We offer A'level solutions like IJMB, JUPEB, NABTEB, and CAMBRIDGE.
                                                     We help our students gain Admission into 200 level in desired universities without stress.`
                            }
                        ],
                        title: ' About IJMB Resgistration | IJMB & JUPEB Alevels | What is IJMB | IJMB WEbsite | What is Interim joint Matriculation Board | meaning of IJMB | IJMB',
                    }
                },
        data () {
            return {
                auto: 3000,
                 catchPhrases: [
                      'IJMB CERTIFICATE is highly respected and recognized by various higher institutions(UNIVERSITIES) in Nigeria and abroad.'+
                      ' The certificates/results are acceptable in increasing number of institutions in the country.  The Federal Government, through'+
                      ' its various educational agencies, recognize IJMB as an examining body for both Ordinary and Advanced Level Examinations. '+
                      'Click the link below to see a complete and newly updated list of both Federal, States and Private Universities that accept IJMB'+
                      ' result for 200L admission ',
                      'Detailed information about IJMB',
                      'No Jamb Required! Low Fees! Approved By NUC! Government Approved!'
      ],
       links: [
                { name: 'Home', link: '/ijmb' },
                { name: 'About IJMB', link: '/ijmb/about' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Get in Touch', link: '#get-in-touch' },
                { name: 'Register', link: '/ijmb/register' },
            ],
       linkUni: "/universities",
       linkRegister: "/ijmb/register",
       aboutContent: [
           {
               img: '/img/why.svg',
               title: 'What is IJMB?',
               color: '#f0f0f0',
               direction: 'row-reverse',
               content: `IJMB simply means Interim Joint Matriculation Board. It is the body that moderates the popular IJMBE (Interim Joint
                                  Matriculation Board Examination) Interim Joint MatricuLation Board Examination is a Federal Government Educational
                                   Programme that was established, controlled and run by Amadu Bello University, Zaria(ABU). IJMBE is an advanced level 
                                   educational Examination that qualifies its candidate for admission into 200Level any Nigeria and Foreign Universities 
                                   through Direct Entry. Most candidate who failed either in JAMB or POST-UTME in the past always go through this 
                                   program and majority of them gain admission into 200level and meet their colleagues in 200 level. The good news 
                                   is that a lot of people are entering into the university via IJMB program directly into 200 level because of its relevance.
                                    IJMB will allow you to choose three courses/subjects that are related to what you want to study in the university of your 
                                    choice. The programme last for nine (9) months divided into two semesters. During this period, students are exposed to 
                                    intensive lectures from Mondays to Friday every week and a weekly Continuous Assessment..`
            },
             {
                 img: '/img/approved.svg',
                 title: 'IJMB IS CERTIFIED BY NUC',
                 color: '#f0f1f2',
                 direction: 'row',
                 content: `IJMB is certified by the NUC (Nigeria University Commission) as an advanced level programme for 
                                   Direct-entry (DE) admission into universities in Nigeria. (See section 4.0 of JAMB Brochure for details).`
              },
             {
                 img: '/img/save.svg',
                 title: 'IJMB IS EFFECTIVE & ECONOMICAL',
                 color: '#f0f1f2',
                 direction: 'row',
                 content: `IJMB is more economical to go for this programme because it will save you the cost and stress of 100
                                    level as you will be admitted directly into 200 level upon completion of the programme. Even students 
                                   with deficiency in O\'level can still register for the programme because preparations have been made for
                                    them by IJMB where they can write O\'level during the 9-months period to augment their result. Candidate
                                    with awaiting results can also register. IJMB fees can be paid gradually while studying for the programme.`
              },
             {
                 img: '/img/gov.svg',
                 title: 'IJMB IS APPROVED & MODERATED BY THE GOVERNMENT',
                 color: '#f1f0f2',
                 direction: 'row-reverse',
                 content: `IJMBE is a Federal government approved programme of 9 month and it is being moderated by the Ahmadu Bello 
                                    University, Zaria, IJMB is designed to solve problems of admission for candidates seeking admission into Nigeria 
                                    University instead of JAMB. IJMB examination is conducted in the first-quarter of every year, while the results is
                                     released in due time for admission processing. On completion of the programme, successful candidates can use 
                                     their result to gain admission into 200 level in any Nigeria university through direct-entry into their chosen 
                                     university. Most candidate who failed either in UTME or post-utme in the past always do this program and most of
                                      them get admission into 200level and meet their colleagues in 200 level. The good news is that a lot of people are 
                                      entering into the university via lJMB program directly into 200 level because of its relevance.`
              },
            ]
            }
        }
    }
</script>

<style scoped>
.AlphaTopbar {
    background-color: #5755d9;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20000;
}

.AlphaOverlay {
    background-color: rgba(249, 88, 56, 0.8)
}
.AlphaCatchPhrases {
    padding-top: 1em;
    width: 70%;
}
.AlphaCatchPhrases button {
    color: #5755d9;
    border: 1.5px solid #5755d9;
}

.AlphaCatchPhrases button:hover {
    color: #fafafa;
    background: #5755d9;
}
    /* TEXT COLOR PURPLE */

h1 {
    color: #5755d9;
}




</style>