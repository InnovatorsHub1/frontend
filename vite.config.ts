import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const rootDir = path.join(__dirname, '../../');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: `${process.cwd()}/src`, // <--- defaults to process.cwd(). where the index.html is located.
  plugins: [react()],
  publicDir: './public', // defaults to "public". The location of the public dir relative to the index.html file.
  server: {
    open: true,
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  envDir: rootDir,
  clearScreen: false, // <--- default is true. false prevents Vite from clearing the terminal screen when logging certain messages
  logLevel: 'info', // <--- default is info. Options are: info, warn, error, silent
  // envPrefix: 'VITE_', // <--- default is VITE_
  // appType: 'spa', // <--- default is spa. For ssr, use custom
  cacheDir: '../node_modules/.cache/vite',
  build: {
    outDir: '../dist', // <--- default is dist. Specify the output directory (relative to project root).
    sourcemap: true, // <--- default is false. Options are: true, false, inline, hidden. Generate production source maps. If true, a separate sourcemap file will be created. If 'inline', the sourcemap will be appended to the resulting output file as a data URI. 'hidden' works like true except that the corresponding sourcemap comments in the bundled files are suppressed.
    minify: 'esbuild', // <--- Options are: 'esbuild' (default) | 'terser'. The default is esbuild which is 20 ~ 40x faster than terser and only 1 ~ 2% worse compression. Terser must be installed when it is set to 'terser'.
    target: 'esnext', // <--- default is modules. Options are: modules, esnext,
    manifest: true, // <--- Defaults to false. When set to true, the build will also generate a manifest.json file that contains a mapping of non-hashed asset filenames to their hashed versions, which can then be used by a server framework to render the correct asset links. When the value is a string, it will be used as the manifest file name.
    // ssrManifest: true, // <--- When set to true, the build will also generate an SSR manifest for determining style links and asset preload directives in production. When the value is a string, it will be used as the manifest file name. Defaults to false.
    emptyOutDir: true, // <--- defaults to true if outDir is inside root. By default, Vite will empty the outDir on build if it is inside project root. It will emit a warning if outDir is outside of root to avoid accidentally removing important files. You can explicitly set this option to suppress the warning. This is also available via command line as --emptyOutDir
    chunkSizeWarningLimit: 500, // <--- default is 500. Limit for chunk size warnings (in kbs).
    watch: null, // <--- default is null. Set to {} to enable rollup watcher.
    assetsDir: 'main', // <--- default is assets. Specify the directory to nest generated assets under (relative to build.outDir).
    assetsInlineLimit: 4096, // <--- default is 4096. Imported or referenced assets that are smaller than this threshold will be inlined as base64 URLs to avoid extra http requests. Set to 0 to disable inlining altogether.
    cssCodeSplit: true, // <--- default is true. Enable/disable CSS code splitting. When enabled, CSS imported in async chunks will be inlined into the async chunk itself and inserted when the chunk is loaded. If disabled, all CSS in the entire project will be extracted into a single CSS file.
    cssMinify: 'esbuild', // <--- Options are: 'esbuild' (default) | 'lightningcss'.
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'static/js/[name].[hash].js', // <--- defaults to assets/[name].[hash].js
    //     sourcemapFileNames: 'sourcemaps/[name].[hash].js.map', // <--- defaults to [name].[hash].js.map. You can also use one that's called [chunkhash].
    //     assetFileNames: () => 'static/css/[name].[hash:12].[ext]', // <--- this is for css files! defaults to 'assets/
    //     // sourcemapBaseUrl: 'http://localhost:5050', // When using sourcemaps, to the end of each '.js' file, a relative path is added which points to its sourcemap. By default, this relative path points to the root of the 'dist' folder. This is fine! because then in the serving server I can modify the req.url to point to the correct path, which is `sourcemaps/${sourcemapFilename}`, as you can see at `sourcemapFileNames`.
    //   },
    // },
  },
  preview: { port: 3000, strictPort: true, open: false }, // When running `npm run preview` locally, no loadEnvVariables process occurs, so VITE_PORT would be undefined. On a CI however, there are always ENV VARIABLES set in the global scope so it *would* work.
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[name].[local].[hash:base64:3]' : '[hash:base64:7]',
      localsConvention: 'camelCaseOnly',
      // scopeBehaviour: 'local'
    },
    devSourcemap: true,
    transformer: 'postcss', // <--- Options are: 'postcss' (default) | 'lightningcss'. While Lightning CSS handles the most commonly used PostCSS plugins like autoprefixer, postcss-preset-env, and CSS modules, you may still need PostCSS for more custom plugins like TailwindCSS. If that's the case, your PostCSS config will be picked up automatically.
  },
}));
