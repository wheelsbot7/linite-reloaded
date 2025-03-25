
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const npm_command: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_BACKEND: string;
	export const CLUTTER_BACKEND: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const NODE: string;
	export const FILEMANAGER: string;
	export const npm_package_scripts_check_watch: string;
	export const GRADLE_HOME: string;
	export const LIBVA_DRIVER_NAME: string;
	export const DESKTOP_SESSION: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const KITTY_PID: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_prettier: string;
	export const KITTY_PUBLIC_KEY: string;
	export const npm_package_packageManager: string;
	export const TERMINAL: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_devDependencies__sveltejs_enhanced_img: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_format: string;
	export const QT_QPA_PLATFORM: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const NVD_BACKEND: string;
	export const DEFAULT_MONITOR: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const CUDA_PATH: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const PAGER: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const NVCC_CCBIN: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_scripts_dev: string;
	export const HYPRCURSOR_THEME: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const npm_package_scripts_check: string;
	export const GDK_BACKEND: string;
	export const PATH: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const GDK_SCALE: string;
	export const npm_config_node_gyp: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const HG: string;
	export const npm_package_engines_pnpm: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const QT_SCALE_FACTOR: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const HYPRCURSOR_SIZE: string;
	export const npm_package_engines_node: string;
	export const NODE_ENV: string;
	export const VIPSHOME: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		npm_command: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		XDG_BACKEND: string;
		CLUTTER_BACKEND: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		NODE: string;
		FILEMANAGER: string;
		npm_package_scripts_check_watch: string;
		GRADLE_HOME: string;
		LIBVA_DRIVER_NAME: string;
		DESKTOP_SESSION: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		KITTY_PID: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_prettier: string;
		KITTY_PUBLIC_KEY: string;
		npm_package_packageManager: string;
		TERMINAL: string;
		MOTD_SHOWN: string;
		HOME: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		npm_package_devDependencies__sveltejs_enhanced_img: string;
		KITTY_WINDOW_ID: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		npm_package_scripts_format: string;
		QT_QPA_PLATFORM: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		NVD_BACKEND: string;
		DEFAULT_MONITOR: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		ZSH: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		CUDA_PATH: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		PAGER: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		NVCC_CCBIN: string;
		DEBUGINFOD_URLS: string;
		npm_package_scripts_dev: string;
		HYPRCURSOR_THEME: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		npm_package_scripts_check: string;
		GDK_BACKEND: string;
		PATH: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		GDK_SCALE: string;
		npm_config_node_gyp: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_package_devDependencies__sveltejs_kit: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		HG: string;
		npm_package_engines_pnpm: string;
		MAIL: string;
		npm_config_registry: string;
		QT_SCALE_FACTOR: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		OLDPWD: string;
		HYPRCURSOR_SIZE: string;
		npm_package_engines_node: string;
		NODE_ENV: string;
		VIPSHOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
