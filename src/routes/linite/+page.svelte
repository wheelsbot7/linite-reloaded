<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	import data from '$lib/data/arch_restructured.json';

	const gallery = Object.values(
		import.meta.glob('$lib/soft-icons/*.{svg}', { eager: true, as: 'url' })
	);
	let archSelectedPackages = new Set();
	let archCommand = '';
	let archCopySuccess = false;

	let selectedPackages = new Set();
	let command = '';
	let copySuccess = false;

	$: command = selectedPackages.size
		? `sudo pacman -S ${Array.from(selectedPackages).join(' ')}`
		: '';

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(command);
			copySuccess = true;
			setTimeout(() => (copySuccess = false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	/**
	 * @param {any[]} packages
	 */
	function toggleCategory(packages) {
		const packageNames = packages.map((pkg) => pkg.program);
		const allSelected = packageNames.every((program) => selectedPackages.has(program));

		if (allSelected) {
			packageNames.forEach((program) => selectedPackages.delete(program));
		} else {
			packageNames.forEach((program) => selectedPackages.add(program));
		}
		selectedPackages = selectedPackages; // trigger reactivity
	}
	function togglePackage(packageName) {
		if (selectedPackages.has(packageName)) {
			selectedPackages.delete(packageName);
		} else {
			selectedPackages.add(packageName);
		}
		selectedPackages = selectedPackages; // trigger reactivity
	}
	function isCategorySelected(packages) {
		return packages.every((pkg) => selectedPackages.has(pkg.name));
	}
</script>

<svelte:head>
	<title>Arch Linux Package Selector</title>
</svelte:head>

<div class="container">
	<h1>Arch Linux Package Selector</h1>

	<div class="package-columns">
		<div class="package-column">
			{#each Object.entries(data).slice(0, 2) as [category, pkgs]}
				<div class="category">
					<div class="category-header">
						<label class="package-item">
							<input
								type="checkbox"
								checked={isCategorySelected(pkgs)}
								on:change={() => toggleCategory(pkgs)}
							/>
							<span class="category-name">{category}</span>
						</label>
					</div>
					<div class="category-items">
						{#each pkgs as pkg}
							<label class="package-item">
								<input
									type="checkbox"
									checked={selectedPackages.has(pkg.program)}
									on:change={() => togglePackage(pkg.program)}
								/><img
									class="glow-icon"
									src="../public/{pkg.icon}"
									alt={pkg.name}
									height="32"
									width="32"
								/>
								<span class="package-name">{pkg.name}</span>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="package-column">
			{#each Object.entries(data).slice(2, 3) as [category, pkgs]}
				<div class="category">
					<div class="category-header">
						<label class="package-item">
							<input
								type="checkbox"
								checked={isCategorySelected(pkgs)}
								on:change={() => toggleCategory(pkgs)}
							/>
							<span class="category-name">{category}</span>
						</label>
					</div>
					<div class="category-items">
						{#each pkgs as pkg}
							<label class="package-item">
								<input
									type="checkbox"
									checked={selectedPackages.has(pkg.program)}
									on:change={() => togglePackage(pkg.program)}
								/><img
									class="glow-icon"
									src="../public/{pkg.icon}"
									alt={pkg.name}
									height="32"
									width="32"
								/>
								<span class="package-name">{pkg.name}</span>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="package-column">
			{#each Object.entries(data).slice(3, 8) as [category, pkgs]}
				<div class="category">
					<div class="category-header">
						<label class="package-item">
							<input
								type="checkbox"
								checked={isCategorySelected(pkgs)}
								on:change={() => toggleCategory(pkgs)}
							/>
							<span class="category-name">{category}</span>
						</label>
					</div>
					<div class="category-items">
						{#each pkgs as pkg}
							<label class="package-item">
								<input
									type="checkbox"
									checked={selectedPackages.has(pkg.program)}
									on:change={() => togglePackage(pkg.program)}
								/><img
									class="glow-icon"
									src="../public/{pkg.icon}"
									alt={pkg.name}
									height="32"
									width="32"
								/>
								<span class="package-name">{pkg.name}</span>
							</label>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	{#if command}
		<div class="command-section">
			<div class="command-box">
				<code>{command}</code>
				<button class="copy-button" on:click={copyToClipboard}>
					{copySuccess ? '✓ Copied!' : 'Copy'}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		background: #1a1a1a !important;
		color: #e0e0e0 !important;
	}

	.container {
		width: 80%;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		color: #ff3e00;
		margin-bottom: 2rem;
		text-align: center;
	}

	.package-columns {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2rem;
		width: 100%;
	}

	.package-column {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.category {
		display: block;
		gap: 0.5rem;
		border: 1px solid #333;
		border-radius: 6px;
		overflow: hidden;
		width: 100%;
	}

	.category-header {
		background: #252525;
		border-bottom: 1px solid #333;
	}

	.category-header .package-item {
		padding: 1rem;
	}

	.category-name {
		font-size: 1.1em;
		font-weight: 600;
		color: #ff3e00;
	}

	.category-items {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		gap: 0.5rem;
	}

	.package-item {
		display: grid;
		grid-template-columns: auto auto 2fr;
		gap: 1rem;
		align-items: center;
		padding: 0.75rem;
		background: #2a2a2a;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.package-item:hover {
		background: #333;
	}

	.package-name {
		font-family: var(--font-mono);
		font-weight: 500;
		color: #ff3e00;
	}

	.package-description {
		color: #aaa;
		font-size: 0.9em;
	}

	.command-section {
		margin-top: 2rem;
	}

	.command-box {
		background: #000;
		padding: 1rem;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border: 1px solid #333;
	}

	code {
		color: #00ff00;
		font-family: var(--font-mono);
		overflow-x: auto;
		white-space: wrap;
	}

	.copy-button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s;
		white-space: nowrap;
		font-weight: bold;
	}

	.copy-button:hover {
		background: #ff5722;
		transform: translateY(-1px);
	}

	input[type='checkbox'] {
		width: 1.2rem;
		height: 1.2rem;
		cursor: pointer;
		accent-color: #ff3e00;
	}

	.glow-icon {
		filter: drop-shadow(0 0 4px #00ff00);
	}
</style>
