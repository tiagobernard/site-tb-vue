<template>
  <div id="sobre" class="sobre">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-6">
          <h1>olá! eu sou<br />tiago bernardes,<br />desenvolvedor web,<br>wordpress, headless, vuejs.</h1>
        </div>
        <div class="col-6 socialTb">
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
      }, {
        iconeS: '<i class="fab fa-instagram"></i>',
        urlS: 'https://instagram.com/tiagobernard/'
      }, {
        iconeS: '<i class="fa-brands fa-x-twitter"></i>',
        urlS: 'https://x.com/TiagoBernard'
      }, 
      //{
      //   iconeS: '<i class="fab fa-telegram-plane"></i>',
      //   urlS: 'https://t.me/tiagobernard',
      // },
      {
        iconeS: '<i class="fab fa-whatsapp"></i>',
        urlS: 'https://wa.me/5531998407238',
      }, {
        iconeS: '<i class="far fa-envelope"></i>',
        urlS: 'mailto:tiago@lab82.dev'
      }]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.sobre {
  background-color: #e8e8e8;
  padding: 143px 0 35px 0;
  color: #282b30;
}

.sobre h1 {
  font-family: 'Montserrat';
  font-weight: 400
}

.socialTb ul {
  text-align: right;
  margin-bottom: 0;
}

.socialTb ul li {
  display: inline-block;
  list-style: none;
  margin-left: 35px;
}

.socialTb a {
  color: #3f729b;
  font-size: 48px;
  display: inline-block;
  transition: .3s;
}

.socialTb a:hover {
  transform: rotate(-10deg) scale(1.1);
  /* color:#282b30; */
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .6);
}

.socialTb li {
  animation: balanco 800ms;
  animation-iteration-count: 1;
  animation-delay: 1s;
}

@keyframes balanco {
  0% {
    transform: rotate(-50deg);
  }

  30% {
    transform: rotate(30deg);
  }

  50% {
    transform: rotate(-30deg)
  }

  70% {
    transform: rotate(20deg)
  }

  90% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@media only screen and (max-width:731px) {
  .sobre {
    padding: 306px 0 35px 0;
  }

  .sobre .col-6 {
    min-width: 100%;
  }

  .socialTb {
    min-width: 100%;
    padding-top: 20px
  }

  .socialTb ul {
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0
  }

  .socialTb ul li {
    margin-left: 0;
    height: 60px;
  }
}
</style>