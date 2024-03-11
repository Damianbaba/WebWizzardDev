import ViteSassPlugin from 'vite-plugin-sass';

export default {
  plugins: [ViteSassPlugin()],
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    manifest: true, // Generate manifest.json for assets caching
  },
  server: {
    port: 3000, // Set the port for the development server
  },
};
