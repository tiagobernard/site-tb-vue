<template>
    <div id="servicos" class="servicos">
        <div class="container">
            <h2>Será incrível atender a sua empresa.</h2>
            <h3>Algumas soluções para executar seu projeto:</h3>
            <ul>
                <li class="d-flex align-items-center" v-for="(loopServ, index) of loopServs" v-bind:key="index">
                    <span class="servIcon iconId" v-html="loopServ.icone"></span>
                    <h5 class="servDesc">{{ loopServ.descricao }}</h5>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicosTb',
    data() {
        return {
            loopServs: [{
                icone: '<i class="fas fa-laptop-code"></i>',
                descricao: 'Site',
            },{
                icone: '<i class="fas fa-store"></i>',
                descricao: 'Marketplace',
            },{
                icone: '<i class="fa-solid fa-envelope-circle-check"></i>',
                descricao: 'SMTP server'
            },{
                icone: '<i class="fas fa-file-alt"></i>',
                descricao: 'Landing page',
            },{
                icone: '<i class="fas fa-globe"></i>',
                descricao: 'Registro de domínio',
            },{
                icone: '<i class="fa-solid fa-chart-line"></i>',
                descricao: 'SEO'
            },  {
                icone: '<i class="fas fa-shopping-cart"></i>',
                descricao: 'Loja virtual',
            }, {
                icone: '<i class="fas fa-server"></i>',
                descricao: 'Hospedagem dedicada',
            },  {
                icone: '<i class="fa-brands fa-google"></i>',
                descricao: 'Google ADS'
            }]
        }
    },
    mounted() {
        const listItens = document.querySelectorAll(".servicos li");
        listItens.forEach(item => {
            item.addEventListener("mouseover", () => {
                const icon = item.querySelector(".iconId i");
                if (icon) {
                    icon.classList.add('classIcon')
                }
            });
            item.addEventListener('mouseout', () => {
                const icon = item.querySelector('.iconId i')
                icon.classList.remove('classIcon')
            })
        })
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.servicos {
    background-color: #282b30;
    color: #fff;
    padding: 70px 0;
    scroll-margin: 108px;
}

.servIcon i {
    transition: .3s;
}

.servIcon {
    width: 72px;
    line-height: 72px;
    text-align: center;
    border-radius: 50%;
    font-size: 56px;
    margin-right: 5px;
}

.classIcon {
    transform: rotate(-10deg) scale(1.1);
    text-shadow: 2px 2px 1px rgba(0, 0, 0, .6);
    color:#c0cedd;
}

.servicos :where(h2,h3) {
    font-family: 'Montserrat';
    font-weight: 400
}

.servicos h3 {
    margin-bottom: 19px
}

.servicos ul {
    padding: 0;
    margin:0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
}

.servicos li {
    background-color: rgba(37, 57, 75, .6);
    margin-top: 13px;
    width: 32.7%;
    padding-left: 20px;
    height: 110px;
    border: 2px solid #282b30;
}

.servicos li:hover {
    border: 2px solid red;
    border-image: linear-gradient(225deg, #294a65 0%, #282b30 100%)1;
}

.servDesc {
    font-size: 1.3rem;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    margin-bottom: 0;
}

@media screen and (min-width:732px) and (max-width:812px) {
    .servDesc {font-size:1.1rem}
    .servIcon {margin-right:8px}
    .servicos li {padding-left:10px;}
}

@media screen and (max-width:731px) {
    .servicos li {
        width: 100%;
    }
}
</style>