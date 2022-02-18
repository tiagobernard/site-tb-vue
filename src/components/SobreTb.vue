<template>
<div class="container sobre">
<div class="row d-flex align-items-center">
<div class="col-8">
    <!--h2>olá! sou tiago bernardes, brasileiro,
freelancer, desenvolvedor front-end,
especialista wordpress,
residente no brasil</h2 -->

<h2>olá! eu sou
<h1>tiago bernardes,</h1>
desenvolvedor front-end,<br>
wordpress e woocommerce.</h2>
</div>
<div class="col-4 socialTb">
<ul>
<li v-for="(loopSocial,index) in loopSocials" :key="index">
  <a :href="loopSocial.urlS" target="_blank"><span v-html="loopSocial.iconeS"></span></a>
</li>
</ul>
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
.sobre {}
.socialTb {margin-top:30px;text-align:center}
.socialTb ul {margin-bottom:0;}
.socialTb a {color:#3f729b;font-size:48px;}
.socialTb a:hover {opacity:0.8}
</style>