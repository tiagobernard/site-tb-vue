<template>
    <div id="portfolio" class="port">
        <div class="portfolio">
            <div class="container">
                <h2>últimos projetos desenvolvidos</h2>
                <ul v-for="postagem in postagens.slice(0, 8)" :key="postagem.id">
                    <li>
                        <a :href=postagem.link><img id="imagem" :src=postagem.featured_image.size_full :alt="postagem.title.rendered" /></a><br />
                        <span>{{ postagem.title.rendered }}</span>
                    </li>
                </ul>
            </div>
            <router-link id="scrollButton" class="btn-top" to @click="goUp"><i class="fas fa-angle-double-up"></i></router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'PortfolioTb',
    data() {
        return {
            postagens: [],
        }
    },
    methods: {
        goUp() {
            window.scrollTo(0, 0)
        }
    },
    mounted() {
        axios
        .get("https://lab82.dev/wp-json/wp/v2/dt_portfolio/")
        .then(response => (this.postagens = response.data))
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.portfolio {
    background-color: #3f729b;
    padding: 35px 0;
}

.portfolio h2 {
    color: #fff;
    margin-bottom: 35px;
    font-family: 'Montserrat';
    font-weight: 400
}

.portfolio ul {
    column-count: 4;
    padding-left: 0;
    width: 25%;
    display: inline-flex;
}

.portfolio ul li {
    list-style: none;
    color: #fff;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
}

.portfolio ul li a img {
    transition: 0.3s;
    display: inline-block;
    width: 270px;
    height: 130px;
    object-fit: cover;
}

.portfolio ul li a img:hover {
    transform: rotate(-2deg) scale(1.05);
    box-shadow: 2px 2px 1px rgba(0, 0, 0, .6)
}


.portfDesc {
    line-height: 35px;
}

.portfDesc a i {
    color: #fff;
}

.portfDesc a i:hover {
    opacity: 0.5
}
.btn-top {
    position: fixed;
    bottom: 35px;
    right: 35px;
    background-color:#000/*#282b30*/;
    z-index: 1;
    padding: 10px 20px;
    font-size: 18px;
    display: block;
    color: #a6ce39;
    transition:.3s;
    opacity:0.8;
}

.btn-top:hover {transform:scale(1.1)}
@media only screen and (max-width:731px) {
    .portfolio ul {
        column-count: 1;
        padding-left: 0;
        width: 100%;
        display: inline-flex;
    }
    .portfolio ul li a img {
        width: 100%;
        height: auto;
    }
    .btn-top {
        bottom: 0;
        right: 0;
    }
}
</style>