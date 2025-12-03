import { _ as __nuxt_component_0 } from "./nuxt-link-BhJikEKr.js";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { N as NavBar } from "./NavBar-CGpLWTeU.js";
import { u as useRoute } from "../server.mjs";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/ufo/dist/index.mjs";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/radix3/dist/index.mjs";
import "C:/Users/subha/OneDrive/Documents/Term 4/Web Dev 4/MTM6407-Headless CMS/frontend/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    const review = ref(null);
    const formattedDate = computed(() => {
      if (!review.value || !review.value.publishedAt) return "";
      return new Date(review.value.publishedAt).toLocaleDateString();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" }, _attrs))}>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<main class="max-w-4xl mx-auto px-4 py-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-8 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2"${_scopeId}>←</span> Back to reviews `);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, "←"),
              createTextVNode(" Back to reviews ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!review.value) {
        _push(`<div class="text-center py-20"><svg class="h-16 w-16 text-blue-400 mx-auto mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg><p class="text-gray-300 text-lg">Loading review...</p></div>`);
      } else {
        _push(`<article class="bg-white rounded-2xl shadow-2xl overflow-hidden"><div class="relative h-96 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400"><img${ssrRenderAttr("src", review.value.coverImage)}${ssrRenderAttr("alt", review.value.title)} class="w-full h-full object-cover"><div class="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg"><span class="text-4xl font-bold">${ssrInterpolate(review.value.rating)}</span><span class="text-2xl">/10</span></div></div><div class="p-8 md:p-12"><div class="mb-8"><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">${ssrInterpolate(review.value.title)}</h1><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b-2 border-gray-200"><div class="flex items-center gap-6"><div><p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Author</p><p class="text-lg font-bold text-gray-900">${ssrInterpolate(review.value.author)}</p></div><div><p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Published</p><p class="text-lg font-bold text-gray-900">${ssrInterpolate(formattedDate.value)}</p></div></div><div><span class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">${ssrInterpolate(review.value.category)}</span></div></div></div><div class="mb-8"><p class="text-lg text-gray-700 leading-relaxed font-medium italic">${ssrInterpolate(review.value.summary)}</p></div><div class="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8"><p>${ssrInterpolate(review.value.body)}</p></div><div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8"><p class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Overall Rating</p><div class="flex items-center gap-4"><div class="flex-1 bg-gray-300 rounded-full h-3 overflow-hidden"><div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500" style="${ssrRenderStyle({ width: `${review.value.rating / 10 * 100}%` })}"></div></div><span class="text-3xl font-bold text-blue-600">${ssrInterpolate(review.value.rating)}/10</span></div></div></div></article>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/review/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DMJlqleS.js.map
