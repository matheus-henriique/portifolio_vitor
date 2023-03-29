<template>
 
 <router-view/>
</template>

<script>

export default {
    name: 'App',
    };
</script>

<style>
/*================= RESET ================================*/
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}


img{
  width: 100%;
  height: auto;
}

span{
  color: var(--base-color);
  font-weight: bold;
}

/*================= VARIABLES ================================*/
:root{
  --header-height: 4.5rem;

  /* colors */
  --hue: 201;
  /* HSL color mode */
  --base-color: hsl(var(--hue) 36% 30%);
  --base-color-second: hsl(var(--hue) 65% 30%);
  --base-color-alt: hsl(var(--hue) 57% 30%);
  --title-color: hsl(var(--hue) 41% 10%);
  --text-color: hsl(0 0% 46%);
  --text-color-light: hsl(0 0% 98%);
  --body-color: hsl(0 0% 98%);

  /* fonts */
  --title-font-size: 1.875rem;
  --subtitle-font-size: 1rem;

  --title-font: 'Poppins', sans-serif;
  --body-font: 'DM Sans', sans-serif;
}

/*================= BASE ================================*/
html{
  scroll-behavior: smooth;
}

body{
  font: 400 1rem var(--body-font);

  background: var(--body-color);
}

#btn-back {
  border: 0;
  background-color: transparent;
  margin-bottom: 2rem;
}

.title{
  font: 700 24px var(--title-font);
  color: var(--title-color);
  margin-bottom: 2rem;
}

p{
  font-size: 14px;
}

.button{
  background-color: var(--base-color);
  color: var(--text-color-light);
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 0.25rem;
  font: 500 1rem var(--body-font);
  transition:  background 0.3s;
} 

.button:hover{
  background: var(--base-color-alt);
}

.divider-1{
  height: 1px;
  background: linear-gradient(270deg, 
  hsla(var(--hue), 36%, 57%, 1),
  hsla(var(--hue), 65%, 88%, 0.34));
}

.divider-2{
  height: 1px;
  background: linear-gradient(270deg, 
  hsla(var(--hue), 65%, 88%, 0.34),
  hsla(var(--hue), 36%, 57%, 1));
}

/*================= LAYOUT ================================*/
.container{
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.grid{
  display: grid;
  gap: 2rem;
}

.section{
  padding: calc( var(--header-height)) 0;
}

.section-home{
  padding: calc(1rem + var(--header-height)) 0 4rem 0;
}

/* Back to top */
.back-to-top{
  background: hsl(201 36% 40%);
  color: var(--text-color-light);
  position: fixed;
  right: 2em;
  bottom: 4rem;
  padding: .5rem;
  clip-path: circle();
  font-size: 1.5rem;
  line-height: 0;

  /* visibility: hidden;
  opacity: 0; */

  transition: 0.3s;
  transform: translateY(100%);
}

.back-to-top.show{
  visibility: visible;
  opacity: 1;
  transform: translate(0);
}

main{
    margin-top: var(--header-height);
}

/* ########### COMPONENTS PROJETO ########### */

  /* ***** config ***** */
  .title-projects {
    font-size: 26px;
    font-family: var(--title-font);
    color: var(--base-color);
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  
  /* ***** slider ***** */
  .slider {
    max-width: 800px;
    width: 100%;
    margin-top: 2rem;
    margin: auto;
  }
  
  /* swiper */
  .swiper {
    max-width: 600px;
    width: 100%;
    height: 400px;
    border-radius: 12px;
  }
  
  .swiper-slide {
    font-size: 18px;
    background: #a5a5a5;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
  /* ***** icons ***** */
  .fa-arrow-left {
    font-size: 28px;
    color: var(--base-color);
  }
  
  /* ***** image of the capa ***** */
  .img {
    background-image: url("../src/assets/images/capa-lanchonete.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img-residenciaAgPatrimonio {
    background-image: url("https://i.imgur.com/URcDnjP.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img-lanchonete {
    background-image: url("https://i.imgur.com/NXDi3Oc.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img-clinica {
    background-image: url("https://i.imgur.com/vnDPQNQ.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img-chale {
    background-image: url("https://i.imgur.com/C6zG6jr.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img-apartamentoht {
    background-image: url("https://i.imgur.com/bJDIh7O.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img-container {
    background-image: url("https://i.imgur.com/pD2o9kS.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img-residencia-ns {
    background-image: url("https://i.imgur.com/mTPag65.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img-residencia-eg {
    background-image: url("https://i.imgur.com/8ym42oP.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .img-centro-medico {
    background-image: url("https://i.imgur.com/bJDIh7O.jpg");
    height: 200px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  /* ***** Content ***** */
  .box-project {
    height: 100vh;
    padding: 1rem;
  }
  
  .box-project .content {
    padding: 1.5rem;
    gap: 3rem;
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }
  
  /* ***** Details ***** */
  .box-project .content .details ul  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .box-project .content .details ul li {
    font-size: 16px;
    color: rgb(99, 99, 99);
  }
  
  .box-project .content .details ul li .icon {
    font-size: 28px;
    color: var(--base-color);
    margin-right: 1rem;
  }
  
  .box-project .content .details ul li .icon {
    font-size: 20px;
    color: var(--base-color);
  }
  
  .box-project .content .details ul li .destaque {
    color: var(--base-color);
    font-weight: bold;
  }
  
  
  
  @media (min-width: 480px) {
      /* ***** config ***** */
    .title-projects {
      margin-top: 0;
    }
  
    /* ***** slider ***** */
    .slider {
      margin-top: 0;
    }

    /* swiper */
    .swiper {
      max-width: 800px;
      width: 100%;
      height: 500px;
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


@media (min-width: 769px) {
  /*================= BASE ================================*/
  .title {
    font-size: 30px;
  }

  p {
    font-size: 16px;
  }

  .container{
    margin-left: 4rem;
    margin-right: 4rem;
  }

}

@media (min-width: 1200px) {

  .container{
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }

  .section{
    padding: 5rem 0rem;
  }

  .section-home{
    padding: 10rem 2rem 5rem 3rem;
  }

}
</style>
