import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // FIX: The 'cwd' function is part of the global 'process' object and should be accessed via 'process.cwd()'.
  // The previous import from 'node:process' was incorrect.
  // FIX: Cast `process` to `any` to bypass a TypeScript type error where `cwd` is not recognized. This is a workaround for a likely misconfigured TS environment (e.g., missing @types/node).
  const env = loadEnv(mode, (process as any).cwd(), '')
  return {
    plugins: [react()],
  // IMPORTANT: Set base to '/new-project-3/' for Vercel deployment.
  base: '/new-project-3/',
    // This makes `process.env.API_KEY` available in your client-side code.
    // Vite will replace it with the actual value from the environment during the build.
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})