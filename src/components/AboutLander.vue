<template>
  <div>
    <div class="container-fluid about-lander-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="flex-col about-hero-caption">
              <h3 class="h3-caption">
                About us here in Digital marketing institute
              </h3>
              <p class="p-caption">
                Learn How To Make Money Online Using Our Proven 3-Step Digital
                Marketing System To Build The Business, The Career And The Life
                You Desire.
              </p>
              <p class="p-caption">
                Trusted by Over 115,384+ People Globally from Companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutLander",
};
</script>

<style scoped>
.about-lander-section {
  height: 40vh;
  width: 100%;
  background-color: #dff0fc;
}
.about-hero-caption {
  padding-top: 45px;
}
.h3-caption {
  font-size: 40px;
  color: #2578e4;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}
.p-caption {
  padding-top: 20px;
  color: #25528b;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "roboto", sans-serif;
}

@media only screen and (max-width: 900px) {
  .about-lander-section {
    padding: 10px 0;
    background-color: rgb(188, 226, 252);
    height: auto;
  }
  .h3-caption {
    font-size: 35px;
    color: #2578e4;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
  }
}
</style>