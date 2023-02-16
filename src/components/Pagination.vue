<template>
    <div class="pagination">
      <button v-if="currentPage > 1" @click="previousPage">Anterior</button>
      <span v-if="totalPages > 1">{{ currentPage }} / {{ totalPages }} sdfgsfgsdf</span>
      <button v-if="currentPage < totalPages" @click="nextPage">Próximo</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'thePagination',
    data() {
      return {
        currentPage: 1,
      };
    },
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
    },
    methods: {
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.$emit('page-change', this.currentPage);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.$emit('page-change', this.currentPage);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .pagination button,
  .pagination span {
    padding: 8px 16px;
    font-size: 14px;
    color: #333;
    border: none;
    background-color: transparent;
  }
  
  .pagination button:hover {
    cursor: pointer;
  }
  </style>
  
  