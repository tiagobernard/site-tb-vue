<template>
    <div id="servicos" class="servicos">
        <div class="container">
            <h1>será incrível atender a sua empresa.</h1>
            <h2>algumas soluções para executar seu projeto:</h2>
            <ul>
                <li class="d-flex align-items-center" v-for="(loopHab, index) of loopHabs" v-bind:key="index">
                    <span class="habIcon" v-html="loopHab.icone"></span>
                    <span class="habDesc">{{loopHab.descricao}}</span>
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
    loopHabs: [/*{
                icone: '<i class="fas fa-code"></i>',
                descricao: 'front-end',
            },{
                icone: '<i class="fab fa-angular"></i>',
                descricao: 'angular',
            },{
                icone: '<i class="fab fa-react"></i>',
                descricao: 'react',
            },{
                icone: '<i class="fab fa-vuejs"></i>',
                descricao: 'vue.js',
              },{
                icone: '<i class="fab fa-wordpress"></i>',
                descricao: 'wordpress',
            },*/{
                icone: '<i class="fas fa-laptop-code"></i>',
                descricao: 'site',
            },{
                icone: '<i class="fas fa-file-alt"></i>',
                descricao: 'landing page',
            },{
                icone: '<i class="fas fa-store"></i>',
                descricao: 'marketplace',
            }
            ,{
                icone: '<i class="fas fa-shopping-cart"></i>',
                descricao: 'loja virtual',
            },{
                icone: '<i class="fas fa-server"></i>',
                descricao: 'hospedagem dedicada',
            },{
                icone: '<i class="fas fa-globe"></i>',
                descricao: 'registro de domínio',
            },/*{
                icone: '<i class="fab fa-expeditedssl"></i>',
                descricao: 'certificado ssl',
            },{
                icone: '<i class="fas fa-cloud-upload-alt"></i>',
                descricao: 'cloud backup',
            },{
                icone:'<i class="fas fa-cloud-upload-alt"></i>',
                descricao: 'teste item',
            },{
                icone: '<i class="fas fa-server"></i>',
                descricao: 'teste item 2',
            },{
                icone:'<i class="fas fa-cloud-upload-alt"></i>',
                descricao: 'teste item',
            },{
                icone: '<i class="fas fa-server"></i>',
                descricao: 'teste item 2',
            },{
                icone: '<i class="fas fa-server"></i>',
                descricao: 'teste item 2',
            }*/]
}}}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.servicos {background-color:#282b30;color:#fff;padding:35px 0;scroll-margin: 108px;}
.servicos h1, .servicos h2 {font-family:'Montserrat';font-weight:200}
.servicos ul {column-count:3;padding-left:0;}
.servicos ul li {padding-top:35px;}
.habIcon {width:64px;line-height:64px;text-align:center;border-radius:50%;background:#3f729b;font-size:32px;margin-right:10px;transition:0.3s;}
.habIcon:hover{transform: rotate(-10deg);}
.habDesc{font-size:22px;font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;}

@media only screen and (max-width:731px) {
    .servicos {scroll-margin: 140px;}
    .servicos ul {column-count:1;}
}
</style>