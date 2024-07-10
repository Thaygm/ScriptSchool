<template>
    <div>
        <Navbar />
        <section id="news" class="container">
        <div class="text-center">
            <h1>Saiba o que tá acontecendo no mundo tech</h1>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="n in 6" :key="n">
                <div class="card-news">
                    <img src="https://via.placeholder.com/400x200" alt="">
                    <h6>Titulo da materia</h6>
                    <p> Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Numquam tempore autem beatae 
                    provident cum. Repellendus repellat voluptas, 
                    facere enim magni delectus, iste, reiciendis 
                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>

</script>
<style scoped>
h1 {
    color: var(--white-color);
    margin: 20px 0;
}

.card-news {
    background-color: var(--lightGray-color);
    color: var(--white-color);
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-news img {
    max-width: 100%;
    border-radius: 8px;
}

.card-news h6 {
    color: var(--purple-color);
    margin-top: 10px;
}

.card-news p {
    margin-top: 10px;
    text-align: justify;
}
</style>