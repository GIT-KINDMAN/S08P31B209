// vite.config.ts
import react from "file:///C:/Users/SSAFY/Desktop/%EC%9E%90%EC%9C%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/S08P31B209/front/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/SSAFY/Desktop/%EC%9E%90%EC%9C%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/S08P31B209/front/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\SSAFY\\Desktop\\\uC790\uC728\uD504\uB85C\uC81D\uD2B8\\S08P31B209\\front";
var vite_config_default = defineConfig({
  server: {
    host: true,
    port: 5173
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" }
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"]
      }
    })
  ],
  // resolve를 통해 @/로 src를 루트 디렉토리하여 접근하기 위한 코드
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src"),
      "@atomic": resolve(__vite_injected_original_dirname, "./src/components"),
      "@api": resolve(__vite_injected_original_dirname, "./src/apis"),
      "@hook": resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@store": resolve(__vite_injected_original_dirname, "./src/store"),
      "#root": resolve(__vite_injected_original_dirname)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFx1Qzc5MFx1QzcyOFx1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOFxcXFxTMDhQMzFCMjA5XFxcXGZyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTU0FGWVxcXFxEZXNrdG9wXFxcXFx1Qzc5MFx1QzcyOFx1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOFxcXFxTMDhQMzFCMjA5XFxcXGZyb250XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TU0FGWS9EZXNrdG9wLyVFQyU5RSU5MCVFQyU5QyVBOCVFRCU5NCU4NCVFQiVBMSU5QyVFQyVBMCU5RCVFRCU4QSVCOC9TMDhQMzFCMjA5L2Zyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiB0cnVlLFxyXG4gICAgcG9ydDogNTE3MyxcclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcclxuICAgICAgdGFyZ2V0OiBcImVzMjAyMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS9pc3N1ZXMvODY0NCNpc3N1ZWNvbW1lbnQtMTE1OTMwODgwM1xyXG4gICAgbG9nT3ZlcnJpZGU6IHsgXCJ0aGlzLWlzLXVuZGVmaW5lZC1pbi1lc21cIjogXCJzaWxlbnRcIiB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3Qoe1xyXG4gICAgICBiYWJlbDoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcImJhYmVsLXBsdWdpbi1tYWNyb3NcIiwgXCJiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHNcIl0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8vIHJlc29sdmVcdUI5N0MgXHVEMUI1XHVENTc0IEAvXHVCODVDIHNyY1x1Qjk3QyBcdUI4RThcdUQyQjggXHVCNTE0XHVCODA5XHVEMUEwXHVCOUFDXHVENTU4XHVDNUVDIFx1QzgxMVx1QURGQ1x1RDU1OFx1QUUzMCBcdUM3MDRcdUQ1NUMgXHVDRjU0XHVCNERDXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICBcIkBhdG9taWNcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuICAgICAgXCJAYXBpXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2FwaXNcIiksXHJcbiAgICAgIFwiQGhvb2tcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvaG9va3NcIiksXHJcbiAgICAgIFwiQHN0b3JlXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3N0b3JlXCIpLFxyXG4gICAgICBcIiNyb290XCI6IHJlc29sdmUoX19kaXJuYW1lKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFgsT0FBTyxXQUFXO0FBQzVZLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUY3QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLElBRVAsYUFBYSxFQUFFLDRCQUE0QixTQUFTO0FBQUEsRUFDdEQ7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyx1QkFBdUIsZ0NBQWdDO0FBQUEsTUFDbkU7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDL0IsV0FBVyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ2hELFFBQVEsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdkMsU0FBUyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN6QyxVQUFVLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQzFDLFNBQVMsUUFBUSxnQ0FBUztBQUFBLElBQzVCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
