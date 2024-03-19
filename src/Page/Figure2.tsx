import React, { useState } from 'react'
import { CaretDownOutlined, CaretUpOutlined, DownloadOutlined, ProjectOutlined, StockOutlined } from "@ant-design/icons";
import {
    AnimatedLineSeries,
    BarSeries,
    XYChart,
    BarGroup,
    Tooltip,
    AnimatedAxis,
    Axis,
    BarStack,
    LineSeries,
} from "@visx/xychart";

type Props = {}


const data1 = [
    { x: "Total room in Hotel", y: 744 },
];

const data2 = [
    { x: "Total room in Hotel", y: 744 },
];

const data3 = [
    { x: "Room Revenue", y: 234000 },
];

const data4 = [
    { x: "Room Revenue", y: 250000 },
];

const data5 = [
    { x: "F&B Revenue", y: 609000 },
];

const data6 = [
    { x: "F&B Revenue", y: 600000 },
];

export type Accessors = {
    x: string;
    y: number;
};

const accessors = {
    xAccessor: (d: any) => d.x,
    yAccessor: (d: any) => d.y,
};

export type XYChartProps = {
    width: number;
    height: number;
};

export default function Figure2({ }: Props) {
    return (
        <div className=' pb-5 w-[100%] h-auto'>
            <div className=' h-auto flex justify-around '>
                <div className='flex items-center rounded-xl w-[50%] shadow1 border-2'>
                    <table className='rounded-xl py-7 w-full h-80%'>
                        <thead className=' text-center text-sm'>
                            <tr className='text-center border-b-2 h-[50px]'>
                                <th className='border-l-2 pl-2 font-semibold h-[40px]'></th>
                                <th className='border-l-2 pl-2 font-semibold h-[40px]'>Total room in Hotel</th>
                                <th className='border-l-2 pl-2 font-semibold h-[40px]'>Room Revenue</th>
                                <th className='border-l-2 pl-2 font-semibold h-[40px]'>F&B Revenue</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200'>
                                <td className=' font-semibold h-[40px]'>SPH</td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-green-700 h-[40px]'>744 </td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-red-700 h-[40px]'>234000 </td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-green-700 h-[40px]'>609000 </td>
                            </tr>

                            <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200' >
                                <td className=' font-semibold h-[40px]'>PP02</td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-red-700 h-[40px]'>744 </td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-green-700 h-[40px]'>600000 </td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-red-700 h-[40px]'>484000 </td>
                            </tr>

                            <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200' >
                                <td className=' font-semibold h-[40px]'>Grand Total</td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-green-700 h-[40px]'>1744 <CaretUpOutlined className="shadow-green-700 text-base ml-[-2px]" /></td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-red-700 h-[40px]'>484000 <CaretDownOutlined className="shadow-red-700 text-base ml-[-2px]" /></td>
                                <td style={{ textShadow: "0px 0px 10px" }} className='text-green-700 h-[40px]'>1209316 <CaretUpOutlined className="shadow-green-700 text-base ml-[-2px]" /></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className=' border-2 ml-5 rounded-xl shadow1'>
                    <div className=' rounded-xl w-full flex mr-3'>
                        <XYChart height={250} width={250} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} >
                            {/* <Axis orientation="left" /> */}
                            <Axis orientation="bottom" />
                            <BarGroup padding={0.4} >
                                <BarSeries
                                    dataKey="SPH"
                                    data={data1}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
                                    colorAccessor={() => "#3b82f6"}
                                />
                                <BarSeries
                                    dataKey="PP02"
                                    data={data2}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
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
                        <XYChart height={250} width={250} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} >
                            {/* <Axis orientation="left" /> */}
                            <Axis orientation="bottom" />
                            <BarGroup padding={0.4} >
                                <BarSeries
                                    dataKey="SPH"
                                    data={data3}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
                                    colorAccessor={() => "#3b82f6"}
                                />
                                <BarSeries
                                    dataKey="PP02"
                                    data={data4}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
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
                        <XYChart height={250} width={250} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} >
                            {/* <Axis orientation="left" /> */}
                            <Axis orientation="bottom" />
                            <BarGroup padding={0.4} >
                                <BarSeries
                                    dataKey="SPH"
                                    data={data5}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
                                    colorAccessor={() => "#3b82f6"}
                                />
                                <BarSeries
                                    dataKey="PP02"
                                    data={data6}
                                    {...accessors}
                                    radiusTop={true}
                                    radius={10}
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

                    <div className=' rounded-xl mb-5 flex justify-around items-center'>
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
        </div >
    )
}