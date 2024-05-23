import adapter from '@sveltejs/adapter-cloudflare'
import preprocess from 'svelte-preprocess'
import { mdsvex, escapeSvelte } from 'mdsvex'
import { codeToHtml } from 'shiki'

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = await codeToHtml(code, {
				lang,
				theme: 'catppuccin-mocha',
				colorReplacements: {
					'#1e1e2e': 'none'
				}
			})
			const escaped = escapeSvelte(html)
			return `{@html \`${escaped}\` }`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': 'src/*'
		}
	}
}

export default config
