<template>
    <div class="AlphaAbout" id="about">
        <h1 class="h2 text-center my-1 Fredoka text-primary"></h1>
        <div class="AlphaCategory">
            <div class="columns">
                <div class="column col-4 col-sm-12 col-md-6" v-for="item in about" :key="item.caption">
                    <div class="card">
                    <div class="mb-3 text-center">
                        <img :src="item.icon" height="100px"/>
                    </div>
                    <h4 class="h4 text-center mt-3 Fredoka">
                        {{ item.caption }}
                    </h4>
                    <p class="h6">
                        {{ item.text }}
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'registration-options',
        data () {
            return {
                about: [    
                    {
                        icon: '/img/vision.svg',
                        caption: 'Our Vision',
                        text: 'We are a link to College(s) where design and social research drive approaches to studying issues of our time, '+
                                    'such as democracy, urbanization, technological change, economic empowerment, sustainability, migration, & '+
                                    'globalization. We connect students to preeminent intellectual and creative centers for effective engagement in'+
                                    ' Preliminary and Advanced Studies.'
                    },
                    {
                        icon: '/img/mission.svg',
                        caption: 'Our Mission',
                        text: 'Our mission is to provide a high-quality, comprehensive, and meaningful education for all students. Each student'+
                                ' will be treated as an individual, given the tools to be a better learner, and taught to function as a member of a group '+
                                'and as a productive member of society.'
                    },
                    {
                        icon: '/img/service.svg',
                        caption: 'Our Services',
                        text: 'ALPHA ALEVEL REGISTRATION AND SERVICES is a registered educational entity which has been dealing with '+
                        'placement of students for Basic and Advanced level Educational related programmes since 2014 till date. '+
                        'At ALPHA A\'LEVEL REGISTRATION, We register students for A\'Level programs like IJMB, JUPEB and CAMBRIDGE '+
                        'and then post them to desired locations  where they will run the program.'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.AlphaAbout {
    padding: 2em 0 0;
    background-color: #FaFaFa;
}

.AlphaAbout img {
    margin-bottom: 1.5em;
}

.AlphaAbout p {
    width: 80%;
    margin: .5em auto;
    text-align: justify;
    text-justify: inter-character;
    color: #777;
}

@media screen and (max-width: 360px) {
    .AlphaAbout p {
        font-size: 14px;
    }
}
.card {
    background-color: #f0f0f0;
    height:100%
}
</style>
