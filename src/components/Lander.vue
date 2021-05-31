<template>
  <div>
    <div class="container-fluid lander-hero-section">
      <div class="hero container">
        <div class="row">
          <div class="col-md-6">
            <div class="flex-col hero-caption">
              <h3 class="h3-caption">
                get the best on Digital Marketing course
              </h3>
              <p class="p-caption">
                with over different Professional courses on the best careers &
                fields
              </p>
              <div class="gap-2">
                <button class="btn btn-outline-primary" type="button">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 image-section">
            <div class="image">
              <img
                class="hero-image"
                src="@/assets/image/gro-removebg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lander",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Oswald&family=Raleway&family=Roboto&display=swap");
.lander-hero-section {
  background-color: rgb(199, 228, 247);
  width: 100%;
  height: 45vh;
}
.hero-caption {
  padding-top: 45px;
}
.h3-caption {
  font-size: 40px;
  color: #2578e4;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  text-decoration: underline 7px #2578e4;
}
.p-caption {
  padding-top: 20px;
  color: #25528b;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "roboto", sans-serif;
}
.hero-image {
  width: 90%;
  height: 50vh;
}
.image-section {
  padding-top: 40px;
}
.image {
  padding-top: 20px;
  width: 90%;
  height: 80%;
  background-color: rgb(118, 185, 180);
  border-radius: 50% 50% 50% 10px;
}
@media only screen and (max-width: 900px) {
  .lander-hero-section {
    padding: 10px 0;
    background-color: rgb(188, 226, 252);
    height: auto;
  }
}
</style>