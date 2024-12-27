<template>
    <div id="portfolio" class="port">
        <div class="portfolio">
            <div class="container">
                <h2>últimos projetos desenvolvidos</h2>
                <ul>
                    <li v-for="postagem in postagens.slice(0, 8)" :key="postagem.id">
                        <a :href=postagem.link>
                            <img id="imagem" :src=postagem.featured_image.size_full :alt="postagem.title.rendered" />
                        </a><br />
                        <span>{{ postagem.title.rendered }}</span>
                    </li>
                </ul>
            </div>
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
    methods: {},
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
    padding: 70px 0;
}

.portfolio h2 {
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 400;
    margin-bottom:5px;
}

.portfolio ul {
    padding: 0;
    margin:0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  
}

.portfolio li {
    list-style: none;
    color: #fff;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    width: 24%;
    padding-top: 20px;
}

.portfolio li a img {
    transition: 0.3s;
    display: inline-block;
    width: 100%;
    height: 145px;
    object-fit: cover;
}

.portfolio li a img:hover {
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
@media only screen and (min-width: 732px) and (max-width: 1024px) {
    .portfolio li {font-size:14px}
}
@media only screen and (max-width:731px) {
    .portfolio :where(ul, li) {
        padding-left: 0;
        min-width: 100%;
    }
    .portfolio li a img {
        width: 100%;
        height: auto;
    }
}
</style>