<template>
    <div class="box-project">
  
      <a href="/ElectronicModel">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <img src="https://i.imgur.com/URcDnjP.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/q9hTJK3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/xCreQUg.jpg" alt="">
            </swiper-slide>

          </swiper>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">PATRIMÔNIO HISTÓRICO • BANANAL, SÃO PAULO</h1>
            <ul>
              <li><i class="fa-solid fa-people-group icon"></i>Levantamento: <spam class="destaque">Alexandre Cobra arquitetura e construção</spam> </li>
              <li><i class="fa-solid fa-user icon"></i>Desenhista: <spam class="destaque">Vittor Izoldi</spam> </li>
              <li><i class="fa-solid fa-chart-area icon"></i>Area: <spam class="destaque">--m²</spam> </li>
              <li><i class="fa-regular fa-calendar-days icon"></i>Ano: <spam class="destaque">1897</spam> </li>
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
    name: 'ResidenciaAgPatrimonio',
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
