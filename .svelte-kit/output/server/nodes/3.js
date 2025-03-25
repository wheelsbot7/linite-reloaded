import * as universal from '../entries/pages/linite/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/linite/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/linite/+page.js";
export const imports = ["_app/immutable/nodes/3.C1SFKjVq.js","_app/immutable/chunks/BJx0h4yH.js","_app/immutable/chunks/BVnhaMcU.js"];
export const stylesheets = ["_app/immutable/assets/3.CVHvtvJP.css"];
export const fonts = [];
