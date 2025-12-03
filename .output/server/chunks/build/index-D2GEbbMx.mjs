import { _ as __nuxt_component_0 } from './nuxt-link-BhJikEKr.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { N as NavBar } from './NavBar-CGpLWTeU.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const query = ref("");
    const reviews = ref([]);
    const filtered = computed(() => {
      if (!query.value) return reviews.value;
      const q = query.value.toLowerCase();
      return reviews.value.filter((r) => {
        const titleMatch = (r.title || "").toLowerCase().includes(q);
        const summaryMatch = (r.summary || "").toLowerCase().includes(q);
        return titleMatch || summaryMatch;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" }, _attrs))}>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<section class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-4 md:py-20"><div class="max-w-5xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold text-white mb-3">Movie Reviews</h1><p class="text-blue-100 text-lg">Discover thoughtful critiques of cinema&#39;s finest</p></div></section><main class="max-w-5xl mx-auto px-4 py-12"><div class="mb-12"><div class="relative"><svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input${ssrRenderAttr("value", query.value)} placeholder="Search reviews by title or description..." class="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"></div></div>`);
      if (reviews.value.length === 0) {
        _push(`<div class="text-center py-20"><div class="inline-block"><svg class="h-16 w-16 text-blue-400 mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg><p class="text-gray-300 text-lg font-medium">Loading reviews...</p></div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"><!--[-->`);
        ssrRenderList(filtered.value, (r) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: r.slug,
            to: `/review/${r.slug}`,
            class: "group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative h-52 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400"${_scopeId}><img${ssrRenderAttr("src", r.coverImage)}${ssrRenderAttr("alt", r.title)} class="w-full h-full object-cover group-hover:scale-110 transition duration-300"${_scopeId}><div class="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg"${_scopeId}>${ssrInterpolate(r.rating)}/10 </div></div><div class="p-6"${_scopeId}><h2 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(r.title)}</h2><p class="text-gray-600 text-sm leading-relaxed line-clamp-3"${_scopeId}>${ssrInterpolate(r.summary)}</p><div class="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-blue-600 uppercase tracking-wider"${_scopeId}>${ssrInterpolate(r.category)}</span><span class="text-blue-600 font-bold text-sm group-hover:translate-x-1 transition"${_scopeId}>\u2192</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative h-52 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400" }, [
                    createVNode("img", {
                      src: r.coverImage,
                      alt: r.title,
                      class: "w-full h-full object-cover group-hover:scale-110 transition duration-300",
                      onError: (e) => e.target.src = "https://via.placeholder.com/400x300?text=No+Image"
                    }, null, 40, ["src", "alt", "onError"]),
                    createVNode("div", { class: "absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg" }, toDisplayString(r.rating) + "/10 ", 1)
                  ]),
                  createVNode("div", { class: "p-6" }, [
                    createVNode("h2", { class: "text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2 line-clamp-2" }, toDisplayString(r.title), 1),
                    createVNode("p", { class: "text-gray-600 text-sm leading-relaxed line-clamp-3" }, toDisplayString(r.summary), 1),
                    createVNode("div", { class: "mt-5 pt-5 border-t border-gray-200 flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs font-semibold text-blue-600 uppercase tracking-wider" }, toDisplayString(r.category), 1),
                      createVNode("span", { class: "text-blue-600 font-bold text-sm group-hover:translate-x-1 transition" }, "\u2192")
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (reviews.value.length > 0 && filtered.value.length === 0) {
        _push(`<div class="text-center py-20"><svg class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-gray-400 text-lg font-medium">No reviews match &quot;${ssrInterpolate(query.value)}&quot;. Try a different search.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (reviews.value.length > 0) {
        _push(`<div class="mt-10 text-center text-gray-400 text-sm"> Showing ${ssrInterpolate(filtered.value.length)} of ${ssrInterpolate(reviews.value.length)} reviews </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D2GEbbMx.mjs.map
