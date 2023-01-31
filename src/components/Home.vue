<template>
     <section class="section-home" id="home">
        <div class="content container grid">
          <div class="image">
            <img src="../assets/images/capa2.jpeg" alt="">
          </div>
         <div class="text">
           <h2 class="title">Arte de projetar sonhos</h2>
           <p>Projetos personalizados para promover a qualidade de vida.</p>
           <a class="button" href="#">Entre em contato</a>
          </div>        
        </div>
      </section>
      <div class="divider-1"></div>
</template>

<script>
export default{
    name: 'TheHome'
}
</script>

<style scoped>
#home{
  overflow: hidden;
  margin-top: 2rem;
}

#home .container{
  margin: 0;
}

#home .image{
  position: relative; 
}

#home .image::before{
  content: '';
  height: 100%;
  width: 100%;
  background: var(--base-color-second);
  position: absolute;
  top: -16.8%;
  left: 16.8%;
  z-index: 0;
}

#home .image img{
  position: relative;
  right: 2.93rem;
}

#home .image img, 
#home .image::before{
  border-radius: 0.25rem;
}

#home .text{
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-align: center;
}

#home .text h1{
  margin-bottom: 1rem;
}

#home .text p{
  margin-bottom: 2rem;
  max-width: 100%;
}


@media (min-width: 481px) {

}

/* desktop */
@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  #home .container {
    grid-auto-flow: column;
    justify-content: space-between;
    margin: 0 auto;
  }

  #home .image{
    order: 1;
  }

  #home .text{

    max-width: 24rem;
    text-align: left;
  }
}
</style>
