import Name from "@/components/Name";
import Reveal from "@/components/Reveal";
import LiveFrame from "@/components/LiveFrame";

export default function Home() {
	return (
		<main>
			<div className="px-[5vw] md:px-[3vw]">
				<header className="rise flex items-center justify-between py-[3vh] text-[4.2vw] md:text-[1.1vw]">
					<a href="#top" className="link font-semibold">
						Jenny Simaka
					</a>
					<nav className="flex gap-[5vw] md:gap-[2.4vw]">
						<a href="#work" className="link">
							Work
						</a>
						<a href="#about" className="link">
							About
						</a>
						<a href="#contact" className="link">
							Contact
						</a>
					</nav>
				</header>

				<section
					id="top"
					className="flex min-h-[88svh] flex-col justify-end pb-[6vh]"
				>
					<div
						className="rise text-[27vw] md:text-[13.6vw]"
						style={{ "--i": 1 } as React.CSSProperties}
					>
						<Name text="Jenny Simaka" />
					</div>
					<div className="mt-[5vh] grid gap-[4vh] border-t border-ink pt-[3vh] md:grid-cols-12 md:gap-[2vw]">
						<p
							className="rise text-[6vw] leading-[1.15] md:col-span-7 md:text-[2.3vw]"
							style={{ "--i": 2 } as React.CSSProperties}
						>
							Creative engineer and designer at{" "}
							<a
								href="https://hackclub.com"
								target="_blank"
								rel="noreferrer"
								className="link font-semibold"
							>
								Hack Club
							</a>
							. I build the websites for events that get thousands of teenage
							girls into coding.
						</p>
						<div
							className="rise flex flex-col gap-[0.6vh] text-[4.2vw] md:col-span-3 md:col-start-10 md:text-[1.1vw]"
							style={{ "--i": 3 } as React.CSSProperties}
						>
							<p className="font-semibold">Right now</p>
							<p>
								Building Snowglobe, an all girls hackathon happening November 20
								to 22 at Notion HQ in San Francisco.
							</p>
						</div>
					</div>
				</section>
			</div>

			<div className="relative z-10 -mt-[4vh] rounded-t-[6vw] border-t border-ink/15 bg-[#fdfcf9] px-[5vw] pb-[4vh] font-serif text-ink shadow-[0_-1vh_4vh_rgba(17,17,16,0.06)] md:rounded-t-[2.4vw] md:px-[3vw]">
				<section id="work" className="pt-[14vh]">
					<Reveal className="md:max-w-[46vw]">
						<h2 className="text-[17vw] italic leading-[0.95] md:text-[8vw]">
							Events
						</h2>
						<p className="mt-[3vh] text-[5vw] leading-[1.45] md:text-[1.35vw]">
							Events I built and ran with Hack Club, putting thousands of teens
							in front of a code editor.
						</p>
					</Reveal>

					<Reveal className="mt-[10vh] grid gap-[4vh] border-t border-ink/20 pt-[4vh] md:grid-cols-12 md:gap-[2vw]">
						<div className="md:col-span-6">
							<div className="flex items-baseline justify-between gap-[4vw]">
								<h3 className="text-[9vw] leading-none md:text-[2.6vw]">
									Snowglobe
								</h3>
								<p className="text-[4.4vw] md:text-[1.15vw]">2026</p>
							</div>
							<p className="mt-[1.4vh] text-[4.6vw] italic md:text-[1.25vw]">
								Code 50 hours, earn a spot at the biggest all girls hackathon in
								the world.
							</p>
							<div className="mt-[3vh] flex flex-col gap-[2vh] text-[4.6vw] leading-[1.55] md:text-[1.15vw]">
								<p>
									Snowglobe is Hack Club&apos;s winter flagship for girls 13 to
									18, happening November 20 to 22 at Notion HQ in San Francisco.
									To get in, you log 50 hours of coding on your own projects.
								</p>
								<p>
									Over 1,850+ girls have signed up to participate in the virtual
									event, and submitted over 839 projects. X girls came in person
									to participate and made X completed polished projects were
									made.
								</p>
							</div>
							<dl className="grid grid-cols-[auto_1fr] gap-x-[2vw] gap-y-[1vh] mt-[3vh] text-[4.4vw] md:text-[1.1vw]">
								<dt className="italic">Role(s)</dt>
								<dd>Developer, Event Organizer, Operations & Execution</dd>
								<dt className="italic">Website Built with</dt>
								<dd>Next.js, Typescript, Tailwind, Framer Motion</dd>
								<dt className="italic">For</dt>
								<dd>Hack Club</dd>
							</dl>
						</div>
						<div className="md:col-span-5 md:col-start-8">
							<LiveFrame
								src="https://snowglobe.hackclub.com"
								poster="/work/snowglobe.jpg"
								alt="The Snowglobe homepage, a hand painted Golden Gate Bridge inside a snowglobe"
								title="Snowglobe"
							/>
						</div>
					</Reveal>

					<Reveal className="mt-[10vh] grid gap-[4vh] border-t border-ink/20 pt-[4vh] md:grid-cols-12 md:gap-[2vw]">
						<div className="md:col-span-6">
							<div className="flex items-baseline justify-between gap-[4vw]">
								<h3 className="text-[9vw] leading-none md:text-[2.6vw]">
									Sunbeam
								</h3>
								<p className="text-[4.4vw] md:text-[1.15vw]">2026</p>
							</div>
							<p className="mt-[1.4vh] text-[4.6vw] italic md:text-[1.25vw]">
								One day, 38 cities, 1,600+ girls building their first websites.
							</p>
							<div className="mt-[3vh] flex flex-col gap-[2vh] text-[4.6vw] leading-[1.55] md:text-[1.15vw]">
								<p>
									Sunbeam was a social coding event for girls 13 to 18, held on
									August 29, 2026 in 38 cities internationally at the same time,
									with more than 1,600 girls taking part, with 100+ teen girl
									organizers all over the world making this possible with our
									guidence.
								</p>
								<p>
									I was the main developer on the site, and managing event
									logistics, budget, and providing assistence to each events
									organizers.
								</p>
							</div>
							<dl className="grid grid-cols-[auto_1fr] gap-x-[2vw] gap-y-[1vh] mt-[3vh] text-[4.4vw] md:text-[1.1vw]">
								<dt className="italic">Role(s)</dt>
								<dd>Developer, Event Organizer, Operations & Execution</dd>
								<dt className="italic">Website Built with</dt>
								<dd>Next.js, Typescript, Tailwind, Framer Motion</dd>
								<dt className="italic">For</dt>
								<dd>Hack Club</dd>
							</dl>
						</div>
						<div className="md:col-span-5 md:col-start-8">
							<LiveFrame
								src="https://sunbeam.hackclub.com"
								poster="/work/sunbeam.jpg"
								alt="The Sunbeam homepage, with the Sunbeam logo and a surfboard sign up button"
								title="Sunbeam"
							/>
						</div>
					</Reveal>
					<Reveal className="mt-[10vh] grid gap-[4vh] border-t border-ink/20 pt-[4vh] md:grid-cols-12 md:gap-[2vw]">
						<div className="md:col-span-6">
							<div className="flex items-baseline justify-between gap-[4vw]">
								<h3 className="text-[9vw] leading-none md:text-[2.6vw]">
									Campfire
								</h3>
								<p className="text-[4.4vw] md:text-[1.15vw]">2026</p>
							</div>
							<p className="mt-[1.4vh] text-[4.6vw] italic md:text-[1.25vw]">
								Hackathon for teens in Utah
							</p>
							<div className="mt-[3vh] flex flex-col gap-[2vh] text-[4.6vw] leading-[1.55] md:text-[1.15vw]">
								<p>
									Campfire is Hack Club&apos;s winter event for teens 13 to 18,
									that happened Februrary 28 at Redo office in Utah, which
									gathered 28 participants, most of whom never made any
									programming projects. And 24 projects were made, with guidence
									and workshops.
								</p>
							</div>
							<dl className="grid grid-cols-[auto_1fr] gap-x-[2vw] gap-y-[1vh] mt-[3vh] text-[4.4vw] md:text-[1.1vw]">
								<dt className="italic">Role(s)</dt>
								<dd>Event Organizer</dd>
								<dt className="italic">Website Built with</dt>
								<dd>Next.js, Tailwind, Hackatime</dd>
								<dt className="italic">For</dt>
								<dd>Hack Club</dd>
							</dl>
						</div>
						<div className="md:col-span-5 md:col-start-8">
							<LiveFrame
								src="https://campfire.hackclub.com"
								poster="/work/campfire2.png"
								alt="The Campfire homepage"
								title="Campfire"
							/>
						</div>
					</Reveal>
				</section>

				<section id="websites" className="pt-[12vh]">
					<Reveal>
						<h2 className="text-[17vw] italic leading-[0.95] md:text-[8vw]">
							Websites
						</h2>
					</Reveal>

					<Reveal className="mt-[5vh] grid gap-[4vh] border-t border-ink/20 pt-[4vh] md:grid-cols-12 md:gap-[2vw]">
						<div className="md:col-span-6">
							<div className="flex items-baseline justify-between gap-[4vw]">
								<h3 className="text-[9vw] leading-none md:text-[2.6vw]">
									Scruples
								</h3>
								<p className="text-[4.4vw] md:text-[1.15vw]">2026</p>
							</div>
							<p className="mt-[1.4vh] text-[4.6vw] italic md:text-[1.25vw]">
								A puppet show about art, from the old masters to the magic
								button.
							</p>
							<div className="mt-[3vh] flex flex-col gap-[2vh] text-[4.6vw] leading-[1.55] md:text-[1.15vw]">
								<p>
									Scruples is my own project about AI and art. You rip a ticket,
									the curtains open, and a marionette named Zhenya walks you
									through a gallery, a souvenir shop, and an art competition you
									can lose to a magic button.
								</p>
								<p>
									Every frame is drawn by hand in Procreate. Hand made art
									carries the person who made it, and I wanted a whole website
									that proves it.
								</p>
							</div>
							<dl className="grid grid-cols-[auto_1fr] gap-x-[2vw] gap-y-[1vh] mt-[3vh] text-[4.4vw] md:text-[1.1vw]">
								<dt className="italic">Role</dt>
								<dd>Art, story and code</dd>
								<dt className="italic">Built with</dt>
								<dd>Next.js, Procreate</dd>
								<dt className="italic">For</dt>
								<dd>Me</dd>
							</dl>
						</div>
						<div className="md:col-span-5 md:col-start-8">
							<div className="aspect-[16/10] overflow-hidden rounded-[0.5vw] border border-ink/25 bg-white">
								<img
									src="/work/scruples.jpg"
									alt="A hand drawn ticket in front of theatre curtains, from Scruples"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</Reveal>

					<Reveal className="mt-[10vh] grid gap-[4vh] border-t border-ink/20 pt-[4vh] md:grid-cols-12 md:gap-[2vw]">
						<div className="md:col-span-6">
							<div className="flex items-baseline justify-between gap-[4vw]">
								<h3 className="text-[9vw] leading-none md:text-[2.6vw]">
									Filterkit
								</h3>
								<p className="text-[4.4vw] md:text-[1.15vw]">2026</p>
							</div>
							<p className="mt-[1.4vh] text-[4.6vw] italic md:text-[1.25vw]">
								Dithering, halftone, ASCII and CRT effects, right in the
								browser.
							</p>
							<div className="mt-[3vh] flex flex-col gap-[2vh] text-[4.6vw] leading-[1.55] md:text-[1.15vw]">
								<p>
									Filterkit is an image and video editor with 18 effects, from
									stippling and risograph to cellular automata and thermal. You
									can drop in a photo, a video or your webcam and stack effects
									on top of each other.
								</p>
								<p>
									Everything runs on your own device, nothing gets uploaded, and
									you can export the result as an image, an SVG or an animated
									GIF.
								</p>
							</div>
							<dl className="grid grid-cols-[auto_1fr] gap-x-[2vw] gap-y-[1vh] mt-[3vh] text-[4.4vw] md:text-[1.1vw]">
								<dt className="italic">Role</dt>
								<dd>Design and code</dd>
								<dt className="italic">Built with</dt>
								<dd>Next.js, Tailwind, Canvas</dd>
								<dt className="italic">Code</dt>
								<dd>
									<a
										href="https://github.com/jane-does-coding/Filterkit"
										target="_blank"
										rel="noreferrer"
										className="link"
									>
										GitHub ↗
									</a>
								</dd>
							</dl>
						</div>
						<div className="md:col-span-5 md:col-start-8">
							<div className="aspect-[16/10] overflow-hidden rounded-[0.5vw] border border-ink/25 bg-white">
								<img
									src="/work/filterkit.jpg"
									alt="The Filterkit editor applying an effect to an image"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</Reveal>
				</section>

				<section className="pt-[20vh]">
					<Reveal>
						<h2 className="text-[17vw] italic leading-[0.95] md:text-[8vw]">
							Experience
						</h2>
					</Reveal>
					<Reveal className="mt-[6vh]">
						<div className="grid gap-[0.8vh] border-t border-ink/20 py-[3.4vh] text-[4.6vw] md:grid-cols-12 md:gap-[2vw] md:text-[1.25vw]">
							<p className="text-[6vw] md:col-span-4 md:text-[1.8vw]">
								Hack Club
							</p>
							<div className="md:col-span-5">
								<p className="italic">Frontend engineer and event organizer</p>
								<p className="mt-[1vh] leading-[1.55]">
									Building the sites for Snowglobe and Sunbeam. One of five lead
									organizers of Midnight, a hackathon in Vienna and online for
									the whole community.
								</p>
							</div>
							<p className="md:col-span-3 md:text-right">Oct 2025 to now</p>
						</div>
						<div className="grid gap-[0.8vh] border-t border-ink/20 py-[3.4vh] text-[4.6vw] md:grid-cols-12 md:gap-[2vw] md:text-[1.25vw]">
							<p className="text-[6vw] md:col-span-4 md:text-[1.8vw]">
								Referred.fyi
							</p>
							<div className="md:col-span-5">
								<p className="italic">Design and development intern</p>
								<p className="mt-[1vh] leading-[1.55]">
									Took designs from Figma all the way to Next.js pages and
									components.
								</p>
							</div>
							<p className="md:col-span-3 md:text-right">Jul to Aug 2025</p>
						</div>
						<div className="grid gap-[0.8vh] border-t border-ink/20 py-[3.4vh] text-[4.6vw] md:grid-cols-12 md:gap-[2vw] md:text-[1.25vw]">
							<p className="text-[6vw] md:col-span-4 md:text-[1.8vw]">
								Constellation Technologies
							</p>
							<div className="md:col-span-5">
								<p className="italic">Full stack engineer intern</p>
								<p className="mt-[1vh] leading-[1.55]">
									React, TypeScript, Prisma and MongoDB on a product thousands
									of people use every day.
								</p>
							</div>
							<p className="md:col-span-3 md:text-right">Apr to Oct 2024</p>
						</div>
						<div className="grid gap-[0.8vh] border-y border-ink/20 py-[3.4vh] text-[4.6vw] md:grid-cols-12 md:gap-[2vw] md:text-[1.25vw]">
							<p className="text-[6vw] md:col-span-4 md:text-[1.8vw]">
								Hackathons
							</p>
							<div className="md:col-span-5">
								<p className="italic">Competitor</p>
								<p className="mt-[1vh] leading-[1.55]">
									Won more than ten international hackathons against hundreds of
									teams.
								</p>
							</div>
							<p className="md:col-span-3 md:text-right">10+ wins</p>
						</div>
					</Reveal>
				</section>

				<section
					id="about"
					className="grid gap-[5vh] pt-[20vh] md:grid-cols-12 md:gap-[2vw]"
				>
					<Reveal className="md:col-span-4">
						<div className="overflow-hidden rounded-[0.5vw] border border-ink/25">
							<img
								src="/me.jpg"
								alt="Jenny in front of Tower Bridge in London"
								className="aspect-[4/5] w-full object-cover object-[50%_50%]"
							/>
						</div>
					</Reveal>
					<Reveal className="md:col-span-6 md:col-start-6 md:self-end">
						<h2 className="text-[17vw] italic leading-[0.95] md:text-[8vw]">
							About
						</h2>
						<div className="mt-[4vh] flex flex-col gap-[2.4vh] text-[5vw] leading-[1.5] md:text-[1.45vw]">
							<p>
								I&apos;m Yevheniia, but everyone calls me Jenny. I got into code
								through hackathons, kept winning them, and now I help run them.
							</p>
							<p>
								Most of what I make is for girls who are just starting out,
								because building something that works for the first time is a
								feeling everyone should get.
							</p>
							<p>
								I design in Figma, draw in Procreate, and build with Next.js,
								React, TypeScript, Svelte and Tailwind.
							</p>
						</div>
					</Reveal>
				</section>

				<section id="contact" className="pt-[24vh]">
					<Reveal>
						<h2 className="text-[17vw] italic leading-[0.95] md:text-[8vw]">
							Say hi
						</h2>
						<a
							href="mailto:yevheniiasimaka@gmail.com"
							className="link mt-[4vh] inline-block break-all text-[7.6vw] leading-tight md:text-[3.4vw]"
						>
							yevheniiasimaka@gmail.com
						</a>
					</Reveal>
					<footer className="mt-[18vh] flex flex-wrap items-center justify-between gap-[2vh] border-t border-ink/20 pt-[2.4vh] font-sans text-[4.2vw] md:text-[1.05vw]">
						<p>Jenny Simaka, 2026</p>
						<div className="flex gap-[5vw] md:gap-[2.4vw]">
							<a
								href="https://github.com/jane-does-coding"
								target="_blank"
								rel="noreferrer"
								className="link"
							>
								[ GitHub ]
							</a>
							<a
								href="https://www.linkedin.com/in/yevheniia-simaka"
								target="_blank"
								rel="noreferrer"
								className="link"
							>
								[ LinkedIn ]
							</a>
							<a
								href="https://hackclub.com"
								target="_blank"
								rel="noreferrer"
								className="link"
							>
								[ Hack Club ]
							</a>
						</div>
					</footer>
				</section>
			</div>
		</main>
	);
}
