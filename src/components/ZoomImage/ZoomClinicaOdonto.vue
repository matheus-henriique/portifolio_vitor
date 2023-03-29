<template>
    <div id="teste">
        <a href="/ClinicaOdontologica" class="back">voltar</a>
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
        name: 'ZoomClinicaOdonto',
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
  