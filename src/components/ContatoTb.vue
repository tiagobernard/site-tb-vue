<template>
    <div id="contato" class="contato">
        <div class="container">
            <h2>Tem um projeto em mente?<br/>
            Então precisamos conversar.</h2>
            <h3>Você pode me chamar no <a :href="`https://t.me/tiagobernard`" title="@tiagobernard" target="_blank">Telegram</a>, <a href="https://wa.me/5531998407238" target="_blank">Whatsapp</a> ou<br>
            enviar um e-mail para <a :href="`mailto:tiago@lab82.dev`">tiago@lab82.dev</a></h3>
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

.contato {background:#e8e8e8;padding:70px 0;}
.contato :where(h2,h3) {font-family:'Montserrat';font-weight:400}
.contato h3 {margin-bottom: 0;}
.contato a {color:#3f729b;text-decoration:none;font-weight:600;display: inline-block;transition: .3s;}
.contato a:hover {transform: scale(0.9)}

</style>