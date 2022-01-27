<template>
<div class="port">
    <div class="portfolio portfolioPage">
        <div class="container">
            <ul>
                <li v-for="(loopPortf, index) in loopPortfs" :key="index">
                    <img :src="'./img/' + loopPortf.imagem" :alt="projeto"/>
                    <span class="portfDesc">{{loopPortf.projeto + ' | ' + loopPortf.ano + ' | '}}
                        <a :href="loopPortf.url">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <div id="projetos" class="portfolio portfolioHome">
        <div  class="container">
            <h2>últimos projetos desenvolvidos</h2>
            <ul>
                <li v-for="(loopPortf,index) of loopPortf3" :key="index">
                    <img :src="'./img/' + loopPortf.imagem" :alt="loopPortf.projeto"/>
                    <span class="portfDesc">{{loopPortf.projeto + ' | ' + loopPortf.ano + ' | '}}
                    <a :href="loopPortf.url" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    </span>
                </li>
            </ul>
            <div class="d-grid gap-2 col-2 mx-auto">
                <router-link class="btn btn-light btn-lg" to="/projetos">ver mais</router-link>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'PortfolioTb',
    data() {
        return {
            loopPortfs: [{
                imagem: 'portfolio-bruck-service.jpg',
                projeto: 'bruck service',
                ano: '2021',
                url: 'https://bruck.ind.br/',
                sobre: 'O projeto Bruck Service foi desenvolvido para uma empresa que cuida de nossa segurança. O site institucional da Bruck, foi desenvolvido para divulgar sua excelência na prestação de serviços de combate e detecção contra incêndios.',
            },{
                imagem: 'portfolio-universob.jpg',
                projeto: 'universo b',
                ano: '2021',
                url: 'https://universob.com.br/',
                sobre: 'O e-commerce Universo B foi um projeto desenvolvido em parceria com a Pixal Design em 2021. Esta foi mais uma loja virtual que desenvolvemos com integração de pagamento, correios com a finalidade de cálculo de preço e prazo de frete e também com algumas transportadoras como opção de entrega. Além das integrações foi aplicado nessa loja virtual várias funcionalidades como lista de desejos, cupons de desconto, área do cliente e outras.',
            },{
                imagem: 'portfolio-recirculo.jpg',
                projeto: 'recirculo',
                ano: '2021',
                url: 'https://recirculo.com.br/',
                sobre: 'Projeto desenvolvido para uma empresa que cuida de nosso planeta. O site institucional da Recirculo Gerenciamento de Resíduos Industriais, foi desenvolvido juntamente com nossa grande parceira Pixal Design de São Bernardo do Campo/SP.',
            },{
                imagem: 'https://lab82.dev/wp-content/uploads/2019/09/portifolio-faculdade-senai-pe-tiago-bernardes-desenvolvedor-front-ent.jpg',
                projeto: 'Aline Sabino',
                ano: 'set.2012',
                url: 'https://lab82.dev/',
                sobre: '',
            },{
                imagem: 'https://lab82.dev/wp-content/uploads/2019/09/portifolio-faculdade-senai-pe-tiago-bernardes-desenvolvedor-front-ent.jpg',
                projeto: 'hynove ambiental',
                ano: 'set.2013',
                url: 'https://lab82.dev/',
                sobre: '',
            }] 
        }},
    components: {},
      mounted() {
      window.scrollTo(0, 0)
},
    computed: {
    //loopPortf3() {
    //return this.loopPortfs.slice()[0];
    loopPortf3(){ return this.loopPortfs.slice(0,3) }
    //return this.loopPortfs.slice(-3)[0];
  }
}
</script>

<style scoped>
.portfolioHome {background-color:#3f729b;}
.portfolio li img {width:100%;}
.portfolio ul li span {}
.portfDesc {line-height:30px;}
.portfDesc a i {color:#fff;}
.portfDesc a i:hover {opacity:0.5}
.portfolioHome .btn:hover {opacity:0.8;}
.portfolioHome button a {color:#606060;text-decoration:none;}
.portfolioHome .btn {margin-top:20px;}
.portfolioHome .btn-light {color:#606060;}
</style>