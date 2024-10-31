async function getDynamicIcon({ name }: { name: string }) {
	const IconModule = await import(`../icons/${name}.astro`)
	const Icon = IconModule.default

	return { Icon }
}

export { getDynamicIcon }
