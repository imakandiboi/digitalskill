<template>
  <div>
    <div class="desktop">
      <Lander />
      <Course />
      <CourseCard />
    </div>

    <div class=""></div>
  </div>
</template>

<script>
import Lander from "@/components/Lander.vue";
import Course from "@/components/Course.vue";
import CourseCard from "@/components/CourseCard.vue";
export default {
  components: {
    Lander,
    Course,
    CourseCard,
  },
};
</script>

<style>
</style>