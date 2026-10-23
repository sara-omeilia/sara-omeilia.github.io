// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sara-omeilia.github.io',
	integrations: [
		starlight({
			title: "Sara O'Meilia",
			description: "Personal site of Sara O'Meilia",
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/sara-omeilia' },
			],
			sidebar: [
				{
					label: 'Writing samples',
					items: [{ autogenerate: { directory: 'writing-samples' } }],
				},
			],
		}),
	],
});
