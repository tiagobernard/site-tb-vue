<template>
<div class="port">
    <div class="portfolio portfolioPage">
        <div class="container">
        <h1>principais projetos</h1>
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
                imagem: 'portfolio-aline-sabino.jpg',
                projeto: 'aline sabino',
                ano: '2021',
                url: 'https://alinesabino.com.br/',
                sobre: 'Projeto desenvolvido com muito carinho entregue em 2021 para esse exemplo de empreendedora que é Aline Sabino. Este foi mais um e-commerce que desenvolvemos com integrações diversas de pagamentos, os correios com a finalidade de cálculo de preço e prazo de frete, entrega própria e também com algumas transportadoras como opção de entrega. Além das integrações foi aplicado nessa loja virtual várias funcionalidades como lista de desejos, cupons de desconto, área do cliente e outras.',
            },{
                imagem: 'portfolio-rainha-da-paz.jpg',
                projeto: 'rainha da paz',
                ano: '2021',
                url: 'https://abcrainhadapaz.org.br/',
                sobre: 'Projeto desenvolvido para a conceituada Associação Beneficente Comunidade de Amor Rainha da Paz. Uma ONG que acolhe e reabilita pessoas com deficiência e suas famílias. O projeto entregue em 2021 em parceria com agência Pixal Design da cidade de São Bernardo do Campo/SP, tem como diferencial o sistema de doações que é integrado com várias formas de doações proporcionando maior rapidez e segurança para seus doadores.',
            },{
                imagem: 'portfolio-iza-sabino.jpg',
                projeto: 'iza sabino',
                ano: '2020',
                url: 'https://izasabino.com/',
                sobre: 'Projeto desenvolvido com muito carinho no finalzinho de 2020 para a rapper mineira Iza Sabino.',
            },{
                imagem: 'portfolio-patricia-duarte.jpg',
                projeto: 'patrícia duarte',
                ano: '2020',
                url: 'https://www.patriciaduarte.com.br/',
                sobre: 'Mais um belo projeto desenvolvido no ano de 2020 em parceria com a agência Pixal Design de São Bernardo do Campo.',
            },{
                imagem: 'portfolio-duarte-design.jpg',
                projeto: 'duarte design',
                ano: '2020',
                url: 'https://www.duartedesign.com.br/',
                sobre: 'Realizado com o gerenciador de conteúdos mais utilizado no mundo em 2020 em parceria com a agência Pixal Design de São Bernardo do Campo.',
            },{
                imagem: 'portfolio-hynove.jpg',
                projeto: 'hynove ambiental',
                ano: '2019',
                url: 'https://hynove.com.br/',
                sobre: 'Realizado com WordPress em 2019 em parceria com a agência Pixal Design de São Bernardo do Campo.',
            }] 
        }},
    components: {},
      mounted() {
      window.scrollTo(0, 0)
},
    computed: {
    loopPortf3(){ return this.loopPortfs.slice(0,3) }
  }
}
</script>

<style scoped>
.portfolioHome {background-color:#3f729b;}
.portfolio li img {width:100%;}
.portfolio ul li span {}
.portfDesc {line-height:35px;padding-left:10px;}
.portfDesc a i {color:#fff;}
.portfDesc a i:hover {opacity:0.5}
.portfolioHome .btn:hover {opacity:0.8;}
.portfolioHome button a {color:#606060;text-decoration:none;}
.portfolioHome .btn {margin-top:20px;}
.portfolioHome .btn-light {color:#606060;}
</style>