// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://alex-zk.github.io',
	base: '/personal-blog',
	integrations: [mdx(), sitemap()],
	vite: { plugins: [tailwindcss()] },
	fonts: [{
		provider: fontProviders.local(),
		name: 'Atkinson',
		cssVariable: '--font-atkinson',
		fallbacks: ['sans-serif'],
		options: { variants: [
			{ src: ['./src/assets/fonts/atkinson-regular.woff'], weight: 400, style: 'normal', display: 'swap' },
			{ src: ['./src/assets/fonts/atkinson-bold.woff'], weight: 700, style: 'normal', display: 'swap' },
		]},
	}],
});
