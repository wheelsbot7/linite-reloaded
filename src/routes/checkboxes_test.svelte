<script>
  import { onMount } from "svelte";

  import data from "/data/arch_restructured.json";

  const packages = {
    "Development Tools": [
      { name: "base-devel", description: "Basic development tools" },
      {
        name: "git",
        description: "The fast distributed version control system",
      },
      {
        name: "visual-studio-code-bin",
        description: "Visual Studio Code (VS Code)",
      },
    ],
    "System Utilities": [
      { name: "yay", description: "Yet another yogurt - AUR helper" },
      { name: "htop", description: "Interactive process viewer" },
    ],
    "Terminal & Shell": [
      {
        name: "alacritty",
        description: "A cross-platform, GPU-accelerated terminal emulator",
      },
      {
        name: "zsh",
        description:
          "A very advanced and programmable command interpreter (shell)",
      },
      {
        name: "neovim",
        description: "Vim-fork focused on extensibility and usability",
      },
    ],
    Applications: [
      {
        name: "firefox",
        description: "Standalone web browser from mozilla.org",
      },
      {
        name: "docker",
        description:
          "Pack, ship and run any application as a lightweight container",
      },
    ],
  };

  let archSelectedPackages = new Set();
  let archCommand = "";
  let archCopySuccess = false;

  let selectedPackages = new Set();
  let command = "";
  let copySuccess = false;

  $: command = selectedPackages.size
    ? `sudo pacman -S ${Array.from(selectedPackages).join(" ")}`
    : "";

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(command);
      copySuccess = true;
      setTimeout(() => (copySuccess = false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  function toggleCategory(packages) {
    const packageNames = packages.map((pkg) => pkg.name);
    const allSelected = packageNames.every((name) =>
      selectedPackages.has(name),
    );

    if (allSelected) {
      packageNames.forEach((name) => selectedPackages.delete(name));
    } else {
      packageNames.forEach((name) => selectedPackages.add(name));
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

  <div class="package-list">
    {#each Object.entries(data) as [category, pkgs]}
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
                checked={selectedPackages.has(pkg.name)}
                on:change={() => togglePackage(pkg.name)}
              /><img
                class="glow-icon"
                src="/soft-icons/{pkg.icon}"
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

  {#if command}
    <div class="command-section">
      <div class="command-box">
        <code>{command}</code>
        <button class="copy-button" on:click={copyToClipboard}>
          {copySuccess ? "✓ Copied!" : "Copy"}
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
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    color: #ff3e00;
    margin-bottom: 2rem;
    text-align: center;
  }

  .package-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .category {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 1px solid #333;
    border-radius: 6px;
    overflow: hidden;
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
    grid-template-columns: auto 1fr 2fr;
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
    white-space: nowrap;
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

  input[type="checkbox"] {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    accent-color: #ff3e00;
  }
</style>
