import svelte_config from '@sveltejs/eslint-config'
import lube from 'eslint-plugin-lube'
import boundary from 'eslint-plugin-boundaries'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...svelte_config,
	{
		plugins: {
			lube,
			boundary
		},
		rules: {
			'@stylistic/quotes': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'prefer-const': 'off',
			'object-shorthand': 'off',
			'lube/svelte-naming-convention': ['error', { fixSameNames: true }],
			'no-var': 'error',
			'no-console': 'error'
		}
	},
	{
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true
				}
			},
			'boundaries/include': ['src/**/*'],
			'boundaries/elements': [
				{
					type: 'app',
					pattern: 'app'
				},
				{
					type: 'routes',
					pattern: 'routes/*',
					capture: ['route']
				},
				{
					type: 'widgets',
					pattern: 'widgets/*',
					capture: ['widget']
				},
				{
					type: 'features',
					pattern: 'features/*',
					capture: ['feature']
				},
				{
					type: 'entities',
					pattern: 'entities/*',
					capture: ['entity']
				},
				{
					type: 'shared',
					pattern: 'shared/*',
					capture: ['segment']
				}
			]
		},
		rules: {
			'boundaries/entry-point': [
				2,
				{
					default: 'disallow',
					rules: [
						{
							target: [
								[
									'shared',
									{
										segment: 'lib'
									}
								]
							],
							allow: '*/index.ts'
						},
						{
							target: [
								[
									'shared',
									{
										segment: 'lib'
									}
								]
							],
							allow: '*.(ts|tsx)'
						},
						{
							target: [
								[
									'shared',
									{
										segment: 'constants'
									}
								]
							],
							allow: 'index.ts'
						},
						{
							target: [
								[
									'shared',
									{
										segment: '(ui|api)' // ("ui"|"constants")
									}
								]
							],
							allow: '**'
						},
						{
							target: ['app', 'routes', 'widgets', 'features', 'entities'],
							allow: 'index.(ts|tsx)'
						},
						{
							target: ['app', 'routes', 'widgets', 'features', 'entities'],
							allow: 'pub/*.(ts|tsx)'
						}
					]
				}
			],
			'boundaries/element-types': [
				2,
				{
					default: 'allow',
					message: '${file.type} is not allowed to import (${dependency.type})',
					rules: [
						{
							from: ['shared'],
							disallow: ['app', 'routes', 'widgets', 'features', 'entities'],
							message:
								'Shared module must not import upper layers (${dependency.type})'
						},
						{
							from: ['entities'],
							message: 'Entity must not import upper layers (${dependency.type})',
							disallow: ['app', 'routes', 'widgets', 'features']
						},
						{
							from: ['entities'],
							message: 'Entity must not import other entity',
							disallow: [
								[
									'entities',
									{
										entity: '!${entity}'
									}
								]
							]
						},
						{
							from: ['features'],
							message: 'Feature must not import upper layers (${dependency.type})',
							disallow: ['app', 'routes', 'widgets']
						},
						{
							from: ['features'],
							message: 'Feature must not import other feature',
							disallow: [
								[
									'features',
									{
										feature: '!${feature}'
									}
								]
							]
						},
						{
							from: ['widgets'],
							message: 'Feature must not import upper layers (${dependency.type})',
							disallow: ['app', 'routes']
						},
						{
							from: ['widgets'],
							message: 'Widget must not import other widget',
							disallow: [
								[
									'widgets',
									{
										widget: '!${widget}'
									}
								]
							]
						},
						{
							from: ['routes'],
							message: 'Route must not import upper layers (${dependency.type})',
							disallow: ['app']
						},
						{
							from: ['routes'],
							message: 'Route must not import other route',
							disallow: [
								[
									'routes',
									{
										route: '!${route}'
									}
								]
							]
						}
					]
				}
			]
		}
	},
	{
		ignores: [
			'**/*.d.ts',
			'**/tests',
			'node_modules',
			'build',
			'.svelte-kit',
			'package',
			'.env'
		]
	}
]

// https://gist.github.com/pboling/e8945f4009e5e521c094616783bd4c13

// 'svelte/no-unused-vars': 'on',
// 'no-unused-vars': 'off',
//
//
//
//
// 'no-var': 'off',
