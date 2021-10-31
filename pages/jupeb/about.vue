<template>
   <section class="AlphaHomePage">
        <topbar :content ="links" />


        <div class="AlphaAboutContainer" >
            <h1 class="AlphaTextPurple h1 Fredoka"> {{ catchPhrases[1]}}</h1>

            <uniqAboutColL v-for="(item, index) in aboutContent"  :key="index"  :content="item"/>

            <div class="AlphaCatchPhrases">
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
        name: 'jupeb-about',
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
                            content: `JUPEB. IJMB & JUPEB Alevels Offers JUPEB , creating new routes for alternative University Admission via JUPEB.
                                                JUPEB Alevel is a 6 months program. We offer other A'level solutions like IJMB, JUPEB, NABTEB, and CAMBRIDGE.
                                                  We help our students gain Admission into 200 level in desired universities without stress.`
                        }
                    ],
                        title: ' About JUPEB Resgistration | IJMB & JUPEB Alevels | What is JUPEB | JUPEB WEbsite | What is Jupeb | meaning of JUPEB | JUPEB',
                    }
                },
        data () {
            return {
                auto: 3000,
                 catchPhrases: [
                      'JUPEB CERTIFICATE is highly respected and recognized by various higher institutions(UNIVERSITIES) in Nigeria and abroad.'+
                      ' The certificates/results are acceptable in increasing number of institutions in the country.  The Federal Government, through'+
                      ' its various educational agencies, recognize JUPEB as an examining body for both Ordinary and Advanced Level Examinations. '+
                      'Click the link below to see a complete and newly updated list of both Federal, States and Private Universities that accept JUPEB'+
                      ' result for 200L admission ',
                      'Detailed information about JUPEB',
                      'No Jamb Required! Low Fees! Approved By NUC! Government Approved!'
      ],
       links: [
                    { name: 'Home', link: '/jupeb' },
                    { name: 'About JUPEB', link: '/jupeb/about' },
                    { name: 'Testimonials', link: '#testimonials' },
                    { name: 'Get in Touch', link: '#get-in-touch' },
                    { name: 'Register', link: '/jupeb/register' },
                ],
       linkUni: "/universities",
       aboutContent: [
           {
               img: '/img/why.svg',
               title: 'What is JUPEB?',
               color: '#f0f0f0',
               direction: 'row',
               content: `The acronym JUPEB stands for: Joint Universities Preliminary Examinations Board. It is the body that
                                moderates the popular (JUPEB A\'level Examination). Joint Universities Preliminary Examinations Board 
                                (JUPEB) is a national examinations body approved by the Federal Government of Nigeria in December 
                                2013. It was formally established in April 2014 by a consortium of ten (10) partnering universities led by 
                                the University of Lagos. JUPEB is an advanced level educational Examination that qualifies its candidate
                                for admission into 200Level any Nigeria and Foreign Universities through Direct Entry. Most candidate who
                                 failed either in JAMB or POST-UTME in the  past always go through this program and majority of them gain 
                                admission into 200level and meet their colleagues in 200 level. The good news is that a lot of people are 
                                entering into the university via JUPEB program directly into 200 level because of its relevance. JUPEB will
                                 allow you to choose three courses/subjects that are related to what you want to study in the university of
                                  your choice. The programme last for nine (9) months divided into two semesters. During this period, 
                                  students are exposed to intensive lectures from Mondays to Friday everyweek and a weekly Continuous
                                   Assessment.`
            },
             {
                 img: '/img/approved.svg',
                 title: 'JUPEB IS CERTIFIED BY NUC',
                 color: '#f0f1f2',
                 direction: 'row-reverse',
                 content: `JUPEB is certified by the NUC (Nigeria University Commission) as an advanced level programme for 
                                   Direct-entry (DE) admission into universities in Nigeria. (See section 4.0 of JAMB Brochure for details).`
              },
             {
                 img: '/img/save.svg',
                 title: 'JUPEB IS EFFECTIVE & ECONOMICAL',
                 color: '#f0f1f2',
                 direction: 'row',
                 content: `JUPEB is more economical to go for this programme because it will save you the cost and stress of 100
                                    level as you will be admitted directly into 200 level upon completion of the programme. Even students 
                                   with deficiency in O\'level can still register for the programme because preparations have been made for
                                    them by JUPEB where they can write O\'level during the 9-months period to augment their result. Candidate
                                    with awaiting results can also register. JUPEB fees can be paid gradually while studying for the programme.`
              },
             {
                 img: '/img/gov.svg',
                 title: 'JUPEB IS APPROVED & MODERATED BY THE GOVERNMENT',
                 color: '#f1f0f2',
                 direction: 'row-reverse',
                 content: `JUPEB is an Approved, Proven & Certified Advanced level programme moderated by the University Of Lagos
                                     and having the coordinating body in various tertiary institutions and different study centres nationwide. The
                                      programme is specifically designed to provide an opportunity for candidates who cannot gain admission to 
                                      regular degree programmes in Nigerian Universities for one reason or the other, as the programme only requires
                                       candidates O’level results, even awaiting result candidates can Enrol for the programme. JUPEB examination is 
                                       conducted in the first-half of every year, while the results is released in due time for admission processing. On 
                                       completion of the programme, successful candidates can use their result to gain admission into 200 level in any 
                                       Nigeria university through direct-entry into their chosen university. Most candidate who failed either in UTME or 
                                       post-utme in the past always do this program and most of them get admission into 200level and meet their 
                                       colleagues in 200 level. The good news is that a lot of people are entering into the university via JUPEB program 
                                       directly into 200 level because of its relevance.`
              },
             {
                 img: '/img/certified.svg',
                 title: 'JUPEB IS GUARANTEED',
                 color: '#f1f2f2',
                 direction: 'row',
                 content: `Yearly, about 20,000 applicants put in for the programme in which more than 70% fraction successfully secure 
                                    admission with it into 200 level to their preferred institution and study their desired course.`
              },
             {
                 img: '/img/steps.svg',
                 title: 'HOW JUPEB WORKS',
                 color: '#f2f2f2',
                 direction: 'row-reverse',
                 content: `Prospective JUPEB candidates are required to select any THREE (3) A/L JUPEB Subject Combination
                                     plus Genel studies (English Language) identified with their preferred course of study in the university 
                                     be it Science, Art or Social Science Course.!\n
                                     Candidates would then be lectured for the stipulated period at their respective Study Centre and thereafter
                                      sit for the final examination. On completion of the programme, successful candidates accordingly utilise their 
                                      JUPEB certificate to secure admission into 200level in any Nigeria tertiary institution via JAMB's Direct Entry.`
              },
             {
                 img: '/img/eligibility.svg',
                 title: 'JUPEB PROGRAMME ELIGIBILITY',
                 color: '#f2f2f2',
                 direction: 'row',
                 content: `The programme is open to all interested candidates nationwide and any course can be offered to be it Science, Art 
                                    or Social Science. Thus, prospective candidates can check (item 1.0.05) of JAMB BROCHURE to confirm its legibility.\n 
                                    ACCORDING TO JAMB BROCHURE: "1.0.05 Direct Entry (DE) Requirements for (2/3/4/5 - year degree Programmes). 
                                    1. Candidates with one of the following qualifications may be considered for admission by Direct Entry:- (a) Two (2) credit 
                                    passes at the IJMB/JUPEB examination or Cambridge moderated Schools of Basic Studies terminal examination  or
                                     International Baccalaureate from recognised institutions with SSCE/GCE, NTC/NBC credits or equivalent in three (3) other 
                                     subjects (unless otherwise stated)".`
              }
            ]
            }
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