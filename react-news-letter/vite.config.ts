import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import macrosPlugin from 'vite-plugin-babel-macros';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
})
