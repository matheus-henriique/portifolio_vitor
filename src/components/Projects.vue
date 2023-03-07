<template>
    <div v-for="projeto in projetos" :key="projeto.index">
        <h1>{{ projeto.title }}</h1>
        <img src="projeto.image">
    </div>
</template>

  <script>
  
    export default {
    name: 'TheProjects',
    data() {
        return {
            projetos: [
                {
                    title: 'Hotel'
                },
                {
                    title: 'Casa',
                    image: '../assets/images/imagesProjects/APARTAMENTO HT/Apartamento HT_Corte.jpg'
                }
            ]
        }
    }
    };
  
  
  </script>
  