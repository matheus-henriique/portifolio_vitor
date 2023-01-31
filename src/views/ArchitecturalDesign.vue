<template>
  <div class="container">
    <h1 class="title">Desenho Arquitetônico</h1>
    <button id="btn-back">
      <a id="btn-back" href="/">voltar</a>
    </button>
    <div class="content">

      <div class="card-project">
        <div class="img">
    
        </div>
      </div>

      <div class="card-project">
        <div class="img">

        </div>
      </div>

      <div class="card-project">
        <div class="img">

        </div>
      </div>

    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ArchitecturalDesign',
  data() {
    
  }
}
</script>

<style scoped>

.content {
  display: grid;
  gap: 2rem;
}

.content:hover :not(:hover) {
  opacity: 0.8;
}

.title {
  text-align: center;
  margin-top: 2rem;
}


.card-project {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;
}

.img {
  background-image: url("../assets/images/capa-lanchonete.jpg");
  height: 200px;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-project:hover {
  scale:1.1;
}



@media (min-width: 481px) {
  .content{
    grid-template-columns: 1fr 1fr;
  }
}


@media (min-width: 1200px) {
  .content{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>