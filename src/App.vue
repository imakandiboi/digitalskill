<template>
  <div id="app">
    <div>
      <header>
        <Header />
      </header>
      <main class="bg-light">
        <router-view></router-view>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
