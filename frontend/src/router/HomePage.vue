<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="home">
    <div class="card">
      <h1>Bine ai venit</h1>
      <p>Ai apăsat butonul de:</p>

      <button @click="count++">
        {{ count }} ori
      </button>
    </div>
  </div>
</template>

<style scoped>

.home {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/test.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.85);
  padding: 2rem 3rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 90%;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
}

button:hover {
  background-color: #369f6b;
}
</style>
