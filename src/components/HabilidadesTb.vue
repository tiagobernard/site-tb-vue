<template>
    <div id="servicos" class="habilidades">
        <div class="container">
            <h2>será incrível atender a sua empresa, tenho várias soluções para executar seu projeto.</h2>
            <h3>alguns tópicos que podem ajudar:</h3>
            <ul >
                <li class="d-flex align-items-center" v-for="(loopHab, index) in loopHabs" v-bind:key="index">
                    <span class="habIcon" v-html="loopHab.icone"></span>
                    <span class="habDesc">{{loopHab.descricao}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HabilidadesTb',
    data() {
        return {
    loopHabs: [{
                icone: '<i class="fas fa-code"></i>',
                descricao: 'front-end',
            },{
                icone: '<i class="fab fa-angular"></i>',
                descricao: 'angular',
            }, {
                icone: '<i class="fab fa-react"></i>',
                descricao: 'react',
            }, {
                icone: '<i class="fab fa-vuejs"></i>',
                descricao: 'vue.js',
              },  {
                icone: '<i class="fab fa-wordpress"></i>',
                descricao: 'wordpress',
            },{
                icone: '<i class="fas fa-laptop-code"></i>',
                descricao: 'sites',
            },{
                icone: '<i class="fas fa-shopping-cart"></i>',
                descricao: 'e-commerce',
            },{
                icone: '<i class="fas fa-file-alt"></i>',
                descricao: 'landing pages',
            },{
                icone: '<i class="fas fa-globe"></i>',
                descricao: 'domínios',
            },{
                icone: '<i class="fas fa-server"></i>',
                descricao: 'hospedagem',
            },{
                icone: '<i class="fab fa-expeditedssl"></i>',
                descricao: 'certificado ssl',
            },{
                icone: '<i class="fas fa-cloud-upload-alt"></i>',
                descricao: 'cloud backup',
            },]
}}}
</script>

<style scoped>
.habilidades {background:rgba(0, 0, 0, 0.95);color:#fff;}
.habIcon {width:64px;line-height:64px;text-align:center;border-radius:50%;background:#3f729b;font-size:32px;margin-right:10px;}
.habDesc{font-size:22px;}
</style>