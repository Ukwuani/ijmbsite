<template>
    <section class="AlphaHomePage">
        <topbar :titleHeader="titleHeader" :content="links"/>
        <div class="AlphaAboutContainer">
            <h1 class="Fredoka h1">{{heading}}</h1>
            <feesStructure v-for="fee in fees" :key="fee.color" :content="fee"/>
            <div class="AlphaInstr"  v-for="instr in instructions" :key="instr"  v-html="instr"></div>
              <div class="AlphaCatchPhrases">
                    <a :href="linkRegister">
                    <button>
                        CLICK HERE TO REGISTER NOW
                    </button>
                    </a>
                </div>
        </div>
        <testimonials/>
        <bottombar/>
        <backToTop/>
    </section>
</template>
<script>
import Topbar from '~/components/Topbar'
import FeesStructure from '~/components/FeesStructure'
import Testimonials from '~/components/Testimonials'
import Bottombar from '~/components/Bottombar'
import BackToTop from '~/components/BackToTop'
export default {
    name: 'ijmb-tuition',
    components : {
        Topbar,
        FeesStructure,
        Testimonials,
        Bottombar,
        BackToTop
    },
    data () {
        return {
            titleHeader: "IJMB & JUPEB Alevels | IJMB",
            heading: 'IJMB SCHOOL FEES BREAKDOWN',
             links: [
                    { name: 'Home', link: '/ijmb' },
                    { name: 'About IJMB', link: '/ijmb/about' },
                    { name: 'Testimonials', link: '#testimonials' },
                    { name: 'Get in Touch', link: '#get-in-touch' },
                    { name: 'Register', link: '/ijmb/register' },
                ],
                 instructions: [
                `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB Hostel & Accommodation</h1><br/>    
                <p>The hostel fee for each student varies across our different centers, but our hostels are close to the lecturing 
                venue at all our various centres! Scroll to <a class="btn" href="https://www.alpha-alevels.com.ng/hostel" "style= color:
                 #FFFF00">IJMB HOSTELS</a> section to see clips from our different hostels.<br/></p>`,
                `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB Textbooks & Admin Charges</h1><br/>
                <p> For any department, the textbooks and admin charges all cost ₦20,000! We'll provide you with all the textbooks
                 and materials(Lab-Coat, Drawing Board...e.t.c) that you'll need to prepare for and pass the IJMB final examination.<br/></p>`,
                `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">Installment Payment For IJMB</h1><br/>
                <p> If you are the type that want to pay installment, we've got you covered!  
                Here's the way you can pay bit by bit;..But the dates are very important, because we won't allow any default. 
                As you already know that funds are needed for the program to run be smoothly, the lectures and the running of 
                the administrative responsibilities need funds. 
                Installment payment goes like this:</p>
                <b>NB:</b> You can only pay the IJMB fees twice(3 times at most} 
                The minimum you can start with to be able to start lectures with other students is ₦70,000. Which covers ₦30,000 
                of your school fees, hostel fee, then your textbooks & admin charges. The remaining ₦95,000 can be paid two times 
                with arrangement between your parents(Guardian) and the coordinators at our various IJMB centres in Nigeria In 
                Conclusion; Everything you will be paying for IJMB programme is ₦168,000 according to the explanations above in 
                Ilorin Centre, you can <a class="btn" href="tel:07031831636">
                Call The H.O.O.T</a>to know about centers in Lagos, Rivers, and Abuja. 
                <br/>
                <br/>
                <b style="color: #800000;" "text-align:left;">ALL PAYMENTS SHOULD BE PAY TO THE ACCOUNT DETAILS:</p><br/>
                <b>NB:</b> <b>Account Name: A CLEAR DISTINCTION EDUCATIONAL SERVICES <br/>Account No: 0168351670 <br/>Bank: Guaranty Trust
                 Bank (GTB)</b><br/><b>Payment May Be Made Through Any Of This Channels:</b> Bank Deposit(Teller), ATM, Mobile & 
                 Internet Banking Transfers.<br/><br><br/>`
            ],
            fees: [
                {
                     content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Center In ILORIN:</h1><br/>
                                       <ul>
                                         <li>IJMB Registration Form = ₦5,000.</li>
                                        <li>IJMB School Fees(Tuition) = ₦110,000.</li>
                                        <li>IJMB Hostel & accommodation = ₦35,000.</li>
                                        <li>IJMB Textbooks & Admin Charges = ₦15,000.</li>
                                        <p style="color: #FF0000;" "text-align:left;">Making a total of ₦165,000. Till you write your final examination by February(For Ilorin Center)</p>
                                       </ul>`,
                    centre: 'ILORIN CENTRE',
                    color: '#59049311'},
                { 
                    content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Centers In LAGOS & SANGO-OTA:</h1><br/>
                                <ul>
                                    <li>IJMB Registration Form = ₦5,000.</li>
                                <li>IJMB School Fees(Tuition) = ₦120,000.</li>
                                <li>IJMB Hostel & accommodation = ₦40,000.</li>
                                <li>IJMB Textbooks & Admin Charges = ₦20,000.</li>
                                <p style="color: #FF0000;" "text-align:left;">Making a total of ₦185,000. Till you write your final examination by February(For Lagos & Sango-Ota Center)</p>
                                </ul>`,
                    centre: 'LAGOS | OTA CENTRE',
                    color: '#29049311'
                    },
                {
                    content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Centers In Abuja:</h1><br/>
                                <ul>
                                    <li>IJMB Registration Form = ₦5,000.</li>
                                <li>IJMB School Fees(Tuition) = ₦150,000.</li>
                                <li>IJMB Hostel & accommodation = ₦47,000.</li>
                                <li>IJMB Textbooks & Admin Charges = ₦25,000.</li>
                                <p style="color: #FF0000;" "text-align:left;">Making a total of ₦237,000. Till you write your final examination by February(For Abuja Center)</p>
                                </ul>`,
                centre: 'ABUJA CENTRE',
                color: '#31249311'
                 },
                {
                    content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Centers In Port-hacourt:</h1><br/>
                                <ul>
                                <li>IJMB Registration Form = ₦5,000.</li>
                                <li>IJMB School Fees(Tuition) = ₦120,000.</li>
                                <li>IJMB Hostel & accommodation = ₦40,000.</li>
                                <li>IJMB Textbooks & Admin Charges = ₦20,000.</li>
                                <p style="color: #FF0000;" "text-align:left;">Making a total of ₦185,000. Till you write your final examination by February(For Abuja Center)</p>
                                </ul>`,
                centre: 'PORT-HACOURT CENTRE',
                color: '#31249311'
                 },
                {
                    content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Centers In Ibadan:</h1><br/>
                                <ul>
                                    <li>IJMB Registration Form = ₦5,000.</li>
                                <li>IJMB School Fees(Tuition) = ₦110,000.</li>
                                <li>IJMB Hostel & accommodation = ₦35,000.</li>
                                <li>IJMB Textbooks & Admin Charges = ₦15,000.</li>
                                <p style="color: #FF0000;" "text-align:left;">Making a total of ₦165,000. Till you write your final examination by February(For Ibadan Center)</p>
                                </ul>`,
                centre: 'IBADAN CENTRE',
                color: '#59034311'
                 },
                {
                    content: `<h1 style="color: #606ad9;" class="h5 Fredoka "text-align:left;">IJMB School Fees Goes Like This For Our Center In AKURE:</h1><br/>
                                <ul>
                                    <li>IJMB Registration Form = ₦5,000.</li>
                                <li>IJMB School Fees(Tuition) = ₦100,000.</li>
                                <li>IJMB Hostel & accommodation = ₦30,000.</li>
                                <li>IJMB Textbooks & Admin Charges = ₦20,000.</li>
                                <p style="color: #FF0000;" "text-align:left;">Making a total of ₦155,750. Till you write your final examination by February(For Akure Center)</p>
                                </ul>`,
                centre: 'AKURE CENTRE',
                color: '#59319311'
                }
            ]
        }
    }
}
</script>
<style scoped>
.AlphaInstr {
    text-align:left;
}

.AlphaCatchPhrases button {
    color: #5755d9;
    border: 1.5px solid #5755d9;
}

.AlphaCatchPhrases button:hover {
    color: #fafafa;
    background: #5755d9;
}
</style>