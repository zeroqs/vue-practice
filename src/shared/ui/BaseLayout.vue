<script setup lang="ts"></script>

<template>
  <div>
    <header class="header">
      <slot name="header">
        <RouterLink to="/">home</RouterLink>
        <div>
          <ul class="nav">
            <RouterLink to="/todo">Todo App</RouterLink>
            <RouterLink to="/chat">Chat App</RouterLink>
          </ul>
        </div>
      </slot>
    </header>
    <main class="main">
      <slot name="content" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: normal;
  align-items: center;
}

.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.nav {
  display: flex;
  gap: 30px;
}
</style>
