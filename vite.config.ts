import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv):UserConfig=>{

  return{
    // 项目根目录，默认为 process.cwd()
    root: './',
    // 应用的公共基础路径，默认 '/'
    base: '/',
    // 定义全局常量
    define: {
      __APP_VERSION__: JSON.stringify('1.0.0'),
    },
    // 模式和环境变量
    mode: 'development',
    envDir: '.env', // 环境变量文件目录
    // 使用 Vite 插件
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 开发服务器配置
    server: {
      host: true, // 允许局域网访问
      port: 3000, // 端口号
      proxy: {
        // 代理配置
      },
    },
    // 构建选项
    build: {
      target: 'es2015', // 目标浏览器兼容性
      outDir: 'dist', // 输出目录
      minify: 'terser', // 压缩工具
      rollupOptions: {
        // Rollup 配置
      },
    },
    // CSS 相关配置
    css: {
      // CSS 配置
    },
    // 静态资源目录
    publicDir: 'public',
    // 路径别名
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    // 依赖预构建
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    // 本地预览生产构建
    preview: {
      port: 8080,
    },
  }
});
