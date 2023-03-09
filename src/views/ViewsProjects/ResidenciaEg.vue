<template>
    <div class="box-project">
  
      <a href="/ElectronicModel">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <img src="https://i.imgur.com/8ym42oP.jpg" alt="">
            </swiper-slide>
            <swiper-slide>1
              <img src="https://i.imgur.com/IcSGdDL.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/9XTkVyi.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/Uc6wH6A.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/yOTFoYl.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/4YWawo7.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/mU2UFVY.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/THdUQld.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/ScSOOyS.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/bNhcd63.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/cjG4UV1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/VIauljm.jpg" alt="">
            </swiper-slide>
          </swiper>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">RESIDÊNCIA EG.BANANAL, SÃO PAULO</h1>
            <ul>
              <li><i class="fa-solid fa-people-group icon"></i>Arquitetos: <spam class="destaque">Alexandre Cobra arquitetura e construção</spam> </li>
              <li><i class="fa-solid fa-user icon"></i>Desenhista: <spam class="destaque">Vittor Izoldi</spam> </li>
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
  