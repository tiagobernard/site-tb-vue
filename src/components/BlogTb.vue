<template>
        <div id="blog" class="blog">
            <div class="container">
                <h1>postagens do blog</h1>
                <div id="postsBlog" class="postsBlog">
                </div>
            </div>
        </div>
</template>
<script>

//import axios from 'axios'
export default {
    name: 'BlogTb',
    data() {
        return { }
    },
    mounted() {
       //axios
       let posts = document.querySelector('#postsBlog')
            fetch("https://tiagobernardes.com.br/api/blog/posts.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ${response.status} : ${response.statusText}`)
                }
                return response.json();
            })
            .then(data => {
                
                let ul = document.createElement('ul')
                data.forEach((item) => {
                    let li = document.createElement('li')
                    let imagem = document.createElement('img')
                    let titulo = document.createElement('p')
                    let link = document.createElement('a')
                   
                    titulo.innerHTML = item.titulo
                    imagem.src = item.imagem
                    link.href = `/single?slug=${item.slug}`
                    li.appendChild(link)
                    link.appendChild(imagem)
                    link.appendChild(titulo)
                    ul.appendChild(li)
                   
                })
                posts.appendChild(ul)
            })
            .catch(error => {
                console.error("Ocorreu o erro: ", error.message)
            })
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
    scroll-margin: 108px;
}

.blog h1 {
    color:#282b30;
    margin-bottom: 35px;
    font-family: 'Montserrat';
    font-weight: 200
}

.postsBlog ul {
    display:flex!important;
    justify-content: space-between;
    padding:0;
}

.postsBlog li {
    width:32%;
    list-style: none;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    background-color: rgba(255,255,255,.3);
    padding: 35px;
    text-align: center;
}

.postsBlog a {color:#282b30;text-decoration:none}
.postsBlog a:hover {color:#282b30;opacity: .8;}

.postsBlog li img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom:20px
}

.postsBlog li img:hover {
    transition: 0.3s;
    transform: scale(0.95);
    /* box-shadow: 3px 3px 3px rgba(0, 0, 0, .6) */
}


/* .portfDesc {
    line-height: 35px;
}

.portfDesc a i {
    color: #fff;
}

.portfDesc a i:hover {
    opacity: 0.5
} */
@media only screen and (max-width:731px) {
    .blog {
        scroll-margin: 180px;
    }

    .blog ul {
        column-count: 1;
        padding-left: 0;
        width: 100%;
        display: inline-flex;
    }

    .blog li a img {
        width: 100%;
        height: auto;
    }
}
</style>