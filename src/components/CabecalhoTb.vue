<template>
  <header class="cabecalho">
    <div class="container">
      <div class="row">
        <div class="marcatb col-4">
          <!--router-link to="/">&lt;tb/&gt;</router-link-->
          <router-link id="scrollButton" to @click="goUp">&lt;tb/&gt;</router-link>
        </div>
        <nav class="col-8 d-flex align-items-center">
          <ul>
            <li><router-link to @click="goHab">habilidades</router-link></li>
            <li><router-link to @click="goServ">serviços</router-link></li>
            <li><router-link to @click="goPort">portfólio</router-link></li>
            <li><router-link to @click="goCont">contato</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CabecalhoTb',
  props: {
    msg: String
  },
  methods: {
    goUp() {window.scrollTo(0,0)},
    goHab() { var habi = document.getElementById("habilidades"); habi.scrollIntoView(); },
    goServ() { var serv = document.getElementById("servicos"); serv.scrollIntoView(); },
    goPort() { var port = document.getElementById("portfolio"); port.scrollIntoView(); },
    goCont() { var cont = document.getElementById("contato"); cont.scrollIntoView(); },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
header {
  box-shadow: 0 0 15px 1px rgb(0 0 0 / 7%);
  z-index: 1;
  position: sticky;
}

.cabecalho {
  background-color: #e8e8e8;position:fixed;width:100%;overflow:hidden;
}

.marcatb a {
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 72px;
  color: #3f729b;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s
}

.marcatb a:hover {
  transform: scale(0.9)
}

nav {
  align-items: flex-end;
  justify-content: flex-end;
}

nav ul {
  text-align: right;
  margin-bottom: 0;
}

nav ul li {
  font-family: "Space Mono", Helvetica, Arial, Verdana, sans-serif;
  font-size: 20px;
  margin-left: 35px;
  display: inline-block;
}

nav ul li a {
  color: #282b30;
  text-decoration: none;
  display:inline-block;
  transition:0.3s;
}

nav ul li a:hover {
  color: #3f729b;
  transform: scale(0.9);
}
@media only screen and (max-width:731px) {
.cabecalho {padding:10px 0;}
.marcatb {display: flex;align-items: center;}
nav ul li {padding: 5px 0;}
}
</style>
