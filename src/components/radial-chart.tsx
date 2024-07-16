import { RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";

const chartData = [
    { skills: "web", percentage: 100, fill: "var(--color-web)" },
    { skills: "android", percentage: 60, fill: "var(--color-android)" },
    { skills: "desktop", percentage: 30, fill: "var(--color-desktop)" },
    { skills: "edge", percentage: 80, fill: "var(--color-edge)" },
    { skills: "other", percentage: 60, fill: "var(--color-other)" },
]

const chartConfig = {
    percentage: {
        label: "Percentage",
    },
    web: {
        label: "Web Dev",
        color: "hsl(var(--chart-1))",
    },
    android: {
        label: "Android",
        color: "hsl(var(--chart-2))",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function Chart(){
    return (
        <Card className="flex flex-col absolute left-20 top-1/2 -translate-y-1/2">
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square h-80 w-80 scale-150">
                    <RadialBarChart data={chartData} innerRadius={25} outerRadius={110}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="skills" />}/>
                        <ChartLegend content={<ChartLegendContent nameKey="skills" />} />
                        <RadialBar dataKey="percentage" background />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}