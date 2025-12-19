import { mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { B as BaseButton, r as roadmapItems, _ as _sfc_main$1 } from './index-vk3IOhm1.mjs';
import './nuxt-link-Bs8Lyijz.mjs';
import '../nitro/nitro.mjs';
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
import 'vue-router';

const _imports_0 = "" + __buildAssetsURL("flowers.Cp3nJFtP.png");
const _imports_1 = "" + __buildAssetsURL("nav-pat.Bi4IcaOn.svg");
const _imports_2 = "" + __buildAssetsURL("kurumi.DcdwL3dG.gif");
const _imports_3 = "" + __buildAssetsURL("line.CKoylxXl.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col overflow-y-auto bg-black" }, _attrs))}><header class="h-[100svh] flex"><div class="relative mx-auto max-w-screen-md px-2 py-6 items-center flex bg-[url(&#39;/assets/images/head-bg.png&#39;)] bg-center bg-cover"><img class="w-full max-w-none absolute bottom-0 min-w-full left-1/2 -translate-x-1/2 pointer-events-none select-none" alt=""${ssrRenderAttr("src", _imports_0)}><nav class="absolute top-6 w-72 h-10 left-1/2 -translate-x-1/2 mx-auto rounded-full bg-white text-black text-md text-center flex items-center justify-center"><span class="font-grenze tracking-[3px]">journey begins here</span><img class="absolute mt-4 pointer-events-none min-w-full select-none" alt=""${ssrRenderAttr("src", _imports_1)}></nav><div class="flex flex-col w-full items-center justify-center"><span class="font-atkinson text-white mb-2">from Ivan with love &lt;3</span><h1 class="text-[2.5rem] flex font-semibold tracking-[25px] text-center font-kaisei text-[#d0d0b7]">Our love story</h1><a href="#begin">`);
      _push(ssrRenderComponent(BaseButton, {
        class: "mt-24 relative active:bg-[#2f2f2f] active:text-white",
        "aria-label": "Начать"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-36 absolute left-1/2 -translate-x-1/2 -top-24" alt=""${ssrRenderAttr("src", _imports_2)}${_scopeId}> Начать `);
          } else {
            return [
              createVNode("img", {
                class: "w-36 absolute left-1/2 -translate-x-1/2 -top-24",
                alt: "",
                src: _imports_2
              }),
              createTextVNode(" Начать ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></header><main class="h-[100svh] bg-[url(&#39;/assets/images/main-back2.png&#39;)] md:bg-auto bg-cover bg-center flex"><div class="relative mx-auto w-full max-w-screen-md py-6 flex justify-center items-center mt-4"><img class="absolute left-1/2 -translate-x-1/2 top-0 inset-y-0 h-full pointer-events-none select-none" alt=""${ssrRenderAttr("src", _imports_3)}><div id="begin" class="grid grid-cols-2 gap-y-4 h-auto place-items-center"><!--[-->`);
      ssrRenderList(unref(roadmapItems), (item, i) => {
        _push(`<!--[-->`);
        if (i % 2 === 1) {
          _push(`<div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          class: "font-kaisei uppercase h-40 w-52 text-[#ffffd5] flex flex-col items-center text-center space-y-6 justify-center",
          item
        }, null, _parent));
        if (i % 2 === 0) {
          _push(`<div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></main></div>`);
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
//# sourceMappingURL=index-ogI0V7Kf.mjs.map
