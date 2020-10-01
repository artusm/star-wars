import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import {
  humanNumber,
  extractFromArray,
  extractFromObject,
  arrayToString,
} from "./utils/filters";

import PageCard from "./components/PageCard";
import PageLoader from "./components/PageLoader";
import Nullable from "./components/nullable";

import VueApollo from "vue-apollo";
import apolloClient from "./apollo";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.filter("humanNumber", humanNumber);
Vue.filter("extractFromArray", extractFromArray);
Vue.filter("extractFromObject", extractFromObject);
Vue.filter("arrayToString", arrayToString);

Vue.component("page-card", PageCard);
Vue.component("page-loader", PageLoader);
Vue.component("nullable", Nullable);

Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
