<template>
  <div class="proj">
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
.portfolioPage li {background:#f8f8f8;border-bottom:1px solid #e8e8e8;}
</style>