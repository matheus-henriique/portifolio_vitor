<template>
    <div class="box-project">
  
      <a href="/architecturaldesign">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <Projects/>
          <!-- <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <img src="../../assets/images/tests/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>1
              <img src="../../assets/images/tests/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/images/tests/3.jpg" alt="">
            </swiper-slide>
          </swiper> -->
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">CENTRO MÉDICO ALIANÇA. SÃO LUIS, MARANHÃO</h1>
            <ul>
              <li><i class="fa-solid fa-people-group icon"></i>Arquitetos: <spam class="destaque">Esley Roger</spam> </li>
              <li><i class="fa-solid fa-user icon"></i>Desenhista: <spam class="destaque">Vitor Izoldi</spam> </li>
              <li><i class="fa-solid fa-chart-area icon"></i>Area: <spam class="destaque">--m²</spam> </li>
              <li><i class="fa-regular fa-calendar-days icon"></i>Ano: <spam class="destaque">2022</spam> </li>
            </ul>
          </div>
        </div>
  
     </div>
  
    </div>
  </template>
  
  <script>
    // Import Swiper Vue.js components
    // import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    // import 'swiper/css';
  
    // import 'swiper/css/navigation';
  
    // import required modules
    // import { Navigation } from 'swiper';

    import Projects from '@/components/Projects.vue'
    export default {
    name: 'ProjectVaranda',
      components: {
        Projects
        // Swiper,
        // SwiperSlide,
      },
      setup() {
        return {
          // modules: [Navigation],
        };
      },
    };
  
  
  </script>
  