import { type FeaturedValues, type GroupAccordion, type ListOfItems } from "@/types/Global"

export const BENEFITS_DATA: ListOfItems[] = [
	{
		id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
		title: "Mobility for the digital era",
		description:
			"Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
		image: {
			webp: "",
			jpg: "digital-era.jpg",
		},
	},
	{
		id: "29b8abb7-ef5b-4b0c-9f38-cc9bbad0e930",
		title: "Better urban living",
		description:
			"We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride",
		image: {
			webp: "",
			jpg: "better-living.jpg",
		},
	},
]

export const OUR_VALUES_DATA: FeaturedValues[] = [
	{
		id: "f3b1b3b1-1b1b-4b1b-8b1b-1b1b1b1b1b1b",
		title: "Our tech",
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
		title: "Our tech",
		description:
			"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
		sortOrder: 2,
		image: {
			webp: "",
			jpg: "our-integrity.jpg",
		},
	},
	{
		id: "f3b1b3b1-1b1b-4b1b-8b1b-1b1b1b1b1b2b",
		title: "Our tech",
		description:
			"We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
		sortOrder: 3,
		image: {
			webp: "",
			jpg: "our-community.jpg",
		},
	},
]

export const FAQS_DATA: GroupAccordion[] = [
	{
		groupId: "1b1b",
		groupTitle: "How it works",
		groupAccordions: [
			{
				id: "86269136-3550-4e0b-a562-4d1991b047f1",
				question: "How do I download the app?",
				answer:
					"To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
			},
			{
				id: "353f2971-59e6-4328-b807-cf91d7e111da",
				question: "Can I find a nearby Scoots?",
				answer:
					"  Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. ",
			},
			{
				id: "3e44a532-786f-474d-a368-19b128f2b1bb",
				question: "Do I need a license to ride?",
				answer:
					"Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
			},
		],
	},
	{
		groupId: "2b2b",
		groupTitle: "Safe driving",
		groupAccordions: [
			{
				id: "f8a3d6c4-9d4d-4a3b-8a3b-3a3b3a3b3a3b",
				question: "Should I wear a helmet?",
				answer:
					"Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
			},
			{
				id: "f8a3d6c4-9d4d-4a3b-8a3b-3a3b3a3b3a3c",
				question: "How about the rules & regulations?",
				answer:
					"Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
			},
			{
				id: "f8a3d6c4-9d4d-4a3b-8a3b-3a3b3a3b3a3c",
				question: "What if I damage my Scoot?",
				answer:
					"Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
			},
		],
	},
]
