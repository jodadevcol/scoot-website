import type { HighlightItems, ListOfItems } from "@/types/Global"

export const FEATURED_SCOOT_DATA: HighlightItems = {
	items: [
		{
			id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
			title: "Locate with app",
			description:
				"Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
			icon: "Locate",
		},
		{
			id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
			title: "Pick your scooter",
			description:
				"We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
			icon: "Scooter",
		},
		{
			id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
			title: "Enjoy the ride",
			description:
				"Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
			icon: "Ride",
		},
	],
}

export const POINTS_SCOOT_DATA: ListOfItems = {
	items: [
		{
			id: "6f42a58b-b027-4115-8399-c3b0e4f611fe",
			title: "Easy to use riding telemetry",
			description:
				"The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
			image: {
				webp: "",
				jpg: "telemetry.jpg",
			},
			callToAction: {
				label: "Learn more",
				link: "/telemetry",
			},
		},
		{
			id: "6f42a58b-b027-2302-2019-c3b0e4f611fe",
			title: "Coming to a city near you",
			description:
				"Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
			image: {
				webp: "",
				jpg: "near-you.jpg",
			},
			callToAction: {
				label: "Learn more",
				link: "/near-you",
			},
		},
		{
			id: "6f42a58b-b027-2953-8843-c3b0e4f611fe",
			title: "Zero hassle payments",
			description:
				"Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
			image: {
				webp: "",
				jpg: "payments.jpg",
			},
			callToAction: {
				label: "Learn more",
				link: "/payments",
			},
		},
	],
}
