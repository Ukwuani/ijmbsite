<template>
<a href="https://twitter.com/intent/tweet?screen_name=AlphaAlevels&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">    
    <button
            class="AlphaBackToTop  btn AlphaWeb "
            >Tweet to @AlphaAlevels
        </button>

    <button
         class="AlphaBackToTop btn-action btn AlphaMobile ">
         <img :src="imgLink" />
         </button>
    </a>


</template>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script>

    export default {
        name: 'back-to-top',
        mounted () {
            window.addEventListener('scroll', () => {
                this.windowScrollHeight = window.scrollY
                console.log('Scrolling', this.windowScrollHeight)
            }, false)
        },
        data () {
            return {
                windowScrollHeight: 0,
                imgLink: '/img/twitter-icon.svg'
            }
        },
        methods: {
            scrollToTop () {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style scoped>
.AlphaBackToTop {
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 1em;
    transition: all 0.4s ease-in-out 0s;
    color: #fafafa;
    border: 24px white;
    border-radius: 2em;
    background: #1da1f2;
}

.AlphaBackToTop img {
    margin: auto;
    filter: invert(1)
}

.show {
    display: block;
}

.AlphaMobile {
    display: none
}
@media screen and (max-width: 640px) {
    .AlphaMobile {
        display: flex
    }

     .AlphaWeb {
        display: none
    }
}
</style>