<template>
    <div id="teste">
        <a href="/CentroMedico" class="back">voltar</a>
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <img src="../../assets/images/tests/1.jpg" alt="">
              </swiper-slide>
              <swiper-slide>1
                <img src="../../assets/images/tests/2.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/images/tests/3.jpg" alt="">
              </swiper-slide>
        </swiper>
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
        name: 'ZoomCentroMedico',
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
  .back {
    color: #ffff;
    margin: 1rem 0;
  }

    #teste{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: rgb(14, 14, 14);
    }

    .swiper {
        max-width: 1200px;
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background-color: rgb(14, 14, 14);

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (min-width: 480px) {

    /* swiper */
    .swiper {
      width: 100%;
      height: 95%;
      border-radius: 12px;
    }
  
    /* ***** Content ***** */
    .box-project .content {
      display: flex;
      flex-direction: column;
    }
  
    /* ***** details ***** */
    .box-project .content .details ul li {
      font-size: 18px;
      color: rgb(99, 99, 99);
    }
  }


  </style>
  