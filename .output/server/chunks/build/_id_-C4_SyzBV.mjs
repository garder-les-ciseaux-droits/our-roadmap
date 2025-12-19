import { _ as __nuxt_component_0 } from './nuxt-link-Bs8Lyijz.mjs';
import { mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { r as roadmapItems } from './index-vk3IOhm1.mjs';
import { a as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    const item = roadmapItems.find((x) => x.id === Number(id));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-black" }, _attrs))}><main class="h-[100svh] flex"><div class="relative mx-auto w-full max-w-screen-md px-2 py-6 bg-[url(&#39;/assets/images/main-bg.png&#39;)] bg-center bg-cover flex flex-col justify-center items-center space-y-4"><h1 class="text-[#d0d0b7] font-bold text-lg tracking-[2px] mb-10 font-kaisei uppercase">${ssrInterpolate(unref(item).title)}</h1><!--[-->`);
      ssrRenderList(unref(item).messages, (message) => {
        _push(`<div class="${ssrRenderClass([message.userId === 0 ? "justify-start" : "justify-end", "w-full flex px-6"])}"><div class="min-w-36 max-w-64 h-16 px-4 text-black bg-white rounded-[1.5rem] flex flex-col justify-center items-start"><div class="text-xs leading-relaxed">${ssrInterpolate(message.text)}</div></div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "fixed bottom-12 text-[#121212] text-grenze tracking-[2px] uppercase bg-[#d0d0b7] text-sm w-36 h-10 rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex justify-center items-center w-full h-full"${_scopeId}> Назад </button>`);
          } else {
            return [
              createVNode("button", { class: "flex justify-center items-center w-full h-full" }, " Назад ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/items/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C4_SyzBV.mjs.map
