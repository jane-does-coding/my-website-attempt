"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = el.current;
		if (!node) return;
		const seen = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.classList.add("shown");
					seen.disconnect();
				}
			},
			{ threshold: 0.12 },
		);
		seen.observe(node);
		return () => seen.disconnect();
	}, []);

	return (
		<div ref={el} className={`reveal ${className}`}>
			{children}
		</div>
	);
}
