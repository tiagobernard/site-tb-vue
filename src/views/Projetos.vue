<template>
  <div class="proj container">
    <h1>principais projetos</h1>
    <div>
    <PortfolioTb/>
    </div>
  </div>
</template>

<script>
import PortfolioTb from '../components/PortfolioTb.vue';
export default {
  name: 'Projetos',
  components: {
    PortfolioTb,
},
methods:{/*
  removeHome(){
  this.$emit("remove-home", true);
}*/}
}
</script>
<style>
.proj .portfolioHome {display:none;}
.portfolioPage .portfDesc a i {color:#606060;}
</style>