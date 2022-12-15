<template>
<div id="habilidades" class="habilidades">
<div class="container">
<div class="row">
<div class="col">
<h2>habilidades</h2>
</div>

<div class="cards col">
<div
v-for="(service, index) in servie_data"
:key="index"
@mouseover="selectIndex(index);"
@mouseout="ItemIndex = null;">


<span v-html="service.text"></span>

<div class="quietu"
v-show="ItemIndex == index"
v-for="(subservice, index2) in service.list"
:key="index2">
{{ subservice.test }}
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'HabilidadesTb',
    data() {
        return {
        servie_data: [
        {
          text: '<i class="fab fa-html5"></i>',
          hover: false,
          list: [{ test: "Mouse over div 1" }]
        },
        {
          text: '<i class="fab fa-css3-alt"></i>',
          hover: false,
          list: [{ test: 'Mouse over div 2' }]
        },
        {
          text: '<i class="fab fa-css3-alt"></i>',
          hover: false,
          list: [{ test: 'Mouse over div 2' }]
        },
        {
          text: '<i class="fab fa-css3-alt"></i>',
          hover: false,
          list: [{ test: 'Mouse over div 2' }]
        }
      ],
      ItemIndex: null
    };
  },
  methods: {
    selectIndex(Index) {
      this.ItemIndex = Index;
    }
  }
};
</script>

<style scoped>
/*.oculto {display:none;position:absolute;left:10%;top:850px;;
background:rgba(0,0,0,0.3);
max-width:500px;padding:10px;}
.mostrar:hover + .oculto {display:block;}*/
.quiet {position:absolute;left:20%;}

.habilidades {background:#294a65;color:#fff;}
.habilidades h2, .habilidades h3 {color:#f8f8f8;}

.skills ul li {display:block;}
.skills li {padding:10px;max-width:90%;margin:0;}
.skills ul {padding:0;}

.cards ul {column-count:4}
.cards li {font-size:64px;text-align:center;}
.cards li, .skills li {display:list-item;background:rgba(0,0,0,0.3);margin-bottom:10px;border:1px solid #294a65;}
.cards li:hover, .skills li {border:1px solid red;border-image:linear-gradient(225deg, #3f729b 0%, #294a65 100%) 1;}
</style> 
