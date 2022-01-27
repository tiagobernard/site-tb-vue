<template>
<div class="container sobre">
    <h1>olá! sou tiago bernardes, brasileiro,
freelancer, desenvolvedor front-end,
especialista wordpress,
residente no brasil</h1>
<div class="socialTb">
<ul>
<li v-for="(loopSocial,index) in loopSocials" :key="index">
  <a :href="loopSocial.urlS" target="_blank"><span v-html="loopSocial.iconeS"></span></a>
</li>
</ul>
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
      },{
        iconeS:'<i class="fab fa-linkedin-in"></i>',
        urlS:'https://www.linkedin.com/in/tiagobernard/',
      },{
        iconeS:'<i class="fab fa-twitter"></i>',
        urlS: 'https://twitter.com/tiagobernard/',
      },{
        iconeS: '<i class="fab fa-instagram"></i>',
        urlS: 'https://instagram.com/tiagobernard/',
      },]
}}}
</script>

<style scoped>
.sobre {text-align:center;}
.socialTb {margin-top:30px;}
.socialTb ul {margin-bottom:0;}
.socialTb a {color:#606060;font-size:32px;}
.socialTb a:hover {opacity:0.8}
</style>