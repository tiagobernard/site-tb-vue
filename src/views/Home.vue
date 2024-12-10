<template>
  <div class="home">
  <CabecalhoTb/>
  <SobreTb/>
  <HabilidadesTb/>
  <ServicosTb/>
  <PortfolioTb/>
  <BlogTb/>
  <ContatoTb/>
  <FooterTb/>
  </div>
</template>

<script>
// @ is an alias to /src
import CabecalhoTb from '@/components/CabecalhoTb.vue';
import SobreTb from '@/components/SobreTb.vue';
import ServicosTb from '@/components/ServicosTb.vue';
import PortfolioTb from '@/components/PortfolioTb.vue';
import ContatoTb from '@/components/ContatoTb.vue'
import HabilidadesTb from '@/components/HabilidadesTb.vue';
import FooterTb from '@/components/FooterTb.vue';
import BlogTb from '@/components/BlogTb.vue';

export default {
  name: 'HoMe',
  components: {
    CabecalhoTb,
    SobreTb,
    ServicosTb,
    PortfolioTb,
    BlogTb,
    ContatoTb,
    HabilidadesTb,
    FooterTb
  },
//     mounted() {
//   window.scrollTo(0, 0)
// }
}
</script>