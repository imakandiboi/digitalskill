<template>
  <div>
    <div class="line"></div>
    <div class="container-fluid our-story-section">
      <div class="container our-story">
        <h2>WHAT IS DIGITAL MARKETING SKILL INSTITUTE ALL ABOUT ?</h2>

        <p>
          We are an EdTech company that started from a Bedroom in the University
          that has grown to become a Global Business with over 115,384 people
          trained in over 37 countries and 4 continents and registered offices
          in the United States and Nigeria. All this was achieved without never
          raising a dime of venture capital money — 100% of our business is
          funded by our customers — which gives us the ability to focus on the
          customer success and think long term while building the industry’s
          highest-quality training and consulting products and deliver them with
          high standards. We believe in being the best. In a world where
          companies compete with pricing, we believe in competing with value as
          this is what makes us the best in the business and people will pay for
          value from the best.
        </p>
      </div>

      <div class="line"></div>
      <!--- Testimonies -->

      <div class="container testimonies">
        <h2>our outstanding testimonies</h2>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurStory",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Oswald&family=Raleway&family=Roboto&display=swap");

.our-story-section {
  height: 100vh;
  padding: 0px;
  background-color: #f1eeee;
}
.line {
  width: 100%;
  height: 5px;
  background-color: rgb(67, 161, 238);
}
.our-story h2 {
  padding: 50px 0px 30px 0;
  text-align: center;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
}
.our-story p {
  padding: 20px 0px 30px 0;
  text-align: center;
  font-weight: 100;
  font-size: 18px;
  line-height: 2em;
  font-family: "Raleway", sans-serif;
}

.testimonies h2 {
  padding: 50px 0px 30px 0;
  text-align: center;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
}

@media only screen and (max-width: 900px) {
  .our-story-section {
    height: auto;
    background-color: #f1eeee;
  }
}
</style>