<template>
  <!--div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/projetos">About</router-link>
  </div-->
  <!-- -->
  <header>
      <div class="container">
      <div class="row">
        <div class="marcatb col-4">
        <router-link to="/">&lt;tb/&gt;</router-link>
        </div>
        <nav class="col-8 d-flex align-items-center">
          <ul> <!-- 19:47 -->
          <!--li><router-link to="$scrollToTop">aaa</router-link></li-->
            <li><router-link to @click="praCima">início</router-link></li>
            <li><router-link to @click="goHabilidades">habilidades</router-link></li>
            <li><router-link to @click="goServicos">servicos</router-link></li>
            <li><router-link to @click="goProjetos">portfólio</router-link></li>
            <li><router-link to @click="goContato">contato</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <router-view/>
  <SobreTb/>
  <servicosTb/>
  <PortfolioTb/>
  <footer>
  <div class="container">
  <div class="row d-flex align-items-center">
  <div class="col d-flex align-items-center">
  desenvolvido com <a href="https://cli.vuejs.org" target="_blank">&nbsp;<i class="fab fa-vuejs"></i></a>
  </div>
  <div class="col col-direita">
  <router-link to @click="praCima" class="marcaTbFooter">&lt;tb/&gt;</router-link>
  </div>
  </div>
  </div>
  </footer>
<router-link id="scrollToTop" to @click="praCima" class="botaoUp stlPraCima">
  <i class="fas fa-angle-double-up"></i>
</router-link>
  <!--a class="botaoUp" id="scrollToTop2" href="#top">back to top</a-->


</template>

<script>
/*import SobreTb from '@/components/SobreTb.vue';
import servicosTb from '@/components/servicosTb.vue';
import PortfolioTb from '@/components/PortfolioTb.vue';*/

export default {
  name: 'App',
  data() {
    return {}
  },
  methods:{
      praCima(){
           window.scrollTo(0,0);
      },
      goServicos() {
        document.getElementById('servicos').scrollIntoView();
    },
      goContato() {
        document.getElementById('contato').scrollIntoView();
    },
    goProjetos() {
      document.getElementById('projetos').scrollIntoView();
    },
      goHabilidades() {
        document.getElementById('habilidades').scrollIntoView();
    }}}
  /*components: {
    //CabecalhoTb,
    SobreTb,
    servicosTb,
    PortfolioTb,
    //HelloWorld
  }*/

// Show/Hide the button
window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('scrollToTop');
    if (btn) btn.style.visibility = pageOffset > 445 ? 'visible' : 'hidden';
};
</script>

<style>
#scrollToTop { visibility: hidden; transition: 0.3s;}
.botaoUp {position:fixed;bottom:60px;right:40px;}


@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
h1, h2, h3 {color:#606060;font-family:"Montserrat", Helvetica, Arial, Verdana, sans-serif;}
body {font-size:15px;}
.sobre, .servicos, .portfolio, .habilidades {padding:150px 0 93px 0;}
.contato {padding:100px 0 117px 0;}
/*.servicos, .portfolio, .contato, .habilidades {padding: 90px 0 40px 0;}*/
.servicos h2, .servicos h3, .portfolio h2, .portfolio h3 {color:#fff;}

.servicos ul {column-count:3;}
.servicos li {padding-top:20px;}
.portfolio ul {column-count:3;}
.servicos ul, .portfolio ul {margin-top:30px;}
.servicos ul li, .portfolio ul li {list-style:none;display:list-item;flex-direction:row;margin-bottom:20px;}
.home .portfolio ul li {margin-bottom:0;}
.habDesc, .portfDesc, footer, .habilidades span {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;color:#fff;}
.portfolioPage .portfDesc {color:#606060;}
h1 {font-size:55px;line-height:60px;}
h2 {font-size:43px;line-height:48px;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
/*CABEÇALHO*/
header {box-shadow:0 0 15px 1px rgb(0 0 0 / 7%);
overflow:hidden;position:fixed;top:0;width:100%;background:rgb(255,255,255,0.9);
/*position:fixed;top:0;width:100%;background:rgb(255,255,255,0.9);*/}
.cabecalho {}
.marcatb, .marcaTbFooter {font-family: 'Roboto Slab', serif;font-weight:700;}
.marcatb {font-size:42px;}
.marcatb a {color:#3f729b;text-decoration:none;}
nav {align-items: center;justify-content: center;}
nav ul {text-align:center;margin-bottom:0;}
nav ul li {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;font-size:20px;margin-right:30px;}
nav ul li a {color:#282b30;text-decoration:none;transition: 1s;}
nav ul li a:hover {color:#3f729b; /*border-bottom:3px solid #282b30;*/transition: 0.5s;}

/*FOOTER*/
footer {background:rgba(0, 0, 0, 0.95);padding:5px 0;}
footer a {color:#fff; text-decoration:none;}
footer a:hover {opacity:0.5;color:#fff;}
.col-direita {text-align:right;}
.stlPraCima, .marcaTbFooter {color:#888;font-size:30px;}
.stlPraCima:hover, .marcaTbFooter:hover {color:#888;opacity:0.8;}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
