import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        plugins: [
            vue()
        ],
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm-bundler.js'
            },
            // .vue 확장자 생략을 위한 설정
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        publicDir: false,
        build: {
            type: ['es', 'umd'],
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'VueDatamaps',
                fileName: 'vue-datamaps'
            }
        }
    }
})
