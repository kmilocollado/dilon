import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, r as renderComponent, d as addAttribute, m as maybeRenderHead, b as createAstro, f as renderScript, g as renderSlot } from './astro/server_RBOATzLn.mjs';
/* empty css                         */

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Facebook = createSvgComponent({"meta":{"src":"/_astro/facebook.DrmfpxAq.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\" />"});

const Instagram = createSvgComponent({"meta":{"src":"/_astro/instagram.Dqd3iRLi.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /><path d=\"M16.5 7.5v.01\" />"});

const Youtube = createSvgComponent({"meta":{"src":"/_astro/youtube.0ODpK0pQ.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z\" /><path d=\"M10 9l5 3l-5 3z\" />"});

const Whatsapp = createSvgComponent({"meta":{"src":"/_astro/whatsapp.C8jW7-Q5.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"},"children":"<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9\" /><path d=\"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1\" />"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="containerHamburgerButton fixed right-5 top-5 z-[100] hidden" data-astro-cid-5ql2mvdm> <button id="menuButton" aria-expanded="false" aria-controls="menuMobileContent" class="hamburgerButton group relative flex h-[20px] w-6 cursor-pointer flex-col items-center justify-between transition duration-300 hover:scale-110 lg:hidden" aria-label="Abrir menú de navegación" data-astro-cid-5ql2mvdm> <span class="ease h-[2px] w-6 transform bg-primary transition duration-300 group-[.open]:translate-y-2 group-[.open]:rotate-45" data-astro-cid-5ql2mvdm></span> <span class="ease h-[2px] w-6 transform bg-primary transition duration-300 group-[.open]:opacity-0" data-astro-cid-5ql2mvdm></span> <span class="ease h-[2px] w-6 transform bg-primary transition duration-300 group-[.open]:opacity-0" data-astro-cid-5ql2mvdm></span> <span class="ease h-[2px] w-6 transform bg-primary transition duration-300 group-[.open]:-translate-y-[0.6rem] group-[.open]:-rotate-45" data-astro-cid-5ql2mvdm></span> </button> </div> <header class="fixed top-0 w-full z-9" id="mainHeader" data-astro-cid-5ql2mvdm> <div id="overlay-menu" class="bg-theme-raisin-black/50 fixed inset-0 hidden h-[100vh] md:hidden" data-astro-cid-5ql2mvdm></div> <nav id="navContent" class="nav flex items-center justify-center px-8 py-2 text-3xl w-full text-primary font-heading transition-all duration-500" data-astro-cid-5ql2mvdm> <!-- Links Izquierdos --> <div class="left-links flex items-center transition-all duration-300 md:order-1" data-astro-cid-5ql2mvdm> <a class="text-primary font-heading hover:underline md:text-3xl text-2xl" href="/" data-astro-cid-5ql2mvdm>Portfolio</a> <a class="text-primary font-heading ml-4 md:ml-8 hover:underline md:text-3xl text-2xl" href="/projects" data-astro-cid-5ql2mvdm>Projects</a> </div> <!-- Logo Container --> <div class="logo-container transition-all duration-300 mx-4 md:mx-8 md:h-28 md:order-2" data-astro-cid-5ql2mvdm> <figure class="inline-block transition-all duration-300" data-astro-cid-5ql2mvdm> <img', ' alt="Dlion Photography Society Logo" class="md:w-28 md:h-28 w-20 h-20 object-contain default-logo" data-astro-cid-5ql2mvdm> <img', ' alt="Dlion Photography Society Logo Scroll" class="-ml-6 md:w-28 md:h-12 w-36 h-10 object-contain scroll-logo hidden" data-astro-cid-5ql2mvdm> </figure> </div> <!-- Links Derechos --> <div class="right-links flex items-center transition-all duration-300 md:order-3" data-astro-cid-5ql2mvdm> <a class="text-primary font-heading hover:underline md:text-3xl text-2xl" href="/about" data-astro-cid-5ql2mvdm>About</a> <a class="text-primary font-heading ml-4 md:ml-8 hover:underline md:text-3xl text-2xl" href="/contact" data-astro-cid-5ql2mvdm>Contact</a> </div> <div class="social-links mt-5" data-astro-cid-5ql2mvdm> <div class="container mx-auto text-center mt-2 flex justify-center gap-4" data-astro-cid-5ql2mvdm> <a href="https://facebook.com/dlionphotography" class="hover:scale-125 transition-transform" data-astro-cid-5ql2mvdm> ', ' </a> <a href="https://instagram.com/dlionphotography" class="hover:scale-125 transition-transform" data-astro-cid-5ql2mvdm> ', ' </a> <a href="https://twitter.com/dlionphotography" class="hover:scale-110 transition-transform" data-astro-cid-5ql2mvdm> ', ' </a> <a href="https://twitter.com/dlionphotography" class="hover:scale-110 transition-transform" data-astro-cid-5ql2mvdm> ', ` </a> </div> </div> </nav> </header>  <script>
    document.addEventListener('astro:page-load', () => {
        // Verificar que estamos en el navegador
        if (typeof window === 'undefined') return;
        
        const header = document.getElementById('mainHeader');
        const defaultLogo = header?.querySelector('.default-logo');
        const scrollLogo = header?.querySelector('.scroll-logo');
        const nav = header?.querySelector('nav');
        const logoContainer = header?.querySelector('.logo-container');
        const leftLinks = header?.querySelector('.left-links');
        const rightLinks = header?.querySelector('.right-links');
        const containerHamburgerButton = document.querySelector('.containerHamburgerButton')
        
        const updateHeader = () => {
            if (window.scrollY > 100) {
                // Cambiar logos
                defaultLogo?.classList.add('hidden');
                scrollLogo?.classList.remove('hidden');
                
                // Ajustar tamaños y espaciado
                nav?.classList.add('justify-between');
                nav?.classList.remove('justify-center');
                logoContainer?.classList.remove('md:h-28');
                logoContainer?.classList.add('md:h-12', 'h-10');
                logoContainer?.querySelector('figure')?.classList.add('md:w-30', 'md:h-12','h-full', 'w-full');
                logoContainer?.querySelector('figure')?.classList.remove('md:w-28', 'md:h-28','h-20', 'w-28');

                // Ajustar espaciado del contenedor del logo
                logoContainer?.classList.remove('mx-8');
                logoContainer?.classList.add('mx-0');
                
                // Reordenar elementos: logo a la izquierda, links a la derecha
                logoContainer?.classList.remove('md:order-2');
                logoContainer?.classList.add('md:order-1');
                leftLinks?.classList.remove('md:order-1');
                leftLinks?.classList.add('md:order-2');
                rightLinks?.classList.remove('md:order-3');
                rightLinks?.classList.add('md:order-3');
                
                // Animar los links
                leftLinks?.classList.add('transform-none');
                rightLinks?.classList.add('transform-none');

                if (window.matchMedia('(max-width: 768px)').matches) {
                    leftLinks?.classList.add('hidden');
                    rightLinks?.classList.add('hidden');
                    containerHamburgerButton?.classList.remove('hidden');
                } else {
                    // En escritorio, siempre mostrar los links
                    leftLinks?.classList.remove('hidden');
                    rightLinks?.classList.remove('hidden');
                    containerHamburgerButton?.classList.add('hidden');
                }

            } else {
                // Restaurar logos
                defaultLogo?.classList.remove('hidden');
                scrollLogo?.classList.add('hidden');
                
                // Restaurar tamaños y espaciado
                nav?.classList.remove('justify-between');
                nav?.classList.add('justify-center');
                logoContainer?.classList.remove('md:h-12', 'h-10');
                logoContainer?.classList.add('md:h-28');
                logoContainer?.querySelector('figure')?.classList.remove('md:w-30', 'md:h-12');
                logoContainer?.querySelector('figure')?.classList.add('w-20', 'md:w-28', 'h-20', 'md:h-28');
                
                // Restaurar espaciado del contenedor del logo
                logoContainer?.classList.remove('mx-0');
                logoContainer?.classList.add('mx-8');
                
                // Restaurar orden original
                logoContainer?.classList.remove('md:order-1');
                logoContainer?.classList.add('md:order-2');
                leftLinks?.classList.remove('md:order-2');
                leftLinks?.classList.add('md:order-1');
                rightLinks?.classList.remove('md:order-3');
                rightLinks?.classList.add('md:order-3');
                
                // Restaurar posición de los links
                leftLinks?.classList.remove('transform-none');
                rightLinks?.classList.remove('transform-none');

                if (window.matchMedia('(max-width: 768px)').matches) {
                    leftLinks?.classList.remove('hidden');
                    rightLinks?.classList.remove('hidden');
                    containerHamburgerButton?.classList.add('hidden');  
                } else {
                    // En escritorio, siempre mostrar los links
                    leftLinks?.classList.remove('hidden');
                    rightLinks?.classList.remove('hidden');
                    containerHamburgerButton?.classList.add('hidden');
                }
            }
        };

        window.addEventListener('scroll', () => {
            requestAnimationFrame(updateHeader);
        });

        // Ejecutar cuando cambia el tamaño de ventana
        window.addEventListener('resize', () => {
            requestAnimationFrame(updateHeader);
        });

        // Ejecutar una vez al cargar para establecer el estado inicial
        updateHeader();
    });
</script> <script type="module">
    document.addEventListener('astro:page-load', () => {
        // Verificar que estamos en el navegador
        if (typeof window === 'undefined') return;
        
        function toggleMenu(menuBtn, navContent, overlayMenu) {
            menuBtn?.classList.toggle('open')
            navContent?.classList.toggle('showing')
            overlayMenu?.classList.toggle('hidden')
        }

        const navContent = document.querySelector('#navContent')
        const menuButton = document.querySelector('#menuButton')
        const overlayMenu = document.querySelector('#overlay-menu')

        menuButton?.addEventListener('click', () => toggleMenu(menuButton, navContent, overlayMenu))
        overlayMenu?.addEventListener('click', () => toggleMenu(menuButton, navContent, overlayMenu))
    })
</script>`])), maybeRenderHead(), addAttribute(`${"/"}images/logo.webp`, "src"), addAttribute(`${"/"}images/logo-scroll.png`, "src"), renderComponent($$result, "Facebook", Facebook, { "data-astro-cid-5ql2mvdm": true }), renderComponent($$result, "Instagram", Instagram, { "data-astro-cid-5ql2mvdm": true }), renderComponent($$result, "Youtube", Youtube, { "data-astro-cid-5ql2mvdm": true }), renderComponent($$result, "Whatsapp", Whatsapp, { "data-astro-cid-5ql2mvdm": true }));
}, "/Users/kmilo/Work/dani/dilon/src/sections/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-black py-4"> <div class="container mx-auto text-center text-heading"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Dlion Photography Society. All rights reserved.</p> </div> <div class="social-links"> <div class="container mx-auto text-center mt-2 flex justify-center gap-4"> <a href="https://facebook.com/dlionphotography" class="hover:scale-125 transition-transform"> ${renderComponent($$result, "Facebook", Facebook, {})} </a> <a href="https://instagram.com/dlionphotography" class="hover:scale-125 transition-transform"> ${renderComponent($$result, "Instagram", Instagram, {})} </a> <a href="https://twitter.com/dlionphotography" class="hover:scale-110 transition-transform"> ${renderComponent($$result, "Youtube", Youtube, {})} </a> <a href="https://twitter.com/dlionphotography" class="hover:scale-110 transition-transform"> ${renderComponent($$result, "Whatsapp", Whatsapp, {})} </a> </div> </div> </footer>`;
}, "/Users/kmilo/Work/dani/dilon/src/sections/Footer.astro", void 0);

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/kmilo/Work/dani/dilon/node_modules/.pnpm/astro@5.15.4_@types+node@24.10.0_jiti@2.6.1_lightningcss@1.30.2_rollup@4.52.5_typescript@5.9.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kmilo/Work/dani/dilon/node_modules/.pnpm/astro@5.15.4_@types+node@24.10.0_jiti@2.6.1_lightningcss@1.30.2_rollup@4.52.5_typescript@5.9.3/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Dlion Photography Society</title><!-- Use the logo.webp in public/images as favicon --><link rel="icon" type="image/webp"${addAttribute(`${"/"}images/logo.webp`, "href")}><link rel="shortcut icon"${addAttribute(`${"/"}images/logo.webp`, "href")}><meta name="description" content="Your vision is our reality"><meta property="og:type" content="website"><meta property="og:url" content="https://dlionphotography.com/"><meta property="og:image" content="https://dlionphotography.com/"><meta property="og:title" content="Dlion Photography Society"><meta property="og:description" content="Your vision is our reality"><meta property="og:locale" content="en_US"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@dlionphotography"><meta name="twitter:creator" content="@kmilocollado"><meta name="twitter:title" content="Dlion Photography Society"><meta name="twitter:description" content="Your vision is our reality">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })} ${maybeRenderHead()}<body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body>`;
}, "/Users/kmilo/Work/dani/dilon/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
