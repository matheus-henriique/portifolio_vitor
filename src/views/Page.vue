<template>
  <div class="home">
    <TheHeader/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    <a href="#home" class="back-to-top"><i class="fa-solid fa-arrow-up"></i></a>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PageView',
  components: {
    TheHeader,
    Home,
    About,
    Services,
    Contact,
    Footer
  }
}
</script>
