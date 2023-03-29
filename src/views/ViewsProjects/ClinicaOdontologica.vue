<template>
    <div class="box-project">
  
      <a href="/architecturaldesign">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <a href="/ZoomClinicaOdonto">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img src="https://i.imgur.com/vnDPQNQ.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/cVIPXrw.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/iefqpgQ.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/3mEOuU4.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/h8wvGHw.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/GHfiCZw.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/Hp4Loi9.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/mmbE50k.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/rmrE4iR.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/BAhsB6c.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/N25WsBg.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/OWBN1le.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/CAyNGKw.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/vS2mXMY.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/GNm5fh0.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/683vqzO.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/XubH2tR.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/26rwXyM.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/d9M175G.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="https://i.imgur.com/AIQFe84.jpg" alt="">
              </swiper-slide>
            </swiper>
          </a>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">CLÍNICA ODONTOLÓGICA.BANANAL, SÃO PAULO</h1>
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
  