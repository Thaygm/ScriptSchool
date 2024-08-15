<template>
    <div class="menu-lateral">
        <ul>
            <li><a href="#">Visualizar Perfil</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Foto</a></li>
            <li><a href="#">Segurança da Conta</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Notificações</a></li>
            <li><a href="#">Encerrar Conta</a></li>
        </ul>
    </div>
    <div class="menu-lateral">
        <ul>
            <li><a href="#">Vídeos Favoritados</a></li>
            <li><a href="#">Histórico</a></li>
            <li><a href="#">Minhas Pastas</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuLateral",
};
</script>

<style scoped>
.menu-lateral {
    width: 250px;
    background-color: #f8f9fa;
    padding: 20px;
}
.menu-lateral ul {
    list-style: none;
    padding: 0;
}
.menu-lateral ul li {
    margin: 10px 0;
}
.menu-lateral ul li a {
    text-decoration: none;
    color: #333;
}
</style>
