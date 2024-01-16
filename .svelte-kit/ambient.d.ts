
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
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
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const CARGO_HOME: string;
	export const CLINK_DIR: string;
	export const cmake_path: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const GODOT4_BIN: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE_ENV: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const POSH_INSTALLER: string;
	export const POSH_THEMES_PATH: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const RUSTUP_HOME: string;
	export const SESSIONNAME: string;
	export const STARSHIP_SESSION_KEY: string;
	export const STARSHIP_SHELL: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VIRTUAL_ENV_DISABLE_PROMPT: string;
	export const windir: string;
	export const WSLENV: string;
	export const WT_PROFILE_ID: string;
	export const WT_SESSION: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
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
		ALLUSERSPROFILE: string;
		APPDATA: string;
		CARGO_HOME: string;
		CLINK_DIR: string;
		cmake_path: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		GODOT4_BIN: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE_ENV: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OneDriveConsumer: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		POSH_INSTALLER: string;
		POSH_THEMES_PATH: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PSModulePath: string;
		PUBLIC: string;
		RUSTUP_HOME: string;
		SESSIONNAME: string;
		STARSHIP_SESSION_KEY: string;
		STARSHIP_SHELL: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VIRTUAL_ENV_DISABLE_PROMPT: string;
		windir: string;
		WSLENV: string;
		WT_PROFILE_ID: string;
		WT_SESSION: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
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
