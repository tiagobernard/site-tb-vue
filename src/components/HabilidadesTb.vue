<template>
    <div id="habilidades" class="habilidades">
        <div class="container">
            <h1>principais habilidades</h1>
            <div class="cards">
                <ul>
                    <li class="d-flex align-items-center" v-for="(descHabili, i) in descHabilis" v-bind:key="i">
                        <div class="cardsi col-2">
                            <span v-html="descHabili.iconCard"></span>
                        </div>
                        <div class="cardsp col-10">
                            <b>{{ descHabili.tituloCard }}</b> | {{ descHabili.textCard }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HabilidadesTb',
    data() {
        return {
            descHabilis: [
                {
                    tituloCard: 'html5',
                    textCard: 'linguagem de marcação para a web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.',
                    iconCard: '<i class="fab fa-html5"></i>',
                }, {
                    tituloCard: 'css3',
                    textCard: 'usado para estilizar elementos de linguagem de marcação como o html. Com ele é possível alterar diversos aspectos de design no layout do projeto.',
                    iconCard: '<i class="fab fa-css3-alt"></i>',
                }, {
                    tituloCard: 'javascript',
                    textCard: 'linguagem de programação interpretada estruturada. juntamente com HTML e CSS, o JavaScript é uma das principais tecnologias da web',
                    iconCard: '<i class="fab fa-js"></i>',
                }, {
                    tituloCard: 'vuejs',
                    textCard: 'framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
                    iconCard: '<i class="fab fa-vuejs"></i>',
                }, {
                    tituloCard: 'bootstrap',
                    textCard: 'framework web para desenvolvimento front-end para aplicações web usando HTML, CSS e JS. Melhora a experiência do usuário em um site amigável e responsivo.',
                    iconCard: '<i class="fab fa-bootstrap"></i>',
                }, {
                    tituloCard: 'wordpress',
                    textCard: 'gerenciador de conteúdo que pode ser usado para criar sites, blogs e lojas virtuais. 43% da internet usa a ferramenta.',
                    iconCard: '<i class="fab fa-wordpress"></i>',
                }
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.habilidades {
    background: #294a65;color: #fff;padding: 35px 0;scroll-margin: 108px;
}

.habilidades h1 {
    color: #f8f8f8;
    margin-bottom:35px;
    font-family:'Montserrat';font-weight:200
}

.cards ul {
    column-count: 2;
    column-gap: 10px;
    padding-left:0;
    
}

.cards li {
    display: list-item;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    border: 2px solid #294a65;
    padding: 5px 10px;
}

.cards li:hover {
    border: 2px solid red;
    border-image: linear-gradient(225deg, #3f729b 0%, #294a65 100%) 1;
}

.cardsi {
    font-size: 64px;
    text-align: center;
    margin-right: 5px;
    transition:.3s;
}

.cardsi:hover{transform: rotate(-10deg);}

.cardsp {
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
}

@media only screen and (max-width:731px) {
.habilidades {scroll-margin: 180px;}
.cards ul {
    column-count:1;
}
.cardsi{
    margin-right:20px;
}
.cards li {
    padding:5px 20px;
}
}
</style> 