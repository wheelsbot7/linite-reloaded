import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CEsQF3IS.js","_app/immutable/chunks/BJx0h4yH.js","_app/immutable/chunks/BVnhaMcU.js"];
export const stylesheets = [];
export const fonts = [];
