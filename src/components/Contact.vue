<template>
   <section class="section" id="contact">
        <div class="container grid">


          <div class="text">
            <h2 class="title">Entre em contato!</h2>
            <p>Entre me contato para tirar sua dúvidas, ouvir suas críticas e sugestões.</p>
            <a href="#" class="button"><i class="icon-whatsapp"></i>Entrar em contato</a>
          </div>

          <div class="links">
            <ul class="grid">
              <li><i class="fa-solid fa-phone"></i> 12 99227-6186</li>
              <li><i class="fa-solid fa-location-dot"></i> São Paulo, Brasil</li>
              <li><i class="fa-solid fa-envelope"></i> vitorlopesizoldi@outlook.com</li>
            </ul>
          </div>

        </div>
      </section>

</template>

<script>
export default {
    name: 'TheContact'
}
</script>


<style scoped>
#contact .grid{
  gap: 4rem;
}

#contact .text p{
  margin-bottom: 2rem;
}

#contact .button i,
#contact ul li i{
  font-size: 1.5rem;
  margin-right: .625rem;
}

#contact ul.grid{
  gap: 2rem;
}

#contact ul li{
  display: flex;
  align-items: center;
}

#contact ul li i{
  color: var(--base-color);
}

@media (min-width: 1200px) {
  #contact .container{
    grid-auto-flow: column;
    align-items: center;
  }

  #contact .text{
    max-width: 25rem;
  }
}

</style>