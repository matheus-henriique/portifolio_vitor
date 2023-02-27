<template>
  <div class="box-project">

    <a href="/architecturaldesign">
      <i class="fa-solid fa-arrow-left"></i>
    </a>

    <div class="content">

      <div class="slider">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img src="../../assets/images/tests/1.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/images/tests/2.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/images/tests/3.jpg" alt="">
          </swiper-slide>
        </swiper>
      </div>

      <div class="details">
        <div class="content-details">
          <h1 class="title-projects">LANCHONETE•BANANAL, SÃO PAULO</h1>
          <ul>
            <li><i class="fa-solid fa-people-group icon"></i>Arquitetos: <spam class="destaque">Izoldi Arquitetura</spam> </li>
            <li><i class="fa-solid fa-user icon"></i>Desenhista: <spam class="destaque">Vitor Izoldi</spam> </li>
            <li><i class="fa-solid fa-chart-area icon"></i>Area: <spam class="destaque">50 m²</spam> </li>
            <li><i class="fa-regular fa-calendar-days icon"></i>Ano: <spam class="destaque">2022</spam> </li>
          </ul>
        </div>
      </div>

   </div>

  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  // import required modules
  import { Navigation } from 'swiper';

  export default {
  name: 'ProjectVaranda',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };


</script>

<style scoped>

/* ***** config ***** */
.title-projects {
  font-size: 26px;
  font-family: var(--title-font);
  color: var(--base-color);
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* ***** slider ***** */
.slider {
  max-width: 600px;
  width: 100%;
  margin-top: 2rem;
}

/* swiper */
.swiper {
  max-width: 600px;
  width: 100%;
  height: 400px;
  border-radius: 12px;
}

.swiper-slide {
  font-size: 18px;
  background: #a5a5a5;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* ***** icons ***** */
.fa-arrow-left {
  font-size: 28px;
  color: var(--base-color);
}

/* ***** Content ***** */
.box-project {
  height: 100vh;
  padding: 1rem;
}

.box-project .content {
  padding: 1.5rem;
  gap: 3rem;
  max-width: 1300px;
  width: 100%;
  margin: auto;
}

/* ***** Details ***** */
.box-project .content .details ul  {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.box-project .content .details ul li {
  font-size: 16px;
  color: rgb(99, 99, 99);
}

.box-project .content .details ul li .icon {
  font-size: 28px;
  color: var(--base-color);
  margin-right: 1rem;
}

.box-project .content .details ul li .icon {
  font-size: 20px;
  color: var(--base-color);
}

.box-project .content .details ul li .destaque {
  color: var(--base-color);
  font-weight: bold;
}



@media (min-width: 480px) {

  /* ***** slider ***** */
  .slider {
    margin-top: 0;
  }

  /* ***** Content ***** */
  .box-project .content {
    display: flex;
  }

  /* ***** details ***** */
  .box-project .content .details ul li {
    font-size: 18px;
    color: rgb(99, 99, 99);
  }
}


</style>

