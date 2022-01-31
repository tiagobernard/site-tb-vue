<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="marcatb col-4">&lt;tb/&gt;</div>
        <nav class="col-8 d-flex align-items-center">
          <ul>
            <li><a href="#">serviços</a></li>
            <li><router-link to="/projetos">portfolio</router-link></li>
            <li><a href="#">contato</a></li>
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
  }
}
</script>

<style scoped>
header {box-shadow:0 0 15px 1px rgb(0 0 0 / 7%);;}
.cabecalho {}
.marcatb {font-family: 'Roboto Slab', serif;font-weight:700;font-size:72px;}
.marcatb {color:#3f729b;}
nav {align-items: center;justify-content: center;}
nav ul {text-align:center;margin-bottom:0;}
nav ul li {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;font-size:20px;margin-right:30px;}
nav ul li a {color:#282b30;text-decoration:none;transition: 1s;}
nav ul li a:hover {color:#3f729b;transition: 0.5s;}
</style>
