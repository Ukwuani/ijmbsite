<template>
   <a :href="link">
    <h1 class="AlphaTitle h4 Fredoka">
        {{ text }}
    </h1>
    </a>
</template>

<script>
    export default {
        name: 'alpha-title',
        props: {
            text: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                link: "https://alpha-alevels.com.ng/"
            }
        }
    }
</script>

<style scoped>
.AlphaTitle {
    margin: 0;
    margin-left: 10px;
    color: #FFF;
}
a {
    text-decoration-line: none
}
</style>
