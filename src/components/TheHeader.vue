<template>
    <header id="header">
      <nav class="container">

          <div class="logo">
            <img src="../assets/logo.png" alt="">
          </div>

          <ul :class="[ { 'active': show } ]">
            <li @click="remove()" ><a href="#home">Início</a></li>
            <li @click="remove()" ><a href="#about">Sobre</a></li>
            <li @click="remove()" ><a href="#services">Serviços</a></li>
            <li @click="remove()" ><a href="#contact">Contato</a></li>
          </ul>

          <div class="icon-menu" @click="active()">
            <img src="../assets/icons/bars-solid.svg" alt="">
          </div>
          <div class="icon-close">
            <img src="../assets/icons/xmark-solid.svg" alt="">
          </div>

      </nav>
    </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      show: ''
    }
  },

  methods: {
    // activa nav da screen mobile
    active() {
      this.show = !this.show
    },

    // remove nav da screen mobile
    remove() {
      if(outerWidth < 481) {
        this.show = !this.show
      } else {
        console.log('maior')
      }
    }
  }
}
</script>

<style scoped>
/*================= HEADER ================================*/
#header{
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  padding: .2rem;

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-image: linear-gradient(to right, hsl(201, 36%, 30%) 30%, hsl(0, 0%, 100%));
}


/*================= NAVIGATION ================================*/
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem 0;
}

nav .logo {
  width: 15%;
}

nav ul {
  display: none;
}

nav ul li a {
  font-size: 34px;
  font-weight: bold;
  color: #0E2D3D;
}

nav .icon-menu,
nav .icon-close {
  width: 24px;
}

nav .icon-close {
  display: none;
}

/* MENU ACTIVE */
nav ul.active {
  background: var(--body-color);

  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;
  gap: 4rem;

  text-align: center;
}


nav ul i.active {
  display: block;
}



/* iPads and tablets */
@media (min-width: 481px) {

/*================= NAVIGATION ================================*/  
  nav .logo {
    width: 4rem;
  }

  nav ul li {
    display: flex;
    font-size: 1rem;
  }

  nav ul li a {
    font-size: 18px;
    font-weight: normal;
    position: relative;
  }

  nav ul li a::after{
    content: '';
    width: 0%;
    height: 2px;
    background-color: var(--base-color);

    position: absolute;
    left: 0;
    bottom: -1.8rem;
  
    transition: width 0.2s;
  }

  nav ul li a:hover::after {
    width: 100%;
  }

  nav ul {
    display: flex;
    gap: 2rem;
  }

  nav .icon-menu {
    display: none;
  }
}



/* desktop */
@media (min-width: 768px) {}

</style>
