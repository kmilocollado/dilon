import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_RBOATzLn.mjs';
import { $ as $$Layout } from '../chunks/Layout_D7pIEf18.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "/Users/kmilo/Work/dani/dilon/src/pages/about.astro", void 0);

const $$file = "/Users/kmilo/Work/dani/dilon/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
