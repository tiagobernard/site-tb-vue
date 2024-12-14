<template>
    <div id="contato" class="contato">
        <div class="container">
            <h2>tem um projeto em mente?<br/>
            então precisamos conversar.</h2>
            <h3>você pode me chamar no <a :href="`https://t.me/tiagobernard`" title="@tiagobernard" target="_blank">telegram</a> ou <a href="https://wa.me/5531998407238" target="_blank">whatsapp</a><br>
            ou enviar um e-mail para <a :href="`mailto:tiago@lab82.dev`">tiago@lab82.dev</a></h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContatoTb',
    data() {
        return {}
    },
    methods: {
        submit() {
            console.log(this.form);
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.contato {background:#e8e8e8;padding:35px 0;}
.contato h2,.contato h3 {font-family:'Montserrat';font-weight:400}
.contato h3 {margin-bottom:35px;}
.contato a {color:#3f729b;text-decoration:none;font-weight:600;display: inline-block;}
.contato a:hover {transition: .3s;transform: scale(0.9)}
input, textarea {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;transition:.3s;outline:none}
input:focus, textarea:focus {padding:10px;}
textarea {height:100px;}
.formsubmit {text-align:right;}

</style>