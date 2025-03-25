import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column" data-svelte-h="svelte-9ffmlu"><h1>About this app</h1> <p>This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. It was originally integrated into
		an <a href="https://astro.build">Astro</a> static site, but the level of interactivity necessary
		required a more isolated sandbox, so now it&#39;s here. Check it out at the tab up top. Or, if you want
		to know more, click the Svelte logo.</p></div>`;
});
export {
  Page as default
};
