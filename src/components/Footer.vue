<template>
    <footer class="section">
      <div class="container grid">

        <div class="brand">
          <a class="logo logo-alt" href="#home">
            <img src="../assets/logo.png" alt="">
          </a>
          <p>©2021 Izoldi.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div class="social">
          <a href="https://www.instagram.com/vittorizoldi/" target="_blanck">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blanck">
            <i class="fa-brands fa-facebook"></i>
        </a>
          <a href="https://youtube.com" target="_blanck">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>


<style scoped>

  footer {
    margin-top: 2rem;
    background-color: var(--base-color);
  }
  footer .logo{
    display: inline-block;
    width: 2.25rem;
    margin-bottom: 1.5rem;
  }

  footer .brand p{
    color: var(--text-color-light);
    margin-bottom: .75rem;
  }

  footer i{
    font-size: 1.5rem;
    color: var(--text-color-light);
  }

  footer .social a{
    margin-right: 2rem;
    transition: .3s;
    display: inline-block;
  }

  footer .social a:hover{
    transform: translateY(-10px);
  } 



@media (min-width: 1200px) {
  footer.section{
    padding: 3.75rem 0;
  }

  footer .container{
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  footer .logo {
    width: 4.25rem;
  }
}

</style>