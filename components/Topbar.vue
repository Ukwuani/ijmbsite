<template>
    <section class="AlphaTopbar">
        <div>
            <!-- <img src="assets/img/logo.png" alt="Logo" width="50px" /> -->
            <alpha-title text="IJMB & JUPEB Alevels" />
            <div class="AlphaTopbarLinks">
                <ul class="desktop-nav">
                    <li v-for="link in content " :key="link.link">
                        <a :href="link.link" v-text="link.name"></a>
                    </li>
                </ul>
                <button class="btn btn-action s-circle" @click="active = true">
                    <i class="icon icon-menu"></i>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="modal modal-sm" :class="{ active }">
                <div @click="active = false" class="modal-overlay" aria-label="Close"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <button
                            @click="active = false"
                            class="btn btn-clear float-right text-light"
                            aria-label="Close">
                        </button>
                        <div class="modal-title h5 text-light">
                            Menu
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="content">
                            <ul class="mobile-nav">
                                <li v-for="link in content" :key="link.name">
                                    <a
                                        class="Fredoka text-light"
                                        :href="link.link"
                                        v-text="link.name"
                                        @click="active = false">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AlphaTitle from '@/components/Title'
export default {
    name: 'topbar',
    props: {
        content: {
            type: Array,
            required: true
        },
        titleHeader: {
            type: String,
            required: false
        }
    },
    components: {
        AlphaTitle
    },
    data () {
        return {
            active: false
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

.AlphaTopbarLinks {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.AlphaTopbar > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    height: 4.5em;
    width: 75%;
    margin: auto;
}

.AlphaTopbar .desktop-nav li {
    display: inline-block;
    margin-left: 40px;
}

.mobile-nav {
    margin: 0;
    padding: 0;
    list-style: none inside;
}

.mobile-nav li a {
    display: block;
}

.AlphaTopbar .desktop-nav a {
    font-weight: bold;
    font-size: 15px;
    /* letter-spacing: 0.8px; */
    color: #FAFAFA;
    /* text-transform: uppercase; */
}

.AlphaTopbar button {
    display: none;
}

.AlphaTopbar .modal-container {
    background: #4b48d6;
}

@media screen and (max-width: 640px) {
    .AlphaTopbar {
        background-color: #4b48d6;
        /* transform: scale(1.005); */
    }

    .AlphaTopbar > div:first-child {
        width: 95%;
    }

    .AlphaTopbar .desktop-nav li {
        display: none;
    }

    .AlphaTopbar button {
        display: block;
    }
}

@media screen and (max-width: 768px) {
    .AlphaTopbar > div:first-child {
        width: 95%;
    }
}
</style>
