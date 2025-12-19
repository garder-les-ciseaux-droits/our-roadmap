import { _ as __nuxt_component_0 } from './nuxt-link-Bs8Lyijz.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-full w-48 h-12 font-kaisei text-center" }, _attrs))} data-v-7ee36b95>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("shared/ui/BaseButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7ee36b95"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoadmapItemCard",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "roadmap-card" }, _attrs))}><span class="roadmap-date">${ssrInterpolate(props.item.date)}</span><span class="roadmap-title">${ssrInterpolate(props.item.title)}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "items-id", params: { id: __props.item.id } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.hasButton) {
              _push2(ssrRenderComponent(BaseButton, { class: "roadmap-button" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Подробнее `);
                  } else {
                    return [
                      createTextVNode(" Подробнее ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.hasButton ? (openBlock(), createBlock(BaseButton, {
                key: 0,
                class: "roadmap-button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Подробнее ")
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roadmap-item/ui/RoadmapItemCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roadmapItems = [
  {
    id: 1,
    title: "Наше знакомство",
    date: "12.11.2025",
    hasButton: true,
    messages: [
      {
        userId: 1,
        text: "У тебя вайб такой, будто ты сейчас спрыгнешь с Нотр Дам де пари"
      },
      {
        userId: 0,
        text: "так и есть"
      },
      {
        userId: 1,
        text: "раз так, то не забудь тогда и меня за собой потянуть)"
      },
      {
        userId: 0,
        text: "ты должен жить"
      }
    ]
  },
  {
    id: 2,
    title: "Признание",
    date: "08.12.2025",
    hasButton: true,
    messages: [
      {
        userId: 1,
        text: "Мне ты нравишься как девушка"
      },
      {
        userId: 1,
        text: "Именно в этом смысле , в каком ты думаешь"
      },
      {
        userId: 1,
        text: "Но это не значит, что я не считаю тебя своей подругой"
      },
      {
        userId: 1,
        text: "И хочу с тобой встречаться"
      },
      {
        userId: 0,
        text: "я тоже хочу"
      },
      {
        userId: 0,
        text: "очень"
      }
    ]
  },
  {
    id: 3,
    title: "Первое свидание",
    date: "Скоро",
    hasButton: false,
    messages: [{
      userId: 0,
      text: "hello"
    }]
  },
  {
    id: 4,
    title: "Проект Семья",
    date: "Скоро",
    hasButton: false,
    messages: [{
      userId: 0,
      text: "hello"
    }]
  }
];

export { BaseButton as B, _sfc_main as _, roadmapItems as r };
//# sourceMappingURL=index-vk3IOhm1.mjs.map
