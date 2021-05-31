import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import vue-router
import router from "./router";
// GSAP import
import gsap from "gsap";
// GSAP other plugins:
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

import Embed from "v-video-embed";

// global register
Vue.use(Embed);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
