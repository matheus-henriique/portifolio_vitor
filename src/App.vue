<template>
 <a href="#home" class="back-to-top"><i class="fa-solid fa-arrow-up"></i></a>  
 <router-view/>
</template>

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

.title{
  font: 700 var(--title-font-size) var(--title-font);
  color: var(--title-color);
  margin-bottom: 2rem;
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
  padding: calc(1rem + var(--header-height)) 0;
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




@media (min-width: 481px) {
  .container{
    margin-left: 4rem;
    margin-right: 4rem;
  }

}

@media (min-width: 1200px) {
  :root{
    --title-font-size: 2.25rem;
    --subtitle-font-size: 1.125rem;
  }

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
