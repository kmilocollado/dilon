import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_RBOATzLn.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ISyvxSgV.mjs';
import { g as getProjectsImage } from '../../chunks/projects-collection.api_C3nDNisu.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getProjectsImage();
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
}
const $$slug2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug2;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-hijkpgmz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="project-detail mt-24" data-astro-cid-hijkpgmz> <h1 data-astro-cid-hijkpgmz>${project.project.namecollection}</h1> <div class="images-gallery" data-astro-cid-hijkpgmz> ${project.project.images && project.project.images.length > 0 ? project.project.images.map((image) => renderTemplate`<div class="image-item" data-astro-cid-hijkpgmz> <img${addAttribute(image.url, "src")}${addAttribute(project.project.namecollection, "alt")} loading="lazy" data-astro-cid-hijkpgmz> </div>`) : renderTemplate`<p class="no-images" data-astro-cid-hijkpgmz>No hay imágenes disponibles para este proyecto.</p>`} </div> <a href="/projects" class="back-link" data-astro-cid-hijkpgmz>← Volver a proyectos</a> </div> ` })} `;
}, "/Users/kmilo/Work/dani/dilon/src/pages/projects/[slug] 2.astro", void 0);

const $$file = "/Users/kmilo/Work/dani/dilon/src/pages/projects/[slug] 2.astro";
const $$url = "/projects/[slug] 2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug2,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
