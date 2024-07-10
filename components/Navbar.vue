<template>
    <header class="navbar navbar-expand-lg sticky-top p-4" id="navbar">
        <div class="container">
            <h1 class="navbar-brand m-0 section-title">ScriptSchool</h1>
            <button 
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu-navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="navbar-collapse collapse justify-content-end" id="menu-navigation">
                <ul class="nav nav-pills d-block d-md-flex">
                    <li class="nav-item fw-bold">
                        <a class="nav-link" href="/">
                            <i class="bi bi-house-door me-1"></i>
                            Home
                        </a>
                    </li>
                    <li class="nav-item fw-bold">
                        <a class="nav-link" href="/videos">
                            <i class="bi bi-camera-reels-fill me-1"></i>
                            Vídeos
                        </a>
                    </li>
                    <li class="nav-item fw-bold">
                        <a class="nav-link" href="/profile">
                            <i class="bi bi-person-circle me-1"></i>
                            Perfil
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>
body {
    font-family: Roboto, sans-serif;
}

.navbar {
    background: linear-gradient(45deg, var(--pink-color), var(--orange-color), var(--green-color), var(--purple-color), var(--blue-color));
}

#navbar .nav .nav-link,
.navbar-brand,
.nav-profile .nav-link.active:hover {
    color: var(--gray-color);
    font-size: 20px;
}

.navbar-toggler {
    background-color: #fff8e3;
}

.section-title {
    font-family: Source Code Pro, monospace;
    font-size: 28px;
    font-weight: 700;
    }
</style>