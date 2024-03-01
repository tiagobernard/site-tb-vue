<template>
    <div class="thanks">
        <div class="container">
            <center>
                <h1>obrigado!</h1>
                <h2>em breve irei retornar ;)</h2>
                <router-link to="/">{{voltar}}</router-link>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TksTb',
    data() {
        return {voltar: 'voltar para o início'}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

.thanks {
    background: #e8e8e8;
    padding: 150px 0;
}

.thanks h1,
.thanks h2 {
    font-family: 'Montserrat';
    font-weight: 200
}

.thanks a {
    color: #3f729b;
    text-decoration: none;
    font-weight: 300
}
</style>