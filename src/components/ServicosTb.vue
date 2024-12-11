<template>
    <div id="servicos" class="servicos">
        <div class="container">
            <h2>será incrível atender a sua empresa.</h2>
            <h3>algumas soluções para executar seu projeto:</h3>
            <ul>
                <li class="d-flex align-items-center" v-for="(loopServ, index) of loopServs" v-bind:key="index">
                    <span class="servIcon" v-html="loopServ.icone"></span>
                    <span class="servDesc">{{loopServ.descricao}}</span>
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
            }]
}}}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.servicos {background-color:#282b30;color:#fff;padding:35px 0;scroll-margin: 108px;}
.servicos h2, .servicos h3 {font-family:'Montserrat';font-weight:200}
.servicos ul {column-count:3;padding-left:0;}
.servicos ul li {padding-top:35px;}
.servIcon {width:64px;line-height:64px;text-align:center;border-radius:50%;background:#3f729b;font-size:32px;margin-right:10px;transition:0.3s;}
.servIcon:hover{transform: rotate(-10deg);}
.servDesc{font-size:22px;font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;}

@media only screen and (max-width:731px) {
    .servicos ul {column-count:1;}
}
</style>