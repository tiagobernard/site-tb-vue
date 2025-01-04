<template>
    <div id="blog" class="blog">
        <div class="container">
            <h2>postagens do blog</h2>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-else-if="posts.length" id="postsBlog" class="postsBlog">
                <ul>
                    <li v-for="post in posts" :key="post.id">
                        <a :href="`/blog/${post.slug}`">
                            <h5>{{ post.titulo }}</h5>
                            <img :src="post.imagem" :alt="post.titulo"/>
                            <p>{{ post.resumo }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else>Carregando...</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogTb',
    data() {
        return {
            posts: [], // Armazena os posts do blog
            error: null // Armazena mensagens de erro
        }
    },
    mounted() {
        fetch("https://tiagobernardes.com.br/api/blog/posts.json?v=1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                this.posts = data.slice(0, 3); // Atualiza a propriedade reativa
            })
            .catch((error) => {
                this.error = "Ocorreu um erro ao carregar os posts do blog.";
                console.error("Erro:", error.message);
            });
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.blog {
    background-color: #608db0;
    padding: 70px 0;
}

.blog h2{
    color: #282b30;
    margin-bottom: 35px;
    font-family: 'Montserrat';
    font-weight: 400
}

.postsBlog ul {
    display: flex !important;
    justify-content: space-between;
    padding: 0;
    margin: 0
}

.postsBlog li {
    width: 32%;
    list-style: none;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    background-color: rgba(255, 255, 255, .3);
    padding: 35px;
    text-align: center;
}

.postsBlog h5 {font-size:1.3rem}

.postsBlog a {
    text-decoration: none;
    color: #282b30;
}

.postsBlog a:hover {
    color: #282b30;
    opacity: .8;
}

.postsBlog li img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
    transition: 0.3s;
}

.postsBlog li img:hover {
    transform: scale(0.95);
}

@media screen and (min-width: 732px) and (max-width: 820px) {
    .blog {padding: 70px 0 50px 0;}
    .postsBlog ul {max-width: 100%;flex-direction: column;}
    .postsBlog li {width: 100%;margin-bottom:20px}
    .postsBlog li img {display: none;}
}

@media screen and (min-width: 821px) and (max-width: 1024px) {
    .postsBlog li img {display: none;}
}

@media screen and (max-width:731px) {
    .postsBlog ul {
        display: flex;
        flex-direction: column;
    }
    .postsBlog li {
        width: 100%;
        margin-bottom:13px;
    }
    .postsBlog li img {display: none;}
}
</style>