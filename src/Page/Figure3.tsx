import React, { useState } from 'react'
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
    Grid,
} from "@visx/xychart";
import { Dropdown, MenuProps, Select, Space } from 'antd';
import { DownCircleOutlined, DownOutlined, RiseOutlined } from '@ant-design/icons';
type Props = {}
const data1 = [
    { x: "1/2024", y: 744 },
    { x: "2/2024", y: 200 },
    { x: "3/2024", y: 300 },
    { x: "4/2024", y: 500 },
    { x: "5/2024", y: 600 },
    { x: "6/2024", y: 700 },
];

const data2 = [
    { x: "1/2024", y: 400 },
    { x: "2/2024", y: 200 },
    { x: "3/2024", y: 350 },
    { x: "4/2024", y: 450 },
    { x: "5/2024", y: 200 },
    { x: "6/2024", y: 700 },
];

const data3 = [
    { x: "1/2024", y: 350 },
    { x: "2/2024", y: 250 },
    { x: "3/2024", y: 410 },
    { x: "4/2024", y: 580 },
    { x: "5/2024", y: 400 },
    { x: "6/2024", y: 800 },
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

export default function Figure3({ }: Props) {
    const [month, setMonth] = useState<String>('1')

    const handleChange = (value: string) => {
        setMonth(value)
        console.log(`selected ${value}`);
    };
    return (
        <div className='w-full rounded-xl border-2 shadow2  p-6 mb-5'>
            <div className=' mx-10 mb-5 text-2xl flex items-center justify-between'>
                <div className="">Title</div>
            </div>

            <div>
                <div className='flex px-10'>
                    <Select
                        suffixIcon={<DownOutlined className='text-black text-[10px]' />}
                        className='w-[12%] h-11 shadow1'
                        defaultValue={'1'}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: '3 Tháng' },
                            { value: '2', label: '6 Tháng' },
                        ]}
                    />
                </div>
                <div className='flex items-center justify-center pt-5'>
                    <div className='text-base mx-9'><RiseOutlined className='text-[#3b82f6] mr-1' /> Toatal Occ</div>
                    <div className='text-base mx-9'><RiseOutlined className='text-[red] mr-1' /> Arr.Rooms</div>
                    <div className='text-base mx-9'><RiseOutlined className='text-[green] mr-1' />Dep.Rooms</div>
                </div>
                <XYChart height={320} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} >
                    <Axis orientation="left" />
                    <Axis orientation="bottom" />
                    <Grid numTicks={10} />
                    <LineSeries
                        dataKey="Total Occ"
                        data={month === '1' ? data1.slice(0, 3) : data1}
                        {...accessors}
                        colorAccessor={() => "#3b82f6"}
                    />

                    <LineSeries
                        dataKey="Arr. Rooms"
                        data={month === '1' ? data2.slice(0, 3) : data2}
                        {...accessors}
                        colorAccessor={() => "red"}
                    />

                    <LineSeries
                        dataKey="Dep. Rooms"
                        data={month === '1' ? data3.slice(0, 3) : data3}
                        {...accessors}
                        colorAccessor={() => "green"}
                    />

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
        </div>
    )
}