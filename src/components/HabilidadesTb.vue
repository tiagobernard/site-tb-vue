<template>
    <div id="habilidades" class="habilidades">
        <div class="container">
            <h2>Principais habilidades</h2>
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
                    tituloCard: 'HTML',
                    textCard: 'Linguagem de marcação para a web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.',
                    iconCard: '<i class="fab fa-html5"></i>',
                }, {
                    tituloCard: 'CSS',
                    textCard: 'Usado para estilizar elementos de linguagem de marcação como o html. Com ele é possível alterar diversos aspectos de design no layout do projeto.',
                    iconCard: '<i class="fa-brands fa-css"></i>',
                }, {
                    tituloCard: 'Javascript',
                    textCard: 'Linguagem de programação interpretada estruturada. juntamente com HTML e CSS, o JavaScript é uma das principais tecnologias da web.',
                    iconCard: '<i class="fab fa-js"></i>',
                },{
                    tituloCard: 'Python',
                    textCard: 'Uma linguagem de programação versátil, amplamente utilizada em desenvolvimento web, automação, inteligência artificial e ciência de dados.',
                    iconCard: '<i class="fa-brands fa-python"></i>'
                },{
                    tituloCard: 'Vuejs',
                    textCard: 'Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
                    iconCard: '<i class="fab fa-vuejs"></i>',
                }, {
                    tituloCard: 'Bootstrap',
                    textCard: 'Framework web para desenvolvimento front-end para aplicações web usando HTML, CSS e JS. Melhora a experiência do usuário em um site amigável e responsivo.',
                    iconCard: '<i class="fab fa-bootstrap"></i>',
                },
                {
                    tituloCard: 'Wordpress',
                    textCard: 'Gerenciador de conteúdo que pode ser usado para criar sites, blogs e lojas virtuais. 43% da internet usa a ferramenta.',
                    iconCard: '<i class="fab fa-wordpress"></i>',
                },{
                    tituloCard: 'Github',
                    textCard: 'Uma plataforma de hospedagem de código, usada para colaboração, controle de versão e gerenciamento de projetos.',
                    iconCard: '<i class="fa-brands fa-github-alt"></i>',
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
            if (tituloCard === "HTML") {
                idLogo.classList.add("colorHtml");
            } else if (tituloCard === "CSS") {
                idLogo.classList.add("colorCss");
            } else if (tituloCard === "Javascript") {
                idLogo.classList.add('colorJs')
            } else if (tituloCard === "Vuejs") {
                idLogo.classList.add('colorVuejs')
            } else if (tituloCard === "Bootstrap") {
                idLogo.classList.add('colorBootstrap')
            } else if (tituloCard === "Wordpress") {
                idLogo.classList.add('colorWordpress')
            } else if (tituloCard == "Python") {
                idLogo.classList.add('colorPython')
            } else if (tituloCard == "Github") {
                idLogo.classList.add('colorGithub')
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

:where(.colorHtml, .colorCss, .colorJs, .colorVuejs, .colorBootstrap, .colorWordpress, .colorPython, .colorGithub) {
    transform: rotate(-10deg) scale(1.1);
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

.colorPython {
    color: #fbcb24
}

.colorGithub {
    color:#f4cbb2
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

@media screen and (min-width:732px)  and (max-width:820px) {
    .cardsp {font-size:16px}
    .cards ul {display: flex;flex-direction: column;}
}

@media screen and (min-width: 821px) and (max-width: 1024px) {
    .cardsp {font-size:20px}
}

@media screen and (max-width:731px) {
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