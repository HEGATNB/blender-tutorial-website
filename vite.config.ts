import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    hmr: {
      overlay: {
        clientOverlay: true,
      },
      reload: true,
    }
  }
}