<template>
<div id="habilidades" class="habilidades">
<div class="container">
<div class="">
<div class="">
<h2>principais habilidades</h2>
</div>
<div class="cards">
<ul>
<li class="d-flex align-items-center" v-for="(descHabili, i) in descHabilis" v-bind:key="i">
<div class="cardsi col-2">
<span v-html="descHabili.iconCard"></span>
</div>
<div class="cardsp col-10">
<b>{{descHabili.tituloCard}}</b> | {{descHabili.textCard}}
</div>
</li>
</ul>

<!--ul>
<li class="mostrar"><i class="fab fa-html5"></i></li><div class="oculto"><h3>HTML5</h3>In order to allow div or span element to appear over an image when mouse hover over the image, this can be done with the help of .image:hover overlay,</div>
<li class="mostrar"><i class="fab fa-vuejs"></i></li><div class="oculto"><h3>VUEJS</h3>In order to allow div or span element to appear over an image when mouse hover over the image, this can be done with the help of .image:hover overlay,</div>
<li class="mostrar"><i class="fab fa-css3-alt"></i></li><div class="oculto"><h3>CSS3</h3>In order to allow div or span element to appear over an image when mouse hover over the image, this can be done with the help of .image:hover overlay,</div>
<li><i class="fab fa-angular"></i></li>
<li><i class="fab fa-js"></i></li>
<li><i class="fab fa-react"></i></li>
<li>7</li>
<li><i class="fab fa-wordpress"></i></li>
<li><i class="fab fa-js"></i></li>
<li><i class="fab fa-react"></i></li>
<li>7</li>
<li><i class="fab fa-wordpress"></i></li>
</ul -->
</div>
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
            },{
                tituloCard: 'css3',
                textCard: 'usado para estilizar elementos de linguagem de marcação como o html. Com ele é possível alterar diversos aspectos de design no layout do projeto.',
                iconCard: '<i class="fab fa-css3-alt"></i>',
            },{
                tituloCard: 'javascript',
                textCard: 'linguagem de programação interpretada estruturada. juntamente com HTML e CSS, o JavaScript é uma das principais tecnologias da web',
                iconCard: '<i class="fab fa-js"></i>',
            },{
                tituloCard: 'vuejs',
                textCard: 'framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
                iconCard: '<i class="fab fa-vuejs"></i>',
            },{
                tituloCard: 'bootstrap',
                textCard: 'framework web para desenvolvimento front-end para aplicações web usando HTML, CSS e JS. Melhora a experiência do usuário em um site amigável e responsivo.',
                iconCard: '<i class="fab fa-bootstrap"></i>',
            },{
                tituloCard: 'wordpress',
                textCard: 'gerenciador de conteúdo que pode ser usado para criar sites, blogs e lojas virtuais. 43% da internet usa a ferramenta.',
                iconCard: '<i class="fab fa-wordpress"></i>',
            }
        ]}}
}
</script>

<style scoped>
/*.oculto {display:none;position:absolute;left:10%;top:850px;
background:rgba(0,0,0,0.3);
max-width:500px;padding:10px;}
.mostrar:hover + .oculto {display:block;}*/

.habilidades {background:#294a65;color:#fff;}
.habilidades h2, .habilidades h3 {color:#f8f8f8;}

.cards ul {column-count:2;column-gap:1px}
.cards li{display:list-item;background:rgba(0,0,0,0.3);margin-bottom:10px;border:1px solid #294a65;padding:5px 10px;}
.cards li:hover {border:1px solid red;border-image:linear-gradient(225deg, #3f729b 0%, #294a65 100%) 1;}

.cardsi {font-size:64px;}
.cardsi {/*background:rgb( 0 0 0 / 0.2);*/text-align:center;margin-right:5px;}
.cardsp {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;}
</style> 