<template>
    <div class="box-project">
  
      <a href="/architecturaldesign">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
  
      <div class="content">
  
        <div class="slider">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <img src="https://data.terabox.com/thumbnail/f0c6cd97577f9c7df5c9089859aa8393?fid=4402235858823-250528-184444876842878&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Ln6bMlImt1xi2biJ6oHO3qLLOpU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=266015351235887711&dp-callid=0&time=1677787200&size=c1519_u858&quality=90&vuk=4402235858823&ft=image&autopolicy=1" alt="">
            </swiper-slide>
            <swiper-slide>
              
              <img src="https://data.terabox.com/thumbnail/abe0d25e3j7ab8648969c6e241a8e4e1?fid=4402235858823-250528-214091166929072&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-A3tLDCFGb%2b2uHfCtqJR%2fX2xYeWs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=265919025452006429&dp-callid=0&time=1677787200&size=c1519_u858&quality=90&vuk=4402235858823&ft=image&autopolicy=1" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="https://data.terabox.com/thumbnail/abe0d25e3j7ab8648969c6e241a8e4e1?fid=4402235858823-250528-214091166929072&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-A3tLDCFGb%2b2uHfCtqJR%2fX2xYeWs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=265919025452006429&dp-callid=0&time=1677787200&size=c1519_u858&quality=90&vuk=4402235858823&ft=image&autopolicy=1" alt="">
            </swiper-slide>
          </swiper>
        </div>
  
        <div class="details">
          <div class="content-details">
            <h1 class="title-projects">CLÍNICA ODONTOLÓGICA.BANANAL, SÃO PAULO</h1>
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
  