export interface ListOfItems {
	items: ItemOfList[]
}

export interface HighlightItems {
	items: HighlightItem[]
}

export interface HighlightItem {
	id: string
	title: string
	description: string
	icon: string
}

export interface ItemOfList {
	id: string
	title: string
	description: string
	image: {
		webp: string
		jpg: string
	}
	callToAction?: {
		label?: string
		link: string
	}
}

export interface FeaturedValues {
	id: string
	title: string
	description: string
	sortOrder: number
	image: {
		webp: string
		jpg: string
	}
}

export interface Accordion {
	id: string
	question: string
	answer: string
}

export interface GroupAccordion {
	groupId: string
	groupTitle: string
	groupAccordions: Accordion[]
}

export interface Card {
	id: string
	title: string
	location: string
	link: string
}
