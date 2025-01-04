<template>
  <div class="mainPosts">
    <CabecalhoTb />
    <div id="singlePost" class="container" v-if="post">
      <h1 style="text-align: center;">{{ post.titulo }}</h1>
      <hr>
      <img :src="post.imagem" :alt="post.artigo"/>
      <article v-html="post.artigo"></article>
      <button class="btn btn-secondary" @click="voltar">voltar</button>
      <router-link id="scrollButton" class="btn-top" to @click="goUp">
        <i class="fas fa-angle-double-up"></i>
      </router-link>
    </div>
    <FooterTb />
  </div>
</template>

<script>
import CabecalhoTb from '@/components/CabecalhoTb.vue';
import FooterTb from '@/components/FooterTb.vue';

export default {
  name: 'BlogtTb',
  components: {
    CabecalhoTb,
    FooterTb
  },
  data() {
    return {
      post: null,
    };
  },
  methods: {
    voltar() {
      this.$router.push('/'); // Volta para a página inicial usando Vue Router
    },
    goUp() {
      window.scrollTo(0, 0); // Função para rolar para o topo
    }
  },
  mounted() {
    const slug = this.$route.params.slug; // Pega o parâmetro slug diretamente da URL
    if (!slug) {
      console.error("Slug não encontrado na URL.");
      return;
    }
    fetch("https://tiagobernardes.com.br/api/blog/posts.json?v=2")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ${response.status} : ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const post = data.find(item => item.slug === slug);
        if (!post) {
          console.error("Post não encontrado para o slug:", slug);
          return;
        }
        document.title = `Blog Tiago Bernardes - ${post.titulo}`;
        this.post = post;
      })
      .catch(error => console.error("Erro ao buscar post:", error));
  }
}
</script>

<style>
.mainPosts .cabecalho .col-8 {
  display: none!important;
}

.mainPosts .cabecalho .col-4 {
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.mainPosts {
  background-color: #608db0
}

#singlePost {
  background: #f8f8f8;
  font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
  padding: 168px 30px 60px 30px
}

#singlePost :where(h1,h2,h3) {font-family: "Montserrat"}
#singlePost h1 {text-transform: lowercase;}

#singlePost img {
  width: 500px;
  height: 500px;
  object-fit: cover;
  float: left;
  margin-right: 50px;
  margin-bottom: 50px;
}

#singlePost pre {
  background-color: #e8e8e8;
  width: fit-content;
  padding: 5px;
  font-family:'Courier New', Courier, monospace;
  font-size: medium;
}

.btn-top {
  position: fixed;
  bottom: 35px;
  right: 35px;
  background-color: #000;
  z-index: 1;
  padding: 10px 20px;
  font-size: 18px;
  display: block;
  color: #a6ce39;
  transition: .3s;
  opacity: 0.8;
}

.btn-top:hover {
  transform: scale(1.1)
}

@media screen and (max-width:731px) {
  #singlePost {
    padding: 143px 30px 60px 30px;
  }

  #singlePost img {
    width: 100%;
  }

  #singlePost pre {
    max-width: 100%;
  }

  .btn-top {
    bottom: 0;
    right: 0;
  }
}
</style>
