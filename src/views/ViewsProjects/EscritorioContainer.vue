<template>
    <div class="box-project">
  
      <a href="/ElectronicModel">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <img src="https://i.imgur.com/pD2o9kS.jpg" alt="">
            </swiper-slide>
            <swiper-slide>1
              <img src="https://i.imgur.com/Csn4SjN.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/zpN0qvw.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/CSnFArO.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/Hb0DXgY.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/P821qja.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/VTz5XjK.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/6ddtYiP.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/016u0fl.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/Wja1ReZ.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/uiqIKZz.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/92cnrVL.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/Wg3v1cX.jpg" alt="">
            </swiper-slide>
          </swiper>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">ESCRITÓRIO CONTAINER.BANANAL, SÃO PAULO</h1>
            <ul>
              <li><i class="fa-solid fa-people-group icon"></i>Arquitetos: <spam class="destaque">Alexandre Cobra arquitetura e construção</spam> </li>
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
  