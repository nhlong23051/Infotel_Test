import React from 'react'
import {
    AnimatedLineSeries,
    BarSeries,
    XYChart,
    BarGroup,
    Tooltip,
    AnimatedAxis,
    Axis,
} from "@visx/xychart";
type Props = {}

const data1 = [
    { x: "Total Room in Hotel", y: 50 },
    { x: "Room Revenue", y: 10 },
    { x: "F&B Revenue", y: 20 },
    { x: "Other Revenue", y: 80 },
    { x: "Total Revenue", y: 50 },
    { x: "Occ%", y: 70 },
];

const data2 = [
    { x: "Total Room in Hotel", y: 50 },
    { x: "Room Revenue", y: 10 },
    { x: "F&B Revenue", y: 20 },
    { x: "Other Revenue", y: 80 },
    { x: "Total Revenue", y: 50 },
    { x: "Occ%", y: 70 },
];

const accessors = {
    xAccessor: (d: any) => d.x,
    yAccessor: (d: any) => d.y,
};
export default function Figure1({ }: Props) {
    return (
        <div className=' rounded-xl pb-7 w-[100%] border-2 shadow2 mb-5'>
            <div className='my-5 mx-10 text-2xl flex items-center justify-between'>
                <div className="">Title</div>
            </div>
            <div className='flex justify-around h-auto'>
                <div className=' w-[72%]'>
                    <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} >
                        <Axis orientation="left" />
                        <Axis orientation="bottom" />
                        <BarGroup padding={0.3}>
                            <BarSeries
                                dataKey="SPH"
                                radiusTop={true}
                                radius={10}
                                data={data1}
                                {...accessors}
                                colorAccessor={() => "#3b82f6"}
                            />
                            <BarSeries
                                dataKey="Grand Total"
                                data={data1}
                                radiusTop={true}
                                radius={10}
                                {...accessors}
                                colorAccessor={() => "#612efb80"}
                            />
                        </BarGroup>
                        <Tooltip
                            snapTooltipToDatumX
                            snapTooltipToDatumY
                            showVerticalCrosshair
                            showSeriesGlyphs
                            renderTooltip={({ tooltipData, colorScale }): any => (
                                <div>
                                    <div style={{ color: '#3b82f6', padding: "10px 0" }}>
                                        {tooltipData?.nearestDatum?.key}
                                    </div>
                                    {accessors.xAccessor(tooltipData?.nearestDatum?.datum)}
                                    {": "}
                                    {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
                                </div>
                            )}
                        />
                    </XYChart>
                </div>
                <div className=' rounded-md w-[20%] mt-36'>
                    <div className="flex items-center">
                        <div className="bg-[#3b82f6] px-5 rounded-sm py-2 mr-2"></div>
                        <div className="text-xl">: SPH</div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#612efb80] px-5 rounded-sm py-2 mr-2"></div>
                        <div className="text-xl">: Grand Total</div>
                    </div>
                </div>
            </div>
        </div>
    )
}