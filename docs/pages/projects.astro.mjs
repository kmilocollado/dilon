import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_RBOATzLn.mjs';
import { $ as $$Layout } from '../chunks/Layout_ISyvxSgV.mjs';
import { g as getProjectsImage } from '../chunks/projects-collection.api_C3nDNisu.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projectsImage = await getProjectsImage();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> <h1 class="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
Proyectos
</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"> ${projectsImage.map((content) => renderTemplate`<a${addAttribute(`/projects/${content.slug}`, "href")} class="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"> <div class="relative w-full h-64 overflow-hidden bg-gray-100"> ${content.project?.images && content.project.images.length > 0 ? renderTemplate`<img${addAttribute(content.project.images[0].url, "src")}${addAttribute(content.project.namecollection || "Project", "alt")} loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-gray-400"> <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div>`} </div> <div class="p-6"> <h2 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors"> ${content.project?.namecollection || "Sin t\xEDtulo"} </h2> <div class="flex items-center text-gray-500 text-sm"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${content.project?.images?.length || 0} imágenes</span> </div> </div> </a>`)} </div> </div> ` })}`;
}, "/Users/kmilo/Work/dani/dilon/src/pages/projects.astro", void 0);

const $$file = "/Users/kmilo/Work/dani/dilon/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
