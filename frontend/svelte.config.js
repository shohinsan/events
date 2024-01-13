import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess({
		postcss: true,
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$source: 'src/',
			$components: 'src/lib/components',
			$customTypes: 'src/app.d.ts',
			$assets: 'src/lib/icons',
			$styles: 'src/styles',
		},
	},
};

export default config;
