import { c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_RBOATzLn.mjs';
import { $ as $$Layout } from '../chunks/Layout_ISyvxSgV.mjs';
import { c as client } from '../chunks/clients_FyQUIrzN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const BASE_URL = "/";
const images = [
  { name: "Image 1", alt: "Slide 1", src: `${BASE_URL}images/slider-home/image-1.webp` },
  { name: "Image 2", alt: "Slide 2", src: `${BASE_URL}images/slider-home/image-2.jpg` },
  { name: "Image 3", alt: "Slide 3", src: `${BASE_URL}images/slider-home/image-3.jpg` },
  { name: "Image 4", alt: "Slide 4", src: `${BASE_URL}images/slider-home/image-4.png` },
  { name: "Image 5", alt: "Slide 5", src: `${BASE_URL}images/slider-home/image-5.png` }
];

const getFeaturedImage = async () => {
  try {
    const response = await client.getContentList({
      contentType: "Featured Image"
    });
    return response || [];
  } catch (error) {
    console.error("❌ Error fetching featured images:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return [];
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$VerticalSlider = createComponent(async ($$result, $$props, $$slots) => {
  const featuredImage = await getFeaturedImage();
  return renderTemplate(_a || (_a = __template(["<!-- Se usa una secci\xF3n con altura multiplicada por el n\xFAmero de slides para permitir el scroll -->", '<section id="sliderSection" class="relative max-w-7xl mx-auto" data-astro-cid-bjldogzt> <!-- Versi\xF3n Desktop - Slider con thumbnails --> <div class="hidden md:flex flex-row h-full w-full gap-4 items-start top-28"', ' data-astro-cid-bjldogzt> <!-- Main Slider --> <div id="mainSlider" class="sticky top-32 h-screen w-[85%] overflow-hidden" data-astro-cid-bjldogzt> ', ' </div> <!-- Thumbnails --> <div id="thumbnails" class="custom-scrollbar sticky md:top-30 bottom-0 md:bottom-auto flex flex-row md:flex-col h-[auto] md:h-screen w-full md:w-[15%] gap-4 overflow-x-auto md:overflow-y-hidden overflow-y-hidden md:overflow-x-hidden p-2 ml-1" data-astro-cid-bjldogzt> ', ' </div> </div> <!-- Versi\xF3n Mobile/Tablet - Galer\xEDa vertical simple --> <div class="md:hidden flex flex-col gap-8 py-8 px-4 mt-24" data-astro-cid-bjldogzt> ', ` </div> </section>  <script type="module">
(function () {
    // Verificar que estamos en el navegador
    if (typeof window === 'undefined') return;

    function initSlider() {
        
        const sliderSection = document.getElementById('sliderSection');
        const mainSlider = document.getElementById('mainSlider');
        const thumbnails = document.getElementById('thumbnails');
        const slides = mainSlider?.querySelectorAll('[data-slide]');
        const thumbs = thumbnails?.querySelectorAll('[data-thumb]');
        
        if (!sliderSection || !slides || !thumbs || slides.length === 0) return;
        if (sliderSection.dataset.sliderInit === 'true') return; // Already initialized

        let activeIndex = 0;
        let isScrolling = false;

        function changeSlide(index) {
            if (!slides || !thumbs) return;

            // Actualizar slides
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('opacity-0', 'pointer-events-none');
                    slide.classList.add('opacity-100');
                } else {
                    slide.classList.add('opacity-0', 'pointer-events-none');
                    slide.classList.remove('opacity-100');
                }
            });

            // Actualizar thumbnails
            thumbs.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.remove('opacity-10');
                    thumb.classList.add('ring-2', 'ring-[color:var(--color-primary)]', 'opacity-100');
                } else {
                    thumb.classList.add('opacity-10');
                    thumb.classList.remove('ring-2', 'ring-[color:var(--color-primary)]', 'opacity-100');
                }
            });

            // Scroll del thumbnail activo a la vista
            if (thumbs[index]) thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            activeIndex = index;
        }

        // Event listeners para thumbnails
        if (thumbs) {
            thumbs.forEach((thumb) => {
                thumb.addEventListener('click', () => {
                    const index = Number(thumb.getAttribute('data-index'));
                    if (!isNaN(index)) changeSlide(index);
                });
            });
        }

        // Navegaci\xF3n basada en scroll relativa a la secci\xF3n completa
        if (sliderSection && slides) {
            window.addEventListener('scroll', () => {
                if (!isScrolling) {
                    window.requestAnimationFrame(() => {
                        const sectionTop = sliderSection.offsetTop;
                        const sectionHeight = sliderSection.offsetHeight;
                        const maxScroll = Math.max(sectionHeight - window.innerHeight, 1);
                        const scrollY = window.scrollY;
                        let scrollProgress = (scrollY - sectionTop) / maxScroll;
                        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

                        const slideIndex = Math.min(
                            Math.floor(scrollProgress * slides.length),
                            slides.length - 1
                        );
                        if (slideIndex !== activeIndex) {
                            changeSlide(slideIndex);
                        }
                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            });
        }

        // Mark as initialized
        sliderSection.dataset.sliderInit = 'true';
        changeSlide(0);
    }

    // Initialize on astro:page-load (client-side navigation)
    document.addEventListener('astro:page-load', () => {
        initSlider();
    });

    // Also initialize on first load
    initSlider();
})();
<\/script>`])), maybeRenderHead(), addAttribute(`height: ${images.length * 100}vh;`, "style"), featuredImage.map((content, index) => renderTemplate`<div${addAttribute(`absolute aspect-square md:aspect-auto justify-items-center inset-0 h-full w-full transition-opacity duration-500 ${index === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`, "class")} data-slide data-astro-cid-bjldogzt> <img${addAttribute(content.image.url, "src")} decoding="async"${addAttribute(content["name-image"], "alt")} class="object-cover animate-fade-in max-h-[calc(100vh-200px)] max-w-full w-[inherit]" data-astro-cid-bjldogzt> <span class="flex justify-center mt-3 text-primary text-xs animate-fade-in animate-delay-300" data-astro-cid-bjldogzt>${content["name-image"]}</span> </div>`), featuredImage.map((content, index) => renderTemplate`<div${addAttribute(`group h-20 md:h-30 aspect-square md:aspect-auto p-1 shrink-0 md:shrink cursor-pointer transition-all duration-300 ${index === 0 ? "ring-2 ring-[color:var(--color-primary)] opacity-100" : "opacity-30 hover:opacity-70"}`, "class")} data-thumb${addAttribute(index, "data-index")} data-astro-cid-bjldogzt> <img${addAttribute(content.image.url, "src")}${addAttribute(content["name-image"], "alt")} class="h-full w-full object-cover" data-astro-cid-bjldogzt> </div>`), featuredImage.map((content) => renderTemplate`<div class="w-full" data-astro-cid-bjldogzt> <img${addAttribute(content.image.url, "src")}${addAttribute(content["name-image"], "alt")} decoding="async" loading="lazy" class="w-full aspect-[4/3] object-cover animate-fade-in" data-astro-cid-bjldogzt> <span class="flex justify-center mt-3 text-primary text-xs" data-astro-cid-bjldogzt>${content["name-image"]}</span> </div>`));
}, "/Users/kmilo/Work/dani/dilon/src/components/VerticalSlider.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full"> ${renderComponent($$result, "VerticalSlider", $$VerticalSlider, {})} </section>`;
}, "/Users/kmilo/Work/dani/dilon/src/sections/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/Users/kmilo/Work/dani/dilon/src/pages/index.astro", void 0);

const $$file = "/Users/kmilo/Work/dani/dilon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
