"use client";

import { useEffect, useRef, useState } from "react";

export default function LiveFrame({
	src,
	poster,
	alt,
	title,
}: {
	src: string;
	poster: string;
	alt: string;
	title: string;
}) {
	const box = useRef<HTMLDivElement>(null);
	const [live, setLive] = useState(false);
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const el = box.current;
		if (!el) return;
		const size = new ResizeObserver(([entry]) =>
			setScale(entry.contentRect.width / 1440),
		);
		size.observe(el);
		return () => size.disconnect();
	}, []);

	return (
		<div
			ref={box}
			className="group relative aspect-[16/10] overflow-hidden rounded-[0.5vw] border border-ink/25 bg-[#fdfcf9]"
		>
			{live ? (
				<iframe
					src={src}
					title={title}
					className="absolute left-0 top-0 h-[900px] w-[1440px] origin-top-left border-0"
					style={{ transform: `scale(${scale})` }}
				/>
			) : (
				<img
					src={poster}
					alt={alt}
					className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
				/>
			)}
			<div className="absolute right-[1.2vh] top-[1.2vh] flex gap-[0.8vh] text-[3.6vw] md:text-[0.95vw]">
				<button
					type="button"
					onClick={() => setLive(!live)}
					className="rounded-full border border-ink bg-[#fdfcf9] px-[1.4vh] py-[0.6vh] text-ink transition-colors hover:bg-ink hover:text-[#fdfcf9]"
				>
					{live ? "Close preview" : "Try it live"}
				</button>
				<a
					href={src}
					target="_blank"
					rel="noreferrer"
					className="rounded-full border border-ink bg-[#fdfcf9] px-[1.4vh] py-[0.6vh] text-ink transition-colors hover:bg-ink hover:text-[#fdfcf9]"
				>
					Open ↗
				</a>
			</div>
		</div>
	);
}
