<template>
  <div class="box-project">

   <div class="content">

    <a href="/architecturaldesign">
      <i class="fa-solid fa-arrow-left"></i>
    </a>

     <div class="silder-projects">
        <img src="../../assets/images/tests/1.jpg" alt="">
        <img src="../../assets/images/tests/1.jpg" alt="">
        <img src="../../assets/images/tests/1.jpg" alt="">
        <img src="../../assets/images/tests/1.jpg" alt="">
        <img src="../../assets/images/tests/1.jpg" alt="">
        <img src="../../assets/images/tests/1.jpg" alt="">
     </div>

     <div class="details">
      <div class="content-details">
        <h1 class="title-projects">Projeto Varanda</h1>
        <ul>
          <li class="sub-title">Escritório: <spam class="description">Izoldi Arquitetura</spam></li>
          <li class="sub-title">Desenhista: <spam class="description">Vitor Izoldi</spam></li>
          <li class="description">50 m²</li>
          <li class="description">Bananal-SP</li>
          <li class="description">2022</li>
        </ul>
      </div>

     </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'ProjectVaranda',
}
</script>

<style scoped>

.fa-arrow-left {
  font-size: 33px;
  color: var(--base-color);
  position: fixed;
}

.title-projects {
  font-size: 44px;
  font-family: var(--title-font);
  margin-bottom: 2rem;
}

.box-project {
  height: 100vh;
}

.box-project .content {
  display: flex;
  flex-direction: column-reverse;
  padding: 1.5rem;
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

.box-project .content .silder-projects {
  max-width: 640px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.box-project .content .silder-projects img {
  border-radius: 12px;
}


/* Hide scrollbar for Chrome, Safari and Opera */
.gallery-wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.gallery-wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}



/* Detail */


.box-project .content .details ul  {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}

.box-project .content .details ul .sub-title {
  font-size: 22px;
  font-weight: bold;
}

.box-project .content .details ul .description {
  color: rgb(99, 99, 99);
  font-size: 22px;
  font-weight: normal;
}

@media (min-width: 480px) {
  .box-project {
    height: 100vh;
    padding-top: 4rem;
  }
  .box-project .content {
    flex-direction: row;
    padding: 0;
  }
  .box-project .content .details .content-details  {
    position: fixed;
  }
}


</style>

