<template>
  <header class="cabecalho">
    <div class="container">
      <div class="row">
        <div class="marcatb col-4">
          <router-link id="scrollButton" to="/sobre">&lt;tb/&gt;</router-link>
        </div>
        <nav class="col-8 d-flex align-items-center">
          <ul>
            <li><router-link to="/#habilidades">habilidades</router-link></li>
            <li><router-link to="/#servicos">serviços</router-link></li>
            <li><router-link to="/#portfolio">portfólio</router-link></li>
            <li><router-link to="/#blog">blog</router-link></li>
            <li><router-link to="/#contato">contato</router-link></li>
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
  methods: {}
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
nav ul li {padding: 5px 0;display: block}
}
</style>
