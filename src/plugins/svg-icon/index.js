import SvgIcon from "@/plugins/svg-icon/index.vue";

export default {
  install(Vue) {
    const requireAll = (requireContext) => {
      return requireContext.keys().map(requireContext);
    };
    const req = require.context("./icons", true, /\.svg$/);
    requireAll(req);
    Vue.component("svg-icon", SvgIcon);
  },
};
