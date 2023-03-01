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
