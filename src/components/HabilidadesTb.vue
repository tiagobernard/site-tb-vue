<template>
    <div id="habilidades" class="habilidades">
        <div class="container">
            <h2>principais habilidades</h2>
            <div class="cards">
                <ul>
                    <li class="d-flex align-items-center" v-for="(card, index) in descHabilis" :key="index"
                        @mouseover="atualizarCardAtivo(index)" @mouseout="resetarClasseLogo">
                        <div class="cardsi col-2">
                            <span :id="'colorLogo-' + index" v-html="card.iconCard"></span>
                        </div>
                        <div class="cardsp col-10">
                            <b>{{ card.tituloCard }}</b> | {{ card.textCard }}
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
            cardAtivo: null,
            descHabilis: [
                {
                    tituloCard: 'html',
                    textCard: 'linguagem de marcação para a web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.',
                    iconCard: '<i class="fab fa-html5"></i>',
                }, {
                    tituloCard: 'css',
                    textCard: 'usado para estilizar elementos de linguagem de marcação como o html. Com ele é possível alterar diversos aspectos de design no layout do projeto.',
                    iconCard: '<i class="fa-brands fa-css"></i>',
                }, {
                    tituloCard: 'javascript',
                    textCard: 'linguagem de programação interpretada estruturada. juntamente com HTML e CSS, o JavaScript é uma das principais tecnologias da web.',
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
    },
    methods: {
        atualizarCardAtivo(index) {
            // Atualiza o card ativo
            this.cardAtivo = index;

            // Seleciona o elemento correspondente
            const idLogo = document.querySelector(`#colorLogo-${index}`);
            if (idLogo) {
                const tituloCard = this.descHabilis[index]?.tituloCard;
                this.aplicarClasseLogo(idLogo, tituloCard);
            }
        },
        aplicarClasseLogo(idLogo, tituloCard) {
            // Aplica a classe CSS com base no título do card
            if (tituloCard === "html") {
                idLogo.classList.add("colorHtml");
            } else if (tituloCard === "css") {
                idLogo.classList.add("colorCss");
            } else if (tituloCard === "javascript") {
                idLogo.classList.add('colorJs')
            } else if (tituloCard === "vuejs") {
                idLogo.classList.add('colorVuejs')
            } else if (tituloCard === "bootstrap") {
                idLogo.classList.add('colorBootstrap')
            } else if (tituloCard === "wordpress") {
                idLogo.classList.add('colorWordpress')
            }
        },
        resetarClasseLogo() {
            // Remove todas as classes personalizadas
            document
                .querySelectorAll("[id^='colorLogo']")
                .forEach((el) => el.className = "");
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.habilidades {
    background: #294a65;
    color: #fff;
    padding: 70px 0;
}

.habilidades h2 {
    color: #f8f8f8;
    margin-bottom: 25px;
    font-family: 'Montserrat';
    font-weight: 400
}
.cardsi span {
    display: inline-block;
    transition: .3s;
}

.colorHtml,
.colorCss,
.colorJs,
.colorVuejs,
.colorBootstrap,
.colorWordpress {
    transform: rotate(-10deg);
    scale: 1.1;
    text-shadow: 2px 2px 1px rgba(0,0,0,.6);
}

.colorHtml {
    color: #e34c26;
}

.colorCss {
    color: #663399;
}

.colorJs {
    color: #f0db4f
}

.colorVuejs {
    color: #2da968
}

.colorBootstrap {
    color: #712cf9
}

.colorWordpress {
    color: #3858e9
}

.cards ul {
    column-count: 2;
    column-gap: 10px;
    padding: 0;
    margin:0;

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
    transition: .3s;
}

.cardsp {
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
}

@media only screen and (min-width:732px)  and (max-width:820px) {
    .cardsp {font-size:16px}
    .cards ul {display: flex;flex-direction: column;}
}

@media only screen and (min-width: 821px) and (max-width: 1024px) {
    .cardsp {font-size:20px}
}

@media only screen and (max-width:731px) {
    .cards ul {
        column-count: 1;
    }

    .cardsi {
        margin-right: 20px;
    }

    .cards li {
        padding: 5px 20px;
    }
}
</style>