import type { Data } from "./dataType";

export default function StatCard({
	data,
	timeframe,
}: {
	data: Data;
	timeframe: string;
}) {
	const bgColor = getBgColor(data.title);
	function getBgColor(title: string): string {
		switch (title) {
			case "Work":
				return "bg-orange-300";
			case "Play":
				return "bg-blue-300";
			case "Study":
				return "bg-pink-400";
			case "Exercise":
				return "bg-green-400";
			case "Social":
				return "bg-purple-700";
			case "Self Care":
				return "bg-yellow-300";
			default:
				return "";
		}
	}

	return (
		<section className="relative overflow-hidden rounded-2xl">
			<div className={`${bgColor} absolute h-1/2 w-full overflow-hidden`}>
				<img
					src={`time-tracking-dashboard/src/assets/images/icon-${data.title.toLowerCase().replace(" ", "-")}.svg`}
					alt={`${data.title} Icon`}
					className="absolute -top-[10.91px] left-[231.58px] h-[78px] w-[78px] xl:top-0 xl:left-[157px]"
				/>
			</div>
			<div className="bg-navy-900 hover:bg-navy-800 relative mt-[38px] flex h-[122px] flex-col gap-2 rounded-2xl p-6 text-white md:h-[180px] md:gap-4 xl:mt-[45px] xl:h-[199px]">
				<header className="flex items-center justify-between">
					<h2 className="text-preset-5-medium text-white">{data.title}</h2>
					<p className="text-navy-200 text-preset-5-medium">...</p>
				</header>
				<main className="flex items-center justify-between gap-2 md:flex-col md:items-start">
					<h1 className="text-preset-3 text-white">
						{timeframe === "daily" && data.timeframes.daily.current}
						{timeframe === "weekly" && data.timeframes.weekly.current}
						{timeframe === "monthly" && data.timeframes.monthly.current}
						hrs
					</h1>
					<p className="text-preset-6 text-navy-200">
						{timeframe === "daily" &&
							"Yesturday - " + data.timeframes.daily.previous}
						{timeframe === "weekly" &&
							"Last Week - " + data.timeframes.weekly.previous}
						{timeframe === "monthly" &&
							"Last Month - " + data.timeframes.monthly.previous}
						hrs
					</p>
				</main>
			</div>
		</section>
	);
}
