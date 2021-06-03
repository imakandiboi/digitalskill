<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container-fluid nav-container">
        <router-link :to="{ name: 'index' }">
          <a class="navbar-brand" href="#">
            <img
              src="@/assets/image/nav-image.png"
              width="200"
              height="48"
              alt=""
            />
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav d-flex justify-content-center">
            <router-link :to="{ path: '/About' }">
              <a class="nav-link" href="#">About us</a>
            </router-link>
            <a class="nav-link" href="#">Courses</a>
            <a class="nav-link" href="#">Pricing</a>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2600 131.1"
        preserveAspectRatio="none"
        class="top-svg"
      >
        <path
          class="elementor-shape-fill"
          d="M0 0L2600 0 2600 69.1 0 0z"
        ></path>
        <path
          class="elementor-shape-fill"
          style="opacity: 0.5"
          d="M0 0L2600 0 2600 69.1 0 69.1z"
        ></path>
        <path
          class="elementor-shape-fill"
          style="opacity: 0.25"
          d="M2600 0L0 0 0 130.1 2600 69.1z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav-container {
  padding: 10px 60px;
  position: sticky !important;
}
.navbar-nav {
  justify-content: center;
  position: sticky !important;

  padding: 0px 20px;
  gap: 1rem;
}
.nav-link {
  color: #2578e4 !important;
  font-weight: 600;
  font-size: 15px;
}
.top-svg {
  display: block;
  width: 100%;
  position: relative;
  height: 15px;
}

@media only screen and (max-width: 900px) {
  .nav-container {
    padding: 20px 10px;
    justify-content: space-around;
  }
}
</style>