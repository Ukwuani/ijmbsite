<template>
    <footer class="AlphaBottombar">
        <div class="AlphaSocialIllustration"></div>
        <div id="get-in-touch" class="AlphaSocial bg-primary">
            <p class="h4 Fredoka">Get in touch</p>
            <div class="columns">
                <div class="column col-3 col-sm-12 col-md-4" v-for="contact in contacts" :key="contact.icon">
                    <div class="text-center">
                        <i :class="'mdi mdi-36px mdi-' + contact.icon"></i>
                    </div>
                    <div class="text-center">
                        <a :href="contact.link">{{ contact.name }}</a>
                    </div>
                </div>
            </div>
        </div>
        <h6>
            <strong>Alpha Alevel</strong> &copy; 2019. All Rights Reserved
        </h6>
    </footer>
</template>

<script>
    export default {
        name: 'bottombar',
        data () {
            return {
                contacts: [
                    { icon: 'facebook', name: '@alpha_alevels', link: 'https://fb.me/alpha-alevels' },
                    { icon: 'twitter', name: '@AlphaAlevels', link: 'https://twitter.com/AlphaAlevels' },
                   //{ icon: 'rss', name: 'Our Blog', link: 'https://blog.alpha-alevels.com' },
                    { icon: 'whatsapp', name: '+234-701-313-7970', link: 'https://api.whatsapp.com/send?phone=2347013137970&text=Hello%20ALPHA-ALEVELS%21%F0%9F%98%8A%20Please%20I%20would%20like%20to%20know%20more%20about%20IJMB%20and%20how%20to%20go%20about%20the%20registration%20process...%20Thanks&source=&data=' },
                    { icon: 'email', name: 'ijmbstudycenter@gmail.com', link: 'mailto://ijmbstudycenter@gmail.com' },
                    { icon: 'phone', name: '+234-903-447-5096', link: 'phone://+2349034475096' }
                ]
            }
        }
    }
</script>

<style scoped>
.AlphaBottombar {
    position: relative;
    /* background: linear-gradient(135deg,#499bea,#798eea); */
    /* background-color: #111; */
    /* padding: 1em; */
}

.AlphaBottombar .AlphaSocialIllustration {
    background-image: url('/img/social.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    left: 1%;
    bottom: 30%;
    width: 350px;
    height: 350px;
}

.AlphaBottombar .AlphaSocial {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #222; */
    color: #FFF;
    padding: 2.5em;
    transform: scale(1);
}

.AlphaBottombar .AlphaSocial .columns {
    width: 90%;
    margin: auto;
}

.AlphaBottombar h6 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    color: #FFF;
    font-size: 14px;
    background-color: #4b48d6;
    padding: 1.3em;
}

.AlphaBottombar a {
    color: #F0F0F0;
}

@media screen and (max-width: 640px) {
    .AlphaBottombar .AlphaSocial .columns {
        width: 100%;
    }

    .AlphaBottombar .AlphaSocial {
    }

    .AlphaBottombar .AlphaSocialIllustration {
        left: 30%;
        bottom: 86%;
        width: 200px;
        height: 200px;
    }
}
</style>

