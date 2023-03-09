<template>
  <div class="container">
    <a id="btn-back" href="/">
      <i class="fa-solid fa-chevron-left"></i>
    </a>
    <h1 class="title">Maquete Eletrônica</h1>
    <button id="btn-back">
    </button>
    <div class="content">

      <router-link to="/CozinhaRsB">
        <div class="card-project">
          <div class="img">
            COZINHA RS.BANANAL,SÃO PAULO
          </div>
        </div>
      </router-link>
      
      <router-link to="/ApartamentoHt">
        <div class="card-project">
          <div class="img-apartamentoht">
          </div>
        </div>
      </router-link>
      
      <router-link to="/ResidenciaAgPatrimonio">
        <div class="card-project">
          <div class="img-residenciaAgPatrimonio">
          </div>
        </div>
      </router-link>

      <router-link to="/CentroMedico">
        <div class="card-project">
          <div class="img">
            CENTRO MÉDICO ALIANÇA. SÃO LUIS, MARANHÃO
          </div>
        </div>
      </router-link>
      
      <router-link to="/ChaleSerraBocaina">
        <div class="card-project">
          <div class="img-chale">
          </div>
        </div>
      </router-link>
      
      <router-link to="/ClinicaOdontologica">
        <div class="card-project">
          <div class="img-clinica">
          </div>
        </div>
      </router-link>
      
      <router-link to="/EscritorioContainer">
        <div class="card-project">
          <div class="img-container">
          </div>
        </div>
      </router-link>
      
      <router-link to="/HotelFc">
        <div class="card-project">
          <div class="img">
            HOTEL FC.BANANAL, SÃO PAULO
          </div>
        </div>
      </router-link>
      
      <router-link to="/EstudioMusculacao">
        <div class="card-project">
          <div class="img">
            ESTÚDIO DE MUSCULAÇÃO. BANANAL, SÃO PAULO
          </div>
        </div>
      </router-link>
      
      <router-link to="/ResidenciaNs">
        <div class="card-project">
          <div class="img-residencia-ns">
          </div>
        </div>
      </router-link>
      
      <router-link to="/ResidenciaEg">
        <div class="card-project">
          <div class="img-residencia-eg">
          </div>
        </div>
      </router-link>
      
      <router-link to="/SpaMedico">
        <div class="card-project">
          <div class="img">
            SPA MÉDICO EDUCATIVO.SERRA DA BOCAINA, SÃO PAULO
          </div>
        </div>
      </router-link>

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

/* Icons */
.fa-chevron-left {
  font-size: 18px;
  color: var(--base-color);
  margin-top: 1.5rem;
}

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
  margin-top: 1rem;
  margin-bottom: 0rem;
  color: var(--base-color);
}


.card-project {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;
  position: relative;
  -webkit-box-shadow: 9px 9px 25px -4px rgba(105,105,105,0.22);
  -moz-box-shadow: 9px 9px 25px -4px rgba(105,105,105,0.22);
  box-shadow: 9px 9px 25px -4px rgba(105,105,105,0.22);
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

.card-project:hover {
  scale:1.1;
}



@media (min-width: 481px) {
  .fa-chevron-left {
    font-size: 24px;
    margin-top: 2rem;
  }


  .title {
    text-align: center;
  }
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