<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/-->
  <CabecalhoTb/>
  <SobreTb/>
  <HabilidadesTb/>
  <ServicosTb/>
  <PortfolioTb/>
  <ContatoTb/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import CabecalhoTb from '@/components/CabecalhoTb.vue';
import SobreTb from '@/components/SobreTb.vue';
import ServicosTb from '@/components/ServicosTb.vue';
import PortfolioTb from '@/components/PortfolioTb.vue';
import ContatoTb from '@/components/ContatoTb.vue'
import HabilidadesTb from '@/components/HabilidadesTb.vue';

export default {
  name: 'HoMe',
  components: {
    CabecalhoTb,
    SobreTb,
    ServicosTb,
    PortfolioTb,
    ContatoTb,
    HabilidadesTb,
    //HelloWorld
  },
    mounted() {
  window.scrollTo(0, 0)
},
  methods:{/*
  removePage(){
  this.$emit("remove-page", true);
}*/}
}
</script>
<style>
.home .portfolioPage {display:none;}
</style>