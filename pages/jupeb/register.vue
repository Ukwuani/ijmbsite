<template>
    <section class="AlphaHomePage">
        <topbar :titleHeader="titleHeader" :content="links"/>
        <div class="AlphaAboutContainer">
            <h1 class="Fredoka">
                JUPEB Registration Page
             </h1>
                 <div class="AlphaInstr" v-html="instructions[0]"></div>
                    <h2 class="Fredoka h6 AlphaProc">
                        Applicants Are Expected To Follow This Three(3) Simple Registration Instructions To Complete The Registration Process:
                    </h2>
                    <registrationSteps v-for="regStep in regSteps" :key="regStep.step"  :content="regStep"/>
                 <div class="AlphaInstr" v-html="instructions[1]"></div>
        </div>
        <testimonials/>
        <bottombar/>
        <backToTop/>
        <tweetAtUs/>
    </section>
</template>

<script>
import Topbar from '~/components/Topbar'
import RegistrationSteps from '~/components/RegistrationSteps'
import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'
import TweetAtUs from '~/components/TweetAtUs'

    export default {
        name: 'jupeb-registration-page',
        components: {
            Topbar,
            RegistrationSteps,
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
                    title: ' Register for  JUPEB | IJMB & JUPEB Alevels | JUPEB Registration Portal | JUPEB Registration  | What is Jupeb | meaning of JUPEB | JUPEB',
                    }
        },
        data () {
            return {
                titleHeader: "Alpha | JUPEB",
                links: [
                    { name: 'Home', link: '/jupeb' },
                    { name: 'About JUPEB', link: '/jupeb/about' },
                    { name: 'Testimonials', link: '#testimonials' },
                    { name: 'Get in Touch', link: '#get-in-touch' },
                    { name: 'Register', link: '/jupeb/register' },
                ],
                instructions: [
                    `<b style="color:  #606ad9">NOTE </b>This registration process is strictly online & <b>ONLY</b> on this website. Also note that; A non-refundable 
                    application fee of Ten  Thousand naira (₦10,000) will be charge for the registration!<br/> Documents & details that would be required during the 
                    registration  process includes:
                    <ul>
                    <li>Applicant Biodata</li> 
                    <li>Parent/Guardian Personal & Contact details</li>
                    <li>O'level Subjects and Grades (Awaiting result is allowed)</li>
                    <li>Passport-Size Photograph (197x257pixels)</li> 
                    <li>A Functioning E-mail Address & Phone Number(s).</li>
                    </ul>`,
                    `<b style="color:  #606ad9">PLEASE NOTE </b> On resumption; students are to come with the Hard-Copy of their registration form, 12 passport-size 
                    photographs, 3 copies of their O'level result <b>WAEC/NECO/GCE/NABTEB.</b> If you want to use awaiting result, it is allow too. Also those who made 
                    cash deposit through bank tellers are to come along with the teller of the ₦10,000 & the teller of their school fees paid to our account.<br/> <b style="
                    color: #606ad9;">To clear any doubt or ambiguity, read our JUPEB Success Stories from our previous candidates at the next section of this page!</b>`
                ],
                regSteps: [
                    {
                    step: '1',
                    color: '#f0f1f2',
                    content: `Using their full name as <b>REFERENCE</b>; Prospective applicants are to pay a non-refundable application fee of Ten
                                        thousand naira (₦10,000) at any nationwide branch of Guranty Trust Bank(GTB) and only to the account with details below:
                                        <br/><b>Account Name: A CLEAR DISTINCTION EDUCATIONAL SERVICES <br/>Account No: 0168351670 <br/>Bank: Guaranty Trust Bank (GTB)
                                        </b><br/><b>Payment May Be Made Through Any Of This Channels:</b> Bank Deposit(Teller), ATM, Mobile & Internet Banking 
                                        Transfers.`
                },
                {
                    step: '2',
                    color: '#f0f1f2ad',
                    content: `After making payment;..Applicants are to <a href="https://jupeb.alpha-alevels.com.ng/register/form.php" style="background-color:
                                        #606ad9; color:white; text-decoration: none; padding: .2em  1em; border-radius: 2em; text-align: center"> <b style="padding: .2em 
                                        0em">CLICK HERE FOR JUPEB FORM</b></a> and fill in every requested details correctly and with <b>CAPITAL/BLOCK LETTERS,</b> 
                                        Then Upload a passport size photograph into the designated area of the form.<br/> <b>To validate the payment made in STEP 1 above,
                                        also upload your proof of payment(P.O.P) into the form before clicking the submit button. Once the payment has been validated along 
                                        with your registration, applicants will receive a confirmation email with thier Center Name & Address to the e-mail address used for
                                        the registration process.</b><br/> <b>Proof Of Payment(P.O.P) May Be:</b> Bank Teller, Transfer Slip, Screenshot From Mobile & 
                                        Internet Banking.`
                },
                {
                    step: '3',
                    color: '#faf1f2',
                    content: `Upon completion of candidate's online registration, candidates are expected to PRINT out the Hard-Copy of application slip for attestation
                                        by Parent, Sponsor or Guardian! After that applicant may proceed to their respective chosen study centre for clearance and resumption on
                                        /or before the date stated on their application printout.`
                },
                ]
            }
        }
    }
</script>

<style  scoped>
.AlphaInstr {
    text-align:left;
}

.AlphaProc {
    color: #606ad9;
    margin-top: 3em;
}
</style>