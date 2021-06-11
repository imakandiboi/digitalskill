<template>
  <div>
    <div>
      <AboutLander />
      <OurStory />
    </div>
  </div>
</template>

<script>
import AboutLander from "@/components/AboutLander";
import OurStory from "@/components/OurStory";
export default {
  components: {
    AboutLander,
    OurStory,
  },
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.loading = true;
  },
  // methods: {
  //   loading() {
  //     this.loading = false;
  //   },
  // },
  watch: {
    loading: function () {
      let as = this;
      setTimeout(function () {
        as.loading = !as.loading;
      }, 3000);
    },
  },
};
</script>

<style>
</style>