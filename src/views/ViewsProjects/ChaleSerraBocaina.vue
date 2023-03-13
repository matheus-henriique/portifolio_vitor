<template>
    <div class="box-project">
  
      <a href="/ElectronicModel">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <a href="/ZoomChale">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <img src="https://i.imgur.com/C6zG6jr.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/BEOA99C.jpg"><img src="https://i.imgur.com/BEOA99C.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/RPRpIL7.jpg"><img src="https://i.imgur.com/RPRpIL7.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/R2opmlj.jpg"><img src="https://i.imgur.com/R2opmlj.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/Xxu2XQU.jpg"><img src="https://i.imgur.com/Xxu2XQU.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/M2X0tTi.jpg"><img src="https://i.imgur.com/M2X0tTi.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/GwwSO5T.jpg"><img src="https://i.imgur.com/GwwSO5T.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/9kwpMeU.jpg"><img src="https://i.imgur.com/9kwpMeU.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/GAtbBQ0.jpg"><img src="https://i.imgur.com/GAtbBQ0.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/dflJjZ8.jpg"><img src="https://i.imgur.com/dflJjZ8.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/yB67Hux.jpg"><img src="https://i.imgur.com/yB67Hux.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/xQTl142.jpg"><img src="https://i.imgur.com/xQTl142.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/gZqA3as.jpg"><img src="https://i.imgur.com/gZqA3as.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/yiUuHNj.jpg"><img src="https://i.imgur.com/yiUuHNj.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/blug1g0.jpg"><img src="https://i.imgur.com/blug1g0.jpg" alt=""></a>
              </swiper-slide>
              <swiper-slide>
                <a href="https://i.imgur.com/XXov9PU.jpg"><img src="https://i.imgur.com/XXov9PU.jpg" alt=""></a>
              </swiper-slide>
            </swiper>
          </a>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">CHALÉ. SERRA DA BOCAINA,SÃO PAULO</h1>
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
