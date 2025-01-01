<template>
    <div class="rodape">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <small>
                        1998 - 2024 | desenvolvido em
                        <a :href="iconeFooter.linkIcone" target="_blank">
                            <span v-html="iconeFooter.desenhoIcone"></span>
                        </a> por tiago bernardes | hospedado por
                        <a href="https://lab82.dev/" target="_blank">lab82</a>
                    </small>
                </div>
                <div class="col-4 assinatura">
                    <img alt="GitHub last commit"
                        src="https://img.shields.io/github/last-commit/tiagobernard/site-tb-vue?label=%C3%BAltima%20atualiza%C3%A7%C3%A3o&logo=git">
                </div>
            </div>
        </div>
        <router-link id="scrollButton" class="btn-top" to @click="goUp"><i class="fas fa-angle-double-up"></i></router-link>
    </div>
</template>

<script>
export default {
    name: 'ContatoTb',
    data() {
        return {
            iconeFooter: {
                desenhoIcone: '<i class="fab fa-vuejs"></i>',
                linkIcone: 'https://vuejs.org'
            }
        }
    },
    methods: {
        goUp() {
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.rodape {
    background: #282b30;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    color: #fff;
    padding: 15px;
}

.rodape small a {
    color: #fff;
    font-weight: 700;
    display: inline-block;
    transition: .3s
}

.rodape small a:hover {
    color:#fff;
    transform: scale(1.2) rotate(-5deg);
    text-shadow: 1px 1px 2px rgba(0,0,0,.9);
}

.rodape small i {
    font-size:24px
}

.assinatura {
    text-align: right !important;
    color: #42b983;
}

.btn-top {
    position: fixed;
    bottom: 35px;
    right: 35px;
    background-color:#000/*#282b30*/;
    z-index: 1;
    padding: 10px 20px;
    font-size: 18px;
    display: block;
    color: #008080;
    transition:.3s;
    opacity:0.8;
}

.btn-top:hover {
    transform:scale(1.1);
    color:#3f729b;
}

@media only screen and (min-width: 732px) and (max-width: 768px) {
    .btn-top {margin-bottom: 50px;}
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
    .rodape small {font-size: 0.8rem}
}
@media only screen and (max-width:731px) {

    .rodape,
    .assinatura {
        text-align: center !important;
    }

    .col-8,
    .col-4 {
        width: 100% !important;
    }
    .btn-top {
        bottom: 0;
        right: 0;
    }
}
</style>