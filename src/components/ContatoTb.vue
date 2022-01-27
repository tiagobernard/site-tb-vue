<template>
    <div class="contato" id="contato">
        <div class="container">
            <h2>tem um projeto em mente?<br>
            então precisamos conversar.</h2>
            <h3>você pode me enviar uma mensagem para o telegram,<br>
            um e-mail para tiago@tiagobernardes.com.br ou preencher o formulário abaixo.</h3>
            <form class="row g-3">
                <div class="col-md-6">
                    <input type="text" class="form-control form-control-lg" placeholder="nome *" aria-label="Nome">
                </div>
                <div class="col-md-6">
                    <input type="email" class="form-control form-control-lg" placeholder="e-mail *" aria-label="Email">
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control form-control-lg" placeholder="whatsapp com DDD *" aria-label="Whatsapp">
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control form-control-lg" placeholder="assunto *" aria-label="Assunto">
                </div>
                <center class="col-12">
                    <textarea class="mb-3 form-control form-control-lg" placeholder="mensagem *"></textarea>
                    <button type="submit" class="btn btn-secondary btn-lg">enviar</button>
                </center>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contatotb',
    data() {
        return {}
    }
}
</script>

<style scoped>
.contato {background:#e8e8e8;}
input, textarea {font-family:"Space Mono", Helvetica, Arial, Verdana, sans-serif;}
h3 {margin-bottom:15px;}
</style>