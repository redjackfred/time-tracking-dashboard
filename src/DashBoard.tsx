import StatCard from "./StatCard";
import data from "./data.json";
import Header from "./Header";
import { useState } from "react";

export default function DashBoard() {
	const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

	return (
		<section className="grid w-[327px] grid-cols-1 gap-6 md:w-[612px] md:grid-cols-3 xl:h-[520px] xl:w-[1116px] xl:grid-cols-4 xl:grid-rows-2">
			<div className="md:col-span-3 xl:col-span-1 xl:row-span-2 xl:gap-8">
				<Header
					selectedTimeframe={selectedTimeframe}
					onTimeframeChange={(timeframe) => setSelectedTimeframe(timeframe)}
				/>
			</div>
			{data.map((item) => (
				<StatCard key={item.title} data={item} timeframe={selectedTimeframe} />
			))}
		</section>
	);
}
