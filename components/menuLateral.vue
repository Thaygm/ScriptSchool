<template>
    <div class="menu-lateral">
        <div class="profile-section">
            <img class="profile-picture" src="https://via.placeholder.com/200x200" alt="Profile Picture"  />
            <h4 class="profile-name">Nome do Usuário</h4>
        </div>
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
    data() {
        return {
            userName: "Nome do Usuário",
        };
    },
};
</script>

<style scoped>
.menu-lateral {
    width: 250px;
    background-color: var(--lightGray-color);
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
    color: var(--white-color);
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.menu-lateral ul li a:hover {
    background-color: var(--pink-color);
    color: var(--white-color);
}

.profile-section {
    text-align: center;
    margin-bottom: 20px;
}

.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
}

.profile-name {
    font-weight: 18px;
    color: var(--iceWhite-color);
}
</style>
