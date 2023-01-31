<template>
    <section class="section" id="services">
        <div class="container grid">
          <header>
            <h2 class="title">Serviços</h2>
          </header>
          <div class="cards grid">

            <router-link to="/ElectronicModel" class="card">
                <i class="icon-1">
                  <img src="../assets/icons/icon-3D.png" alt="icon">
                </i>
                <h3 class="title">Maquete eletrônica</h3>
                <p>Simulação volumétrica de um projeto produzido virtualmente, utilizando modelagem tridimensional (3D).</p>
            </router-link>

            <router-link to="ArchitecturalDesign" class="card">
                <i class="icon-2">
                  <img src="../assets/icons/icon-desenho.png" alt="">
                </i>
                <h3 class="title">Desenho arquitetônico</h3>
                <p>Representação técnica de projeto.</p>
            </router-link>

            <router-link to="AuthorProjects" class="card">
                <i class="icon-3">
                  <img src="../assets/icons/icon-engenheiro.png" alt="">
                </i>
                <h3 class="title">Projetos autorais</h3>
                <p>Projetos personalizados e idealizados por <span>Vittor Izoldi</span></p>
            </router-link>

          </div>
        </div>
      </section>

      <div class="divider-1"></div>
</template>

<script>
export default {
    name: 'TheServices'
}
</script>

<style scoped>

#services header h2 {
  text-align: center;
}

.grid{
  gap: 1.5rem;
}

.card{
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid var(--base-color);
  border-radius: .25rem .25rem 0 0;
  text-align: center;
  cursor: pointer;
  transition: .3s;
}

.card:hover {
  transform: translateY(-20px);
}

.card i{
  display: block;
  font-size: 5rem;
  color: var(--base-color);
}

.card .icon-1,
.card .icon-2,
.card .icon-3{
  width: 7rem;
  margin: auto;
}

.card .title{
  font-size: 1.5rem;
  margin-bottom: .75rem;
}
.card p{
  color: grey;
}

@media (min-width: 1200px) {
  .cards{
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card{
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

</style>