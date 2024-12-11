<template>
    <div id="blog" class="blog">
        <div class="container">
            <h2>postagens do blog</h2>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-else-if="posts.length" id="postsBlog" class="postsBlog">
                <ul>
                    <li v-for="post in posts" :key="post.slug">
                        <a :href="`/blog/${post.slug}`">
                        <!-- <a :href="`/single?slug=${post.slug}`"> -->
                            <img :src="post.imagem" :alt="post.titulo" />
                            <h4>{{ post.titulo }}</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else class="loading">Carregando...</div>
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
        fetch("https://tiagobernardes.com.br/api/blog/posts.json")
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
    padding: 35px 0;
}

.blog h2 {
    color: #282b30;
    margin-bottom: 35px;
    font-family: 'Montserrat';
    font-weight: 200
}

.postsBlog ul {
    display: flex !important;
    justify-content: space-between;
    padding: 0;
}

.postsBlog li {
    width: 32%;
    list-style: none;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    background-color: rgba(255, 255, 255, .3);
    padding: 35px;
    text-align: center;
}

.postsBlog a {
    text-decoration: none;
}

.postsBlog a h4 {
    color: #282b30
}

.postsBlog a h4:hover {
    color: #282b30;
    opacity: .8;
}

.postsBlog li img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px
}

.postsBlog li img:hover {
    transition: 0.3s;
    transform: scale(0.95);
}

@media only screen and (max-width:731px) {
    .postsBlog ul {
        display: flex;
        flex-direction: column;
    }

    .postsBlog li {
        width: 100%;
    }
}
</style>