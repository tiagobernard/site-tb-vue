<template>
    <div id="contato" class="contato">
        <div class="container">
            <h1>tem um projeto em mente?<br>
            então precisamos conversar.</h1>
            <h2>você pode me chamar no <a :href="`https://t.me/tiagobernard`" title="@tiagobernard" target="_blank">telegram</a> e <a href="https://wa.me/5531998407238" target="_blank">whatsapp</a><br>
            ou enviar um e-mail para <a :href="`mailto:tiago@lab82.dev`">tiago@lab82.dev</a></h2>
            <!-- v-on=@ - v-bind=: -->
            <!--form class="row g-3" @submit.prevent="submit" -->
            <!--form class="row g-3" action="https://api.staticforms.xyz/submit" method="post">
                <div class="col-md-6">
                    <input type="text" name="name" class="form-control form-control-lg" placeholder="nome completo *">
                </div>
                <div class="col-md-6">
                    <input type="email" name="email" class="form-control form-control-lg" placeholder="e-mail *">
                </div>
                <div class="col-md-6">
                    <input type="text" name="phone" inputmode="numeric" class="form-control form-control-lg" placeholder="whatsapp com DDD *">
                </div>
                <div class="col-md-6">
                    <input type="text" name="subject" class="form-control form-control-lg" placeholder="assunto *">
                </div>
                <center class="col-12">
                    <textarea name="message" class="mb-3 form-control form-control-lg" placeholder="mensagem *"></textarea>
                    <button type="submit" class="btn btn-secondary btn-lg">enviar</button>
                    <input type="hidden" name="accessKey" value="b7e172de-86cc-44a3-abc9-2f3080d0565f">
                    <input type="hidden" name="redirectTo" value="https://tiagobernardes.com.br/#/tks">
                </center>
            </form-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContatoTb',
    data() {
        return {
            form: {
                nome: null,
                email: null,
                whats: null,
                assunto: null,
                mensagem: null
            }
        }
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
.contato h1,.contato h2 {font-family:'Montserrat';font-weight:200}
.contato h2 {margin-bottom:35px;}
.contato a {color:#3f729b;text-decoration:none;font-weight:300}
input, textarea {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;transition:.3s;outline:none}
input:focus, textarea:focus {padding:10px;}
textarea {height:100px;}
.formsubmit {text-align:right;}

</style>