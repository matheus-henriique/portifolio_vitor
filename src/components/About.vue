<template>
     <section class="section" id="about">
        <div class="container grid">
          <picture class="image">
            <source media="(max-width:1200px)" srcset="../assets/images/perfil-vitor-teste.jpeg">
            <img src="../assets/images/perfil-vitor.jpeg" alt="">
          </picture>
          <div class="text">
            <h2 class="title">Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis expedita dolorem consectetur repellat reprehenderit et reiciendis, alias libero quisquam nihil. Quas ex commodi voluptatum dolor unde atque quasi, explicabo iusto!</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis expedita dolorem consectetur repellat reprehenderit et reiciendis, alias libero quisquam nihil. Quas ex commodi voluptatum dolor unde atque quasi, explicabo iusto!</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis expedita dolorem consectetur repellat reprehenderit et reiciendis, alias libero quisquam nihil. Quas ex commodi voluptatum dolor unde atque quasi, explicabo iusto!</p>
          </div>
        </div>
      </section>

      <div class="divider-2"></div>
</template>

<script>
export default {
    name: 'TheAbout'
}
</script>

<style scoped>
/*================= ABOUT ================================*/
#about{
  background-color: white;;
}

#about .container{
  margin: 0;
}

#about .image{
  position: relative; 
}

#about .image::before{
  content: '';
  height: 100%;
  width: 100%;
  background: var(--base-color-second);
  position: absolute;
  top: -8.3%;
  left: -33%;
  z-index: 0;
}

#about .image img{
  position: relative;
}

#about .image img, 
#about .image::before{
  border-radius: 0.25rem;
}

#about .text{
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}


@media (min-width: 1200px) {
  #about .container{
    margin: 0 auto;
    grid-auto-flow: column;
  }
}
</style>