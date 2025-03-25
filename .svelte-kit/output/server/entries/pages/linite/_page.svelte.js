import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const Utilities = [
  {
    name: "Owncloud Client",
    icon: "owncloud.svg",
    program: "owncloud-client",
    category: "Utilities"
  },
  {
    name: "OpenJDK JRE",
    icon: "openjdk.svg",
    program: "jre-openjdk",
    category: "Utilities"
  },
  {
    name: "Alacritty",
    icon: "alacritty.svg",
    program: "alacritty",
    category: "Utilities"
  },
  {
    name: "Kitty",
    icon: "cat.svg",
    program: "kitty",
    category: "Utilities"
  },
  {
    name: "rattler-build",
    icon: "anaconda.svg",
    program: "rattler-build",
    category: "Utilities"
  },
  {
    name: "Bitwarden",
    icon: "bitwarden.svg",
    program: "bitwarden",
    category: "Utilities"
  },
  {
    name: "Deluge",
    icon: "deluge.svg",
    program: "deluge",
    category: "Utilities"
  },
  {
    name: "Electron",
    icon: "electron.svg",
    program: "electron",
    category: "Utilities"
  },
  {
    name: "FFmpeg",
    icon: "ffmpeg.svg",
    program: "ffmpeg",
    category: "Utilities"
  },
  {
    name: "Filezilla",
    icon: "filezilla.svg",
    program: "filezilla",
    category: "Utilities"
  },
  {
    name: "Flatpak",
    icon: "flatpak.svg",
    program: "flatpak",
    category: "Utilities"
  },
  {
    name: "Git + Lazygit",
    icon: "git.svg",
    program: "git lazygit",
    category: "Utilities"
  },
  {
    name: "Gitea",
    icon: "gitea.svg",
    program: "gitea",
    category: "Utilities"
  },
  {
    name: "GitLab",
    icon: "gitlab.svg",
    program: "gitlab",
    category: "Utilities"
  },
  {
    name: "Gnome Terminal",
    icon: "gnometerminal.svg",
    program: "gnome-terminal",
    category: "Utilities"
  },
  {
    name: "Hyprland",
    icon: "hyprland.svg",
    program: "hyprland",
    category: "Utilities"
  },
  {
    name: "I3",
    icon: "i3.svg",
    program: "i3-wm",
    category: "Utilities"
  },
  {
    name: "KDE Plasma",
    icon: "kdeplasma.svg",
    program: "plasma-meta",
    category: "Utilities"
  },
  {
    name: "Less",
    icon: "less.svg",
    program: "less",
    category: "Utilities"
  },
  {
    name: "Nextcloud",
    icon: "nextcloud.svg",
    program: "nextcloud",
    category: "Utilities"
  },
  {
    name: "Nix",
    icon: "nixos.svg",
    program: "nix",
    category: "Utilities"
  },
  {
    name: "Nvidia",
    icon: "nvidia.svg",
    program: "nvidia",
    category: "Utilities"
  },
  {
    name: "Nuget",
    icon: "nuget.svg",
    program: "nuget",
    category: "Utilities"
  },
  {
    name: "Proton VPN",
    icon: "protonvpn.svg",
    program: "proton-vpn-gtk-app",
    category: "Utilities"
  },
  {
    name: "QBittorrent",
    icon: "qbittorrent.svg",
    program: "qbittorrent",
    category: "Utilities"
  },
  {
    name: "QEMU",
    icon: "qemu.svg",
    program: "qemu-full",
    category: "Utilities"
  },
  {
    name: "RClone",
    icon: "rclone.svg",
    program: "rclone",
    category: "Utilities"
  },
  {
    name: "Subversion",
    icon: "subversion.svg",
    program: "subversion",
    category: "Utilities"
  },
  {
    name: "Syncthing",
    icon: "syncthing.svg",
    program: "syncthing",
    category: "Utilities"
  },
  {
    name: "Tmux",
    icon: "tmux.svg",
    program: "tmux",
    category: "Utilities"
  },
  {
    name: "Vulkan",
    icon: "vulkan.svg",
    program: "vulkan-tools",
    category: "Utilities"
  },
  {
    name: "Wayland",
    icon: "wayland.svg",
    program: "wayland",
    category: "Utilities"
  },
  {
    name: "Wezterm",
    icon: "wezterm.svg",
    program: "wezterm",
    category: "Utilities"
  },
  {
    name: "WireGuard",
    icon: "wireguard.svg",
    program: "wireguard-tools",
    category: "Utilities"
  },
  {
    name: "ZSH",
    icon: "zsh.svg",
    program: "zsh",
    category: "Utilities"
  }
];
const Editors = [
  {
    name: "Vim",
    icon: "vim.svg",
    program: "vim",
    category: "Editors"
  },
  {
    name: "Neovim",
    icon: "neovim.svg",
    program: "neovim",
    category: "Editors"
  },
  {
    name: "Eclipse",
    icon: "eclipseide.svg",
    program: "eclipse-java-bin",
    category: "Editors"
  },
  {
    name: "Visual Studio Code - OSS",
    icon: "visualstudiocode.svg",
    program: "code",
    category: "Editors"
  },
  {
    name: "Zed Editor",
    icon: "zedindustries.svg",
    program: "zed",
    category: "Editors"
  },
  {
    name: "QTCreator",
    icon: "qt.svg",
    program: "qtcreator",
    category: "Editors"
  },
  {
    name: "Emacs",
    icon: "gnuemacs.svg",
    program: "emacs",
    category: "Editors"
  },
  {
    name: "Helix",
    icon: "helix.svg",
    program: "helix",
    category: "Editors"
  },
  {
    name: "Jupyter",
    icon: "jupyter.svg",
    program: "jupyter-notebook",
    category: "Editors"
  },
  {
    name: "Lapce",
    icon: "lapce.svg",
    program: "lapce",
    category: "Editors"
  },
  {
    name: "Micro",
    icon: "microeditor.svg",
    program: "micro",
    category: "Editors"
  },
  {
    name: "Nano",
    icon: "nano.svg",
    program: "nano",
    category: "Editors"
  },
  {
    name: "Notepadqq (Notepad++-like editor)",
    icon: "notepadplusplus.svg",
    program: "notepadqq",
    category: "Editors"
  },
  {
    name: "Obsidian",
    icon: "obsidian.svg",
    program: "obsidian",
    category: "Editors"
  },
  {
    name: "Zettlr",
    icon: "zettlr.svg",
    program: "zettlr",
    category: "Editors"
  }
];
const Graphics = [
  {
    name: "Krita",
    icon: "krita.svg",
    program: "krita",
    category: "Graphics"
  },
  {
    name: "Aseprite",
    icon: "aseprite.svg",
    program: "aseprite",
    category: "Graphics"
  },
  {
    name: "Blender",
    icon: "blender.svg",
    program: "blender",
    category: "Graphics"
  },
  {
    name: "GIMP",
    icon: "gimp.svg",
    program: "gimp",
    category: "Graphics"
  },
  {
    name: "FreeCAD",
    icon: "freecad.svg",
    program: "freecad",
    category: "Graphics"
  },
  {
    name: "Inkscape",
    icon: "inkscape.svg",
    program: "inkscape",
    category: "Graphics"
  }
];
const Audio = [
  {
    name: "Ardour",
    icon: "ardour.svg",
    program: "ardour",
    category: "Audio"
  },
  {
    name: "Audacity",
    icon: "audacity.svg",
    program: "audacity",
    category: "Audio"
  },
  {
    name: "LMMS",
    icon: "lmms.svg",
    program: "lmms",
    category: "Audio"
  },
  {
    name: "Musescore",
    icon: "musescore.svg",
    program: "musescore",
    category: "Audio"
  }
];
const Office = [
  {
    name: "LibreOffice",
    icon: "libreoffice.svg",
    program: "libreoffice-fresh",
    category: "Office"
  }
];
const Media = [
  {
    name: "Kodi",
    icon: "kodi.svg",
    program: "kodi",
    category: "Media"
  },
  {
    name: "VLC",
    icon: "vlcmediaplayer.svg",
    program: "vlc",
    category: "Media"
  },
  {
    name: "KDEnlive",
    icon: "kdenlive.svg",
    program: "kdenlive",
    category: "Media"
  },
  {
    name: "MPV",
    icon: "mpv.svg",
    program: "mpv",
    category: "Media"
  },
  {
    name: "OBS",
    icon: "obsstudio.svg",
    program: "obs-studio",
    category: "Media"
  }
];
const Messaging = [
  {
    name: "Vesktop",
    icon: "vencord.svg",
    program: "vesktop-bin",
    category: "Messaging"
  },
  {
    name: "Discord",
    icon: "discord.svg",
    program: "discord",
    category: "Messaging"
  },
  {
    name: "Element",
    icon: "element.svg",
    program: "element-desktop",
    category: "Messaging"
  },
  {
    name: "Signal",
    icon: "signal.svg",
    program: "signal-desktop",
    category: "Messaging"
  },
  {
    name: "Telegram",
    icon: "telegram.svg",
    program: "telegram-desktop",
    category: "Messaging"
  },
  {
    name: "Thunderbird",
    icon: "thunderbird.svg",
    program: "thunderbird",
    category: "Messaging"
  }
];
const Gaming = [
  {
    name: "Lutris",
    icon: "lutris.svg",
    program: "lutris",
    category: "Gaming"
  },
  {
    name: "Steam",
    icon: "steam.svg",
    program: "steam",
    category: "Gaming"
  }
];
const Other = [
  {
    name: "Virtualbox",
    icon: "virtualbox.svg",
    program: "virtualbox",
    category: "Other"
  },
  {
    name: "Wine",
    icon: "wine.svg",
    program: "wine",
    category: "Other"
  }
];
const data = {
  Utilities,
  Editors,
  "Development Tools": [
    {
      name: "Python 3 Development",
      icon: "python.svg",
      program: "python3",
      category: "Developer Tools"
    },
    {
      name: "OpenJDK",
      icon: "openjdk.svg",
      program: "jdk-openjdk",
      category: "Developer Tools"
    },
    {
      name: "Gcc and g++",
      icon: "gnu.svg",
      program: "gcc",
      category: "Developer Tools"
    },
    {
      name: "Make",
      icon: "make.svg",
      program: "make",
      category: "Developer Tools"
    },
    {
      name: "Apache HTTP Server",
      icon: "apache.svg",
      program: "apache",
      category: "Developer Tools"
    },
    {
      name: "Clang",
      icon: "c.svg",
      program: "clang",
      category: "Developer Tools"
    },
    {
      name: "Caddy",
      icon: "caddy.svg",
      program: "caddy",
      category: "Developer Tools"
    },
    {
      name: "CMake",
      icon: "cmake.svg",
      program: "cmake",
      category: "Developer Tools"
    },
    {
      name: "Composer",
      icon: "composer.svg",
      program: "composer",
      category: "Developer Tools"
    },
    {
      name: "Dart",
      icon: "dart.svg",
      program: "dart",
      category: "Developer Tools"
    },
    {
      name: "Deno",
      icon: "deno.svg",
      program: "deno",
      category: "Developer Tools"
    },
    {
      name: "Django",
      icon: "django.svg",
      program: "python-django",
      category: "Developer Tools"
    },
    {
      name: "Docker + Docker Compose",
      icon: "docker.svg",
      program: "docker docker-compose",
      category: "Developer Tools"
    },
    {
      name: "Mono (open source .NET implementation)",
      icon: "dotnet.svg",
      program: "mono",
      category: "Developer Tools"
    },
    {
      name: "Elixir",
      icon: "elixir.svg",
      program: "elixir",
      category: "Developer Tools"
    },
    {
      name: "Erlang",
      icon: "erlang.svg",
      program: "erlang",
      category: "Developer Tools"
    },
    {
      name: "ESbuild",
      icon: "esbuild.svg",
      program: "esbuild",
      category: "Developer Tools"
    },
    {
      name: "ESlint",
      icon: "eslint.svg",
      program: "eslint",
      category: "Developer Tools"
    },
    {
      name: "Flask",
      icon: "flask.svg",
      program: "python-flask",
      category: "Developer Tools"
    },
    {
      name: "Godot",
      icon: "godotengine.svg",
      program: "godot",
      category: "Developer Tools"
    },
    {
      name: "Go",
      icon: "go.svg",
      program: "go",
      category: "Developer Tools"
    },
    {
      name: "Gradle",
      icon: "gradle.svg",
      program: "gradle",
      category: "Developer Tools"
    },
    {
      name: "Graphql client CLI",
      icon: "graphql.svg",
      program: "graphql-client-cli",
      category: "Developer Tools"
    },
    {
      name: "Graphite",
      icon: "graphite.svg",
      program: "graphite",
      category: "Developer Tools"
    },
    {
      name: "GTK (2, 3, and 4)",
      icon: "gtk.svg",
      program: "gtk2 gtk3 gtk4",
      category: "Developer Tools"
    },
    {
      name: "Haskell",
      icon: "haskell.svg",
      program: "ghc stack",
      category: "Developer Tools"
    },
    {
      name: "Hugo",
      icon: "hugo.svg",
      program: "hugo",
      category: "Developer Tools"
    },
    {
      name: "Kotlin",
      icon: "kotlin.svg",
      program: "kotlin",
      category: "Developer Tools"
    },
    {
      name: "LaTeX (texlive)",
      icon: "latex.svg",
      program: "texlive-latex",
      category: "Developer Tools"
    },
    {
      name: "LLVM",
      icon: "llvm.svg",
      program: "llvm",
      category: "Developer Tools"
    },
    {
      name: "Lua",
      icon: "lua.svg",
      program: "lua",
      category: "Developer Tools"
    },
    {
      name: "MariaDB",
      icon: "mariadb.svg",
      program: "mariadb",
      category: "Developer Tools"
    },
    {
      name: "MDbook",
      icon: "mdbook.svg",
      program: "mdbook",
      category: "Developer Tools"
    },
    {
      name: "Mercurial",
      icon: "mercurial.svg",
      program: "mercurial",
      category: "Developer Tools"
    },
    {
      name: "Mermaid",
      icon: "mermaid.svg",
      program: "mermaid-cli mdbook-mermaid",
      category: "Developer Tools"
    },
    {
      name: "Nginx",
      icon: "nginx.svg",
      program: "nginx",
      category: "Developer Tools"
    },
    {
      name: "NPM",
      icon: "npm.svg",
      program: "npm",
      category: "Developer Tools"
    },
    {
      name: "Octave",
      icon: "octave.svg",
      program: "octave",
      category: "Developer Tools"
    },
    {
      name: "Perl",
      icon: "perl.svg",
      program: "perl",
      category: "Developer Tools"
    },
    {
      name: "PHP",
      icon: "php.svg",
      program: "php",
      category: "Developer Tools"
    },
    {
      name: "PNPM",
      icon: "pnpm.svg",
      program: "pnpm",
      category: "Developer Tools"
    },
    {
      name: "Podman",
      icon: "podman.svg",
      program: "podman",
      category: "Developer Tools"
    },
    {
      name: "PostgreSQL",
      icon: "postgresql.svg",
      program: "postgresql",
      category: "Developer Tools"
    },
    {
      name: "R",
      icon: "r.svg",
      program: "r",
      category: "Developer Tools"
    },
    {
      name: "Rust (rustup)",
      icon: "rust.svg",
      program: "rustup",
      category: "Developer Tools"
    },
    {
      name: "SQLite",
      icon: "sqlite.svg",
      program: "sqlite",
      category: "Developer Tools"
    },
    {
      name: "Tauri",
      icon: "tauri.svg",
      program: "cargo-tauri",
      category: "Developer Tools"
    },
    {
      name: "Zig",
      icon: "zig.svg",
      program: "zig",
      category: "Developer Tools"
    }
  ],
  "Web Browsers": [
    {
      name: "Chromium",
      icon: "googlechrome.svg",
      program: "chromium",
      category: "Web Browsers"
    },
    {
      name: "Firefox",
      icon: "firefoxbrowser.svg",
      program: "firefox",
      category: "Web Browsers"
    },
    {
      name: "LibreWolf",
      icon: "librewolf.svg",
      program: "librewolf-bin",
      category: "Web Browsers"
    },
    {
      name: "TOR Browser",
      icon: "torbrowser.svg",
      program: "torbrowser-launcher",
      category: "Web Browsers"
    }
  ],
  Graphics,
  Audio,
  Office,
  Media,
  Messaging,
  Gaming,
  Other
};
const css = {
  code: "body{background:#1a1a1a !important;color:#e0e0e0 !important}.container.svelte-tfg8z2.svelte-tfg8z2{width:80%;margin:0 auto;padding:2rem}h1.svelte-tfg8z2.svelte-tfg8z2{color:#ff3e00;margin-bottom:2rem;text-align:center}.package-columns.svelte-tfg8z2.svelte-tfg8z2{display:flex;gap:1.5rem;margin-bottom:2rem;width:100%}.package-column.svelte-tfg8z2.svelte-tfg8z2{flex:1;display:flex;flex-direction:column;gap:1.5rem}.category.svelte-tfg8z2.svelte-tfg8z2{display:block;gap:0.5rem;border:1px solid #333;border-radius:6px;overflow:hidden;width:100%}.category-header.svelte-tfg8z2.svelte-tfg8z2{background:#252525;border-bottom:1px solid #333}.category-header.svelte-tfg8z2 .package-item.svelte-tfg8z2{padding:1rem}.category-name.svelte-tfg8z2.svelte-tfg8z2{font-size:1.1em;font-weight:600;color:#ff3e00}.category-items.svelte-tfg8z2.svelte-tfg8z2{display:flex;flex-direction:column;padding:0.5rem;gap:0.5rem}.package-item.svelte-tfg8z2.svelte-tfg8z2{display:grid;grid-template-columns:auto auto 2fr;gap:1rem;align-items:center;padding:0.75rem;background:#2a2a2a;border-radius:4px;cursor:pointer;transition:background-color 0.2s}.package-item.svelte-tfg8z2.svelte-tfg8z2:hover{background:#333}.package-name.svelte-tfg8z2.svelte-tfg8z2{font-family:var(--font-mono);font-weight:500;color:#ff3e00}.command-section.svelte-tfg8z2.svelte-tfg8z2{margin-top:2rem}.command-box.svelte-tfg8z2.svelte-tfg8z2{background:#000;padding:1rem;border-radius:4px;display:flex;justify-content:space-between;align-items:center;gap:1rem;border:1px solid #333}code.svelte-tfg8z2.svelte-tfg8z2{color:#00ff00;font-family:var(--font-mono);overflow-x:auto;white-space:wrap}.copy-button.svelte-tfg8z2.svelte-tfg8z2{background:#ff3e00;color:white;border:none;padding:0.5rem 1rem;border-radius:4px;cursor:pointer;transition:all 0.2s;white-space:nowrap;font-weight:bold}.copy-button.svelte-tfg8z2.svelte-tfg8z2:hover{background:#ff5722;transform:translateY(-1px)}input[type='checkbox'].svelte-tfg8z2.svelte-tfg8z2{width:1.2rem;height:1.2rem;cursor:pointer;accent-color:#ff3e00}.glow-icon.svelte-tfg8z2.svelte-tfg8z2{filter:drop-shadow(0 0 4px #00ff00)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t// @ts-nocheck\\n\\n\\timport { onMount } from 'svelte';\\n\\n\\timport data from '$lib/data/arch_restructured.json';\\n\\n\\tconst gallery = Object.values(\\n\\t\\timport.meta.glob('$lib/soft-icons/*.{svg}', { eager: true, as: 'url' })\\n\\t);\\n\\tlet archSelectedPackages = new Set();\\n\\tlet archCommand = '';\\n\\tlet archCopySuccess = false;\\n\\n\\tlet selectedPackages = new Set();\\n\\tlet command = '';\\n\\tlet copySuccess = false;\\n\\n\\t$: command = selectedPackages.size\\n\\t\\t? \`sudo pacman -S \${Array.from(selectedPackages).join(' ')}\`\\n\\t\\t: '';\\n\\n\\tasync function copyToClipboard() {\\n\\t\\ttry {\\n\\t\\t\\tawait navigator.clipboard.writeText(command);\\n\\t\\t\\tcopySuccess = true;\\n\\t\\t\\tsetTimeout(() => (copySuccess = false), 2000);\\n\\t\\t} catch (err) {\\n\\t\\t\\tconsole.error('Failed to copy:', err);\\n\\t\\t}\\n\\t}\\n\\n\\t/**\\n\\t * @param {any[]} packages\\n\\t */\\n\\tfunction toggleCategory(packages) {\\n\\t\\tconst packageNames = packages.map((pkg) => pkg.program);\\n\\t\\tconst allSelected = packageNames.every((program) => selectedPackages.has(program));\\n\\n\\t\\tif (allSelected) {\\n\\t\\t\\tpackageNames.forEach((program) => selectedPackages.delete(program));\\n\\t\\t} else {\\n\\t\\t\\tpackageNames.forEach((program) => selectedPackages.add(program));\\n\\t\\t}\\n\\t\\tselectedPackages = selectedPackages; // trigger reactivity\\n\\t}\\n\\tfunction togglePackage(packageName) {\\n\\t\\tif (selectedPackages.has(packageName)) {\\n\\t\\t\\tselectedPackages.delete(packageName);\\n\\t\\t} else {\\n\\t\\t\\tselectedPackages.add(packageName);\\n\\t\\t}\\n\\t\\tselectedPackages = selectedPackages; // trigger reactivity\\n\\t}\\n\\tfunction isCategorySelected(packages) {\\n\\t\\treturn packages.every((pkg) => selectedPackages.has(pkg.name));\\n\\t}\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Arch Linux Package Selector</title>\\n</svelte:head>\\n\\n<div class=\\"container\\">\\n\\t<h1>Arch Linux Package Selector</h1>\\n\\n\\t<div class=\\"package-columns\\">\\n\\t\\t<div class=\\"package-column\\">\\n\\t\\t\\t{#each Object.entries(data).slice(0, 2) as [category, pkgs]}\\n\\t\\t\\t\\t<div class=\\"category\\">\\n\\t\\t\\t\\t\\t<div class=\\"category-header\\">\\n\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tchecked={isCategorySelected(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => toggleCategory(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"category-name\\">{category}</span>\\n\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"category-items\\">\\n\\t\\t\\t\\t\\t\\t{#each pkgs as pkg}\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchecked={selectedPackages.has(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => togglePackage(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t/><img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"glow-icon\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"../public/{pkg.icon}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt={pkg.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\theight=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"package-name\\">{pkg.name}</span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"package-column\\">\\n\\t\\t\\t{#each Object.entries(data).slice(2, 3) as [category, pkgs]}\\n\\t\\t\\t\\t<div class=\\"category\\">\\n\\t\\t\\t\\t\\t<div class=\\"category-header\\">\\n\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tchecked={isCategorySelected(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => toggleCategory(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"category-name\\">{category}</span>\\n\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"category-items\\">\\n\\t\\t\\t\\t\\t\\t{#each pkgs as pkg}\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchecked={selectedPackages.has(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => togglePackage(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t/><img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"glow-icon\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"../public/{pkg.icon}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt={pkg.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\theight=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"package-name\\">{pkg.name}</span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"package-column\\">\\n\\t\\t\\t{#each Object.entries(data).slice(3, 8) as [category, pkgs]}\\n\\t\\t\\t\\t<div class=\\"category\\">\\n\\t\\t\\t\\t\\t<div class=\\"category-header\\">\\n\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tchecked={isCategorySelected(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => toggleCategory(pkgs)}\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\"category-name\\">{category}</span>\\n\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"category-items\\">\\n\\t\\t\\t\\t\\t\\t{#each pkgs as pkg}\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\"package-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"checkbox\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchecked={selectedPackages.has(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:change={() => togglePackage(pkg.program)}\\n\\t\\t\\t\\t\\t\\t\\t\\t/><img\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"glow-icon\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"../public/{pkg.icon}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\talt={pkg.name}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\theight=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\twidth=\\"32\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"package-name\\">{pkg.name}</span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t{#if command}\\n\\t\\t<div class=\\"command-section\\">\\n\\t\\t\\t<div class=\\"command-box\\">\\n\\t\\t\\t\\t<code>{command}</code>\\n\\t\\t\\t\\t<button class=\\"copy-button\\" on:click={copyToClipboard}>\\n\\t\\t\\t\\t\\t{copySuccess ? '✓ Copied!' : 'Copy'}\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t:global(body) {\\n\\t\\tbackground: #1a1a1a !important;\\n\\t\\tcolor: #e0e0e0 !important;\\n\\t}\\n\\n\\t.container {\\n\\t\\twidth: 80%;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 2rem;\\n\\t}\\n\\n\\th1 {\\n\\t\\tcolor: #ff3e00;\\n\\t\\tmargin-bottom: 2rem;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.package-columns {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 1.5rem;\\n\\t\\tmargin-bottom: 2rem;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.package-column {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tgap: 1.5rem;\\n\\t}\\n\\n\\t.category {\\n\\t\\tdisplay: block;\\n\\t\\tgap: 0.5rem;\\n\\t\\tborder: 1px solid #333;\\n\\t\\tborder-radius: 6px;\\n\\t\\toverflow: hidden;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.category-header {\\n\\t\\tbackground: #252525;\\n\\t\\tborder-bottom: 1px solid #333;\\n\\t}\\n\\n\\t.category-header .package-item {\\n\\t\\tpadding: 1rem;\\n\\t}\\n\\n\\t.category-name {\\n\\t\\tfont-size: 1.1em;\\n\\t\\tfont-weight: 600;\\n\\t\\tcolor: #ff3e00;\\n\\t}\\n\\n\\t.category-items {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 0.5rem;\\n\\t\\tgap: 0.5rem;\\n\\t}\\n\\n\\t.package-item {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: auto auto 2fr;\\n\\t\\tgap: 1rem;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0.75rem;\\n\\t\\tbackground: #2a2a2a;\\n\\t\\tborder-radius: 4px;\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: background-color 0.2s;\\n\\t}\\n\\n\\t.package-item:hover {\\n\\t\\tbackground: #333;\\n\\t}\\n\\n\\t.package-name {\\n\\t\\tfont-family: var(--font-mono);\\n\\t\\tfont-weight: 500;\\n\\t\\tcolor: #ff3e00;\\n\\t}\\n\\n\\t.package-description {\\n\\t\\tcolor: #aaa;\\n\\t\\tfont-size: 0.9em;\\n\\t}\\n\\n\\t.command-section {\\n\\t\\tmargin-top: 2rem;\\n\\t}\\n\\n\\t.command-box {\\n\\t\\tbackground: #000;\\n\\t\\tpadding: 1rem;\\n\\t\\tborder-radius: 4px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tgap: 1rem;\\n\\t\\tborder: 1px solid #333;\\n\\t}\\n\\n\\tcode {\\n\\t\\tcolor: #00ff00;\\n\\t\\tfont-family: var(--font-mono);\\n\\t\\toverflow-x: auto;\\n\\t\\twhite-space: wrap;\\n\\t}\\n\\n\\t.copy-button {\\n\\t\\tbackground: #ff3e00;\\n\\t\\tcolor: white;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0.5rem 1rem;\\n\\t\\tborder-radius: 4px;\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: all 0.2s;\\n\\t\\twhite-space: nowrap;\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t.copy-button:hover {\\n\\t\\tbackground: #ff5722;\\n\\t\\ttransform: translateY(-1px);\\n\\t}\\n\\n\\tinput[type='checkbox'] {\\n\\t\\twidth: 1.2rem;\\n\\t\\theight: 1.2rem;\\n\\t\\tcursor: pointer;\\n\\t\\taccent-color: #ff3e00;\\n\\t}\\n\\n\\t.glow-icon {\\n\\t\\tfilter: drop-shadow(0 0 4px #00ff00);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Object.values(/* @__PURE__ */ Object.assign({}));
  let selectedPackages = /* @__PURE__ */ new Set();
  let command = "";
  function isCategorySelected(packages) {
    return packages.every((pkg) => selectedPackages.has(pkg.name));
  }
  $$result.css.add(css);
  command = selectedPackages.size ? `sudo pacman -S ${Array.from(selectedPackages).join(" ")}` : "";
  return `${$$result.head += `<!-- HEAD_svelte-13213bp_START -->${$$result.title = `<title>Arch Linux Package Selector</title>`, ""}<!-- HEAD_svelte-13213bp_END -->`, ""} <div class="container svelte-tfg8z2"><h1 class="svelte-tfg8z2" data-svelte-h="svelte-1pg5vbz">Arch Linux Package Selector</h1> <div class="package-columns svelte-tfg8z2"><div class="package-column svelte-tfg8z2">${each(Object.entries(data).slice(0, 2), ([category, pkgs]) => {
    return `<div class="category svelte-tfg8z2"><div class="category-header svelte-tfg8z2"><label class="package-item svelte-tfg8z2"><input type="checkbox" ${isCategorySelected(pkgs) ? "checked" : ""} class="svelte-tfg8z2"> <span class="category-name svelte-tfg8z2">${escape(category)}</span> </label></div> <div class="category-items svelte-tfg8z2">${each(pkgs, (pkg) => {
      return `<label class="package-item svelte-tfg8z2"><input type="checkbox" ${selectedPackages.has(pkg.program) ? "checked" : ""} class="svelte-tfg8z2"><img class="glow-icon svelte-tfg8z2" src="${"../public/" + escape(pkg.icon, true)}"${add_attribute("alt", pkg.name, 0)} height="32" width="32"> <span class="package-name svelte-tfg8z2">${escape(pkg.name)}</span> </label>`;
    })}</div> </div>`;
  })}</div> <div class="package-column svelte-tfg8z2">${each(Object.entries(data).slice(2, 3), ([category, pkgs]) => {
    return `<div class="category svelte-tfg8z2"><div class="category-header svelte-tfg8z2"><label class="package-item svelte-tfg8z2"><input type="checkbox" ${isCategorySelected(pkgs) ? "checked" : ""} class="svelte-tfg8z2"> <span class="category-name svelte-tfg8z2">${escape(category)}</span> </label></div> <div class="category-items svelte-tfg8z2">${each(pkgs, (pkg) => {
      return `<label class="package-item svelte-tfg8z2"><input type="checkbox" ${selectedPackages.has(pkg.program) ? "checked" : ""} class="svelte-tfg8z2"><img class="glow-icon svelte-tfg8z2" src="${"../public/" + escape(pkg.icon, true)}"${add_attribute("alt", pkg.name, 0)} height="32" width="32"> <span class="package-name svelte-tfg8z2">${escape(pkg.name)}</span> </label>`;
    })}</div> </div>`;
  })}</div> <div class="package-column svelte-tfg8z2">${each(Object.entries(data).slice(3, 8), ([category, pkgs]) => {
    return `<div class="category svelte-tfg8z2"><div class="category-header svelte-tfg8z2"><label class="package-item svelte-tfg8z2"><input type="checkbox" ${isCategorySelected(pkgs) ? "checked" : ""} class="svelte-tfg8z2"> <span class="category-name svelte-tfg8z2">${escape(category)}</span> </label></div> <div class="category-items svelte-tfg8z2">${each(pkgs, (pkg) => {
      return `<label class="package-item svelte-tfg8z2"><input type="checkbox" ${selectedPackages.has(pkg.program) ? "checked" : ""} class="svelte-tfg8z2"><img class="glow-icon svelte-tfg8z2" src="${"../public/" + escape(pkg.icon, true)}"${add_attribute("alt", pkg.name, 0)} height="32" width="32"> <span class="package-name svelte-tfg8z2">${escape(pkg.name)}</span> </label>`;
    })}</div> </div>`;
  })}</div></div> ${command ? `<div class="command-section svelte-tfg8z2"><div class="command-box svelte-tfg8z2"><code class="svelte-tfg8z2">${escape(command)}</code> <button class="copy-button svelte-tfg8z2">${escape("Copy")}</button></div></div>` : ``} </div>`;
});
export {
  Page as default
};
