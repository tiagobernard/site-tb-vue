<template>
    <div class="mainPosts">
        <CabecalhoTb />
        <div id="singlePost" class="container" v-if="post">
      <h1 style="text-align: center;">{{ post.titulo }}</h1>
      <hr>
      <img 
        :src="post.imagem" 
        width="500" 
        height="500" 
        style="object-fit: cover; float: left; margin-right: 50px; margin-bottom: 50px;" 
      />
      <article v-html="post.artigo"></article>
      <button @click="voltar">Voltar</button>
    </div>
    <FooterTb/>
    </div>
</template>

<script>
import CabecalhoTb from '@/components/CabecalhoTb.vue';
import FooterTb from '@/components/FooterTb.vue';

export default {
  name: 'SinglepostTb',
  components: {
    CabecalhoTb,
    FooterTb
  },
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) {
      console.error("Slug não encontrado na URL.");
      return;
    }

    fetch("https://tiagobernardes.com.br/api/blog/posts.json")
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
  },
  methods: {
    voltar() {
       //window.history.back();
        window.location.href = "/";
    }
  }
};
</script>

<style>
.mainPosts {background-color: #608db0}

#singlePost {
    background:#fff;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    padding: 168px 30px 60px 30px
}

#singlePost pre {
    background-color: #e8e8e8;
    width:fit-content;
    padding: 5px;
}
</style>