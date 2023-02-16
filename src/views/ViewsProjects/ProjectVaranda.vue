<template>
  <div>
    <img :src="currentImage" />
    <button @click="prevImage">Anterior</button>
    <button @click="nextImage">Próximo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '@/assets/images/capa-lanchonete.jpg',
        'imagem2.jpg',
        'imagem3.jpg',
        // adicione quantas imagens quiser aqui
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    prevImage() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
};
</script>
