export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.nx4sDe-1.js",app:"_app/immutable/entry/app.BSod5jit.js",imports:["_app/immutable/entry/start.nx4sDe-1.js","_app/immutable/chunks/BNP2RNV2.js","_app/immutable/chunks/BJx0h4yH.js","_app/immutable/entry/app.BSod5jit.js","_app/immutable/chunks/BJx0h4yH.js","_app/immutable/chunks/BVnhaMcU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/linite",
				pattern: /^\/linite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
