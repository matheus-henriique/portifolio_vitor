<template>
    <div id="teste">
        <a href="/ApartamentoHt" class="back">voltar</a>
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
        name: 'ZoomApHt',
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
  