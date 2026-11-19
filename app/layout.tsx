import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
	subsets: ["latin"],
	axes: ["opsz", "wdth"],
	variable: "--font-bricolage",
});

const newsreader = Newsreader({
	subsets: ["latin"],
	style: ["normal", "italic"],
	axes: ["opsz"],
	variable: "--font-newsreader",
});

export const metadata: Metadata = {
	title: "Jenny Simaka",
	description:
		"Creative engineer and designer at Hack Club, building websites for events that get teenage girls into coding.",
	authors: [{ name: "Yevheniia Simaka" }],
	openGraph: {
		title: "Jenny Simaka",
		description: "Creative engineer and designer at Hack Club.",
		images: ["/work/snowglobe.jpg"],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#f5f4f0",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${bricolage.variable} ${newsreader.variable}`}>
			<body>{children}</body>
		</html>
	);
}
