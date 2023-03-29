<template>
    <div class="box-project">
  
      <a href="/">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <a href="/ZoomApHt">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img class="teste" src="https://i.imgur.com/XwtOhUK.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/tlSE4PU.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/XzM2sK8.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/bJDIh7O.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/BtQQWe9.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/6bezEi7.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/W21z0D0.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/pmgK6p3.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/xC5InbJ.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/p4DB8SZ.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/320Rvoi.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/LOBZsfj.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/jq4qljV.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/SQ4ITfN.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/f4oiDtu.jpg" alt="">
              </swiper-slide>
            </swiper>
          </a>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">APARTAMENTO HT.BANANAL, SÃO PAULO</h1>
            <ul>
              <li><i class="fa-solid fa-people-group icon"></i>Arquitetos: <spam class="destaque">Izoldi Arquitetura</spam> </li>
              <li><i class="fa-solid fa-user icon"></i>Desenhista: <spam class="destaque">Vittor Izoldi</spam> </li>
              <li><i class="fa-solid fa-chart-area icon"></i>Area: <spam class="destaque">23,65m²</spam> </li>
              <li><i class="fa-regular fa-calendar-days icon"></i>Ano: <spam class="destaque">2023</spam> </li>
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

  .teste {
    object-fit: contain;
    transform: rotate(90deg);
  }
 </style>
  