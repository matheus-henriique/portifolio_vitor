<template>
     <section class="section" id="about">
        <div class="container grid">
          <picture class="image">
            <source media="(max-width:1200px)" srcset="../assets/images/foto-sobre-mobile.jpg">
            <img src="../assets/images/foto-sobre.jpg" alt="">
          </picture>
          <div class="text">
            <h2 class="title">Sobre mim</h2>
            <p>Vittor Izoldi nasceu em 20 de junho de 1998 no Rio de Janeiro. </p>
            <br>
            <p>Graduado em Arquitetura e Urbanismo pelo UNASP (Centro Universitário Adventista de São paulo) em 2020.</p>
            <br>
            <p>Iniciou sua atividade profissional ainda em 2020, estagiando no escritório de arquitetura: Maristela Correa, localizado em Engenheiro Coelho, São Paulo.</p>
            <br>
            <p>No período da pandemia da COVID 19 mudou-se para o interior de São Paulo e dedicou-se aos projetos autorais e trabalhos como freelancer para arquitetos e engenheiros.</p>
            <br>
            <p>Atualmente exerce a função de desenhista no escritório: Alexandre Cobra Arquitetura e Construção, localizado em Bananal-São Paulo. Onde auxilía no desenvolvimento de projetos, legalização e documentação de imóveis, elaboração de orçamentos, além da modelagem de maquetes eletrônicas (3D).</p>
            <br>
            <p>Possui conhecimento avançado em softwares para desenvolvimento e apresentação de projetos arquitetônicos, especificamente: Revit, AutoCad, Sketchup, Lumion, Photoshop , além do pacote Office.</p>

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