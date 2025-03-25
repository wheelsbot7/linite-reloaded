import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import * as path from "path";

export default defineConfig({
  plugins: [sveltekit(), enhancedImages()], server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        '/src/lib',
      ],
    },
  }, resolve: {
    alias: {
      "$lib": path.resolve(__dirname, "src/lib"),
    },
  },


});
