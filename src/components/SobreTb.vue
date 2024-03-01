<template>
  <div class="sobre">
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-8">
        <h1>olá! eu sou<br/>tiago bernardes,<br/>desenvolvedor web,<br>wordpress, headless, vuejs.</h1>
      </div>
      <div class="col-4 socialTb">
        <ul>
          <li v-for="(loopSocial, index) in loopSocials" :key="index">
            <a :href="loopSocial.urlS" target="_blank"><span v-html="loopSocial.iconeS"></span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SobreTb',
  data() {
    return {
      loopSocials: [{
        iconeS: '<i class="fab fa-github"></i>',
        urlS: 'https://github.com/tiagobernard/',
      }, {
        iconeS: '<i class="fab fa-linkedin-in"></i>',
        urlS: 'https://www.linkedin.com/in/tiagobernard/',
      }, /*{
        iconeS: '<i class="fab fa-twitter"></i>',
        urlS: 'https://twitter.com/tiagobernard/',
      }, {
        iconeS: '<i class="fab fa-instagram"></i>',
        urlS: 'https://instagram.com/tiagobernard/',
      },*/ {
        iconeS: '<i class="fab fa-telegram-plane"></i>',
        urlS: 'https://t.me/tiagobernard',
      },{
        iconeS: '<i class="fab fa-whatsapp"></i>',
        urlS: 'https://wa.me/5531998407238',
    }]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
.sobre {background-color:#e8e8e8;padding: 143px 0 35px 0;color:#282b30;}
.sobre h1 {font-family:'Montserrat';font-weight:200}

.socialTb ul {
  text-align:right;
  margin-bottom: 0;
}

.socialTb ul li {
  display: inline-block;
  list-style: none;
  margin-left:35px;
}

.socialTb a {
  color: #3f729b;
  font-size: 48px;
  display:inline-block;
  transition: .3s;
}

.socialTb a:hover {
  transform: rotate(-5deg) scale(1.1);
  color:#282b30;
}

@media only screen and (max-width:731px) {
  .sobre {padding: 165px 0 35px 0;}
  .socialTb ul li {
    margin-left:0;
    height: 60px;
  }
}
</style>