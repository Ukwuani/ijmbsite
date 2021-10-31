<template>
    <div>
        <topbar :content="$store.getters.ijmb" />
        <h1>Accomodation</h1>
        <section>
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null">
            </vue-gallery-slideshow>
        </section>
    </div>
</template>

<script>
    import Topbar from '@/components/Topbar'
    import VueGallerySlideshow from 'vue-gallery-slideshow'
    export default {
        name: 'ijmb-accomodation',

        components: {
            Topbar
        },

        data () {
            return {
                images: [
                    'img/hos1.png',
                    'img/hos2.png',
                    'img/hos3.jpg',
                    'img/hos4.jpg',
                    'img/hos5.jpg',
                    'img/hos6.jpg',
                    'img/hos7.jpg',
                    'img/hos8.jpg',
                ],
                index: null
            }
        }
    }
</script>

<style scoped>
.AlphaTopbar {
    background-color: #ff5722;
}
</style>