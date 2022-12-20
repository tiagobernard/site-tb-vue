<template>
    <div class="rodape">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <small>desenvolvido por tiago bernardes | hospedado por <a href="https://lab82.dev/"
                            target="_blank">lab82</a></small>
                </div>
                <div class="col-4 assinatura">
                    <img alt="GitHub last commit"
                        src="https://img.shields.io/github/last-commit/tiagobernard/site-tb-vue?label=%C3%BAltima%20atualiza%C3%A7%C3%A3o&logo=git">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContatoTb',
    data() { },
    methods: {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.rodape {
    background: #282b30;
    font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
    color: #fff;
    padding: 15px;
}

.rodape a {
    color: #fff;
    font-weight: 700;
    display: inline-block;
    text-decoration: none;
}

.rodape a:hover {
    transform: scale(1.1) rotate(-5deg)
}

.assinatura {
    text-align: right !important;
    color: #42b983;
}

@media only screen and (max-width:731px) {
    .rodape,
    .assinatura {
        text-align: center!important;
    }
    .col-8, .col-4 {width:100%!important;}
}
</style>