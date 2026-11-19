"use client";

import { useEffect, useRef } from "react";

const LIGHT = 250;
const BOLD = 800;

export default function Name({ text }: { text: string }) {
	const root = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const el = root.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const letters = Array.from(
			el.querySelectorAll<HTMLSpanElement>("[data-l]"),
		);
		const weights = letters.map(() => LIGHT);
		let mouse: { x: number; y: number } | null = null;
		let lastMove = 0;
		let frame = 0;
		const start = performance.now();

		const onMove = (e: PointerEvent) => {
			if (e.pointerType !== "mouse") return;
			mouse = { x: e.clientX, y: e.clientY };
			lastMove = performance.now();
		};

		const tick = (now: number) => {
			const idle = !mouse || now - lastMove > 3000;
			const width = window.innerWidth;
			const wave = ((((now - start) / 1000) * 0.18) % 1.6) - 0.3;

			letters.forEach((l, i) => {
				const box = l.getBoundingClientRect();
				const cx = box.left + box.width / 2;
				let pull = 0;
				if (idle) {
					const d = Math.abs(cx / width - wave);
					pull = Math.max(0, 1 - d / 0.14);
				} else if (mouse) {
					const cy = box.top + box.height / 2;
					const d = Math.hypot(mouse.x - cx, (mouse.y - cy) * 0.6);
					pull = Math.max(0, 1 - d / (width * 0.16));
				}
				const target = LIGHT + (BOLD - LIGHT) * pull * pull * (3 - 2 * pull);
				weights[i] += (target - weights[i]) * 0.12;
				l.style.fontVariationSettings = `"wght" ${weights[i].toFixed(1)}, "wdth" ${(75 + (weights[i] - LIGHT) / 22).toFixed(1)}`;
			});
			frame = requestAnimationFrame(tick);
		};

		window.addEventListener("pointermove", onMove);
		frame = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<h1
			ref={root}
			aria-label={text}
			className="flex flex-wrap leading-[0.85] md:flex-nowrap md:justify-between"
		>
			{text.split(" ").map((word, w) => (
				<span key={w} aria-hidden className="flex w-full md:w-auto">
					{word.split("").map((c, i) => (
						<span
							key={i}
							data-l
							className="inline-block"
							style={{ fontVariationSettings: `"wght" ${LIGHT}, "wdth" 75` }}
						>
							{c}
						</span>
					))}
				</span>
			))}
		</h1>
	);
}
