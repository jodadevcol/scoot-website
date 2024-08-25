import { type Card, type FeaturedValues, type ListOfItems } from "@/types/Global"

export const CARE_OUR_MISSION_DATA: ListOfItems[] = [
	{
		id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
		title: "Care to join our mission?",
		description:
			"We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
		image: {
			webp: "",
			jpg: "join-us.jpg",
		},
	},
]

export const WHY_JOIN_US_DATA: FeaturedValues[] = [
	{
		id: "f3b1b3b1-1b1b-4b1b-8b1b-1b1b1b1b1b1b",
		title: "Why join us?",
		description:
			"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
		sortOrder: 1,
		image: {
			webp: "",
			jpg: "our-tech.jpg",
		},
	},
	{
		id: "f3b1b3b1-1b1b-4b1b-8b1b-1b1b1b1b1b2b",
		title: "Our integrity",
		description:
			"We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
		sortOrder: 2,
		image: {
			webp: "",
			jpg: "our-integrity.jpg",
		},
	},
	{
		id: "f3b1b3b1-1b1b-4b1b-8b1b-1b1b1b1b1b2b",
		title: "Our community",
		description:
			"We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
		sortOrder: 3,
		image: {
			webp: "",
			jpg: "our-community.jpg",
		},
	},
]

export const OPEN_POSITIONS_DATA: Card[] = [
	{
		id: "1",
		title: "General Manager",
		location: "Jakarta, Indonesia",
		link: "/careers/full-stack-developer",
	},
	{
		id: "2",
		title: "UI/UX Designer",
		location: "Yokohama, Japan",
		link: "/careers/front-end-developer",
	},
	{
		id: "3",
		title: "Blog Content Copywriter",
		location: "New York, United States",
		link: "/careers/ux-designer",
	},
	{
		id: "4",
		title: "Graphic Designer",
		location: "New York, United States",
		link: "/careers/customer-support",
	},
	{
		id: "5",
		title: "Fleet Supervisor",
		location: "Jakarta, Indonesia",
		link: "/careers/customer-support",
	},
	{
		id: "6",
		title: "UX Analyst",
		location: "London, United Kingdom",
		link: "/careers/customer-support",
	},
]
