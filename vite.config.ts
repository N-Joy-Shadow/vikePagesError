import react from '@vitejs/plugin-react'
import srr from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), srr()]
}

export default config
