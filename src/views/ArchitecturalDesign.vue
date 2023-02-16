<template>
  <div class="container">
    <h1 class="title">Desenho Arquitetônico</h1>
    <button id="btn-back">
      <a id="btn-back" href="/">voltar</a>
    </button>
    <div class="content">

      <!-- Project Varanda -->
      <router-link to="/ProjectVaranda">
        <div class="card-project">
          <div class="img">
          </div>
        </div>
      </router-link>

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
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'ArchitecturalDesign',
  components: {
    Footer
  },
  data() {
    
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
}

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
  position: relative;
}

.card-project:before {
  content: 'Ver projeto';
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: white;
  padding-bottom: 2px;
  border-bottom: solid 1px;
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