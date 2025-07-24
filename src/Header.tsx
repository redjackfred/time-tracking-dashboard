import avatar from "./assets/images/image-jeremy.png";

export default function Header({
	selectedTimeframe,
	onTimeframeChange,
}: {
	selectedTimeframe: string;
	onTimeframeChange: (timeframe: string) => void;
}) {
	const timeframes = ["daily", "weekly", "monthly"];

	return (
		<header className="bg-navy-900 h-full w-full rounded-2xl">
			<section className="flex items-center justify-center gap-6 rounded-2xl bg-purple-600 p-8 md:justify-normal xl:h-[354px] xl:flex-col xl:items-start xl:gap-10">
				<img
					src={avatar}
					alt="Avatar"
					className="h-16 w-16 rounded-full border-2 border-white xl:h-[84px] xl:w-[84px]"
				/>
				<div className="aria-hidden">
					<h2 className="text-preset-6 text-navy-200">Report for</h2>
					<h1 className="text-preset-4 mt-2 text-white">Jeremy Robson</h1>
				</div>
			</section>
			<section className="text-preset-5-regular flex items-end justify-evenly px-8 py-6 text-center text-purple-500 md:justify-center xl:h-[166px] xl:flex-col xl:items-start xl:justify-between xl:py-7">
				{timeframes.map((timeframe) => (
					<div key={timeframe} className="basis-[109px] xl:basis-0">
						<button
							onClick={() => onTimeframeChange(timeframe)}
							className={`transition-colors hover:text-white ${
								selectedTimeframe === timeframe
									? "text-white"
									: "text-purple-500"
							}`}
						>
							{timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
						</button>
					</div>
				))}
			</section>
		</header>
	);
}
