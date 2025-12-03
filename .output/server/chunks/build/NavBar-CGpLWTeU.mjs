import { _ as __nuxt_component_0 } from './nuxt-link-BhJikEKr.mjs';
import { mergeProps, withCtx, createVNode, createBlock, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg sticky top-0 z-50" }, _attrs))}><div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-2 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition"${_scopeId}><svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"${_scopeId}></path></svg></div><span class="text-2xl font-bold text-white group-hover:text-blue-400 transition"${_scopeId}>ReviewHub</span>`);
      } else {
        return [
          createVNode("div", { class: "bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-2 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition" }, [
            (openBlock(), createBlock("svg", {
              class: "w-6 h-6 text-white",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              createVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" })
            ]))
          ]),
          createVNode("span", { class: "text-2xl font-bold text-white group-hover:text-blue-400 transition" }, "ReviewHub")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center gap-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-gray-300 hover:text-white font-medium transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Reviews`);
      } else {
        return [
          createTextVNode("Reviews")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#" class="text-gray-300 hover:text-white font-medium transition">About</a></div></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { NavBar as N };
//# sourceMappingURL=NavBar-CGpLWTeU.mjs.map
