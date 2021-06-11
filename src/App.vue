<template>
  <div id="app">
    <div>
      <header>
        <Header />
      </header>
      <main class="bg-light">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
