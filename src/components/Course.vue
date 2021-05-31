<template>
  <div>
    <div class="container-fluid courses-offered-section">
      <div class="container">
        <div class="course-caption">
          <h2>Our best courses offered</h2>
          <p>
            We've got the best Digital Marketing Certification Course to Become
            an Internationally Certified Highly Paid and Sought-After Digital
            Marketer and position<br />
            yourself to actually make money, get a well-paid job and boost any
            business sales and awareness faster… Practical Training with
            Personalised Support.<br />
            Our Corporate Coaching Program We will give your team the skills,
            tools and support they need to develop, implement & optimize a
            winning high-growth strategy and plan that’s tailor-made for YOUR
            business to drive rapid profitable business growth online.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Oswald&family=Raleway&family=Roboto&display=swap");

.courses-offered-section {
  height: 40vh;
  background-color: #f1eeee;
}
.course-caption h2 {
  padding: 50px 0px 30px 0;
  text-align: center;
  font-weight: 600;
  font-family: "Raleway", sans-serif;

  text-transform: uppercase;
}
.course-caption p {
  padding: 20px 0px 30px 0;
  text-align: center;
  font-weight: 100;
  font-size: 18px;
  line-height: 2em;
  font-family: "Raleway", sans-serif;
}

@media only screen and (max-width: 900px) {
  .courses-offered-section {
    height: auto;
    background-color: #f1eeee;
  }
}
</style>