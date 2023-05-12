import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],
  // resolve를 통해 @/로 src를 루트 디렉토리하여 접근하기 위한 코드
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@atomic": resolve(__dirname, "./src/components"),
      "#root": resolve(__dirname),
    },
  },
});
