import { CaretUpOutlined, ProjectOutlined } from "@ant-design/icons";
import React from 'react'
import Figure2 from "./Figure2";
import Figure3 from "./Figure3";
import Figure4 from "./Figure4";
import Figure1 from "./Figure1";



export type XYChartProps = {
  width: number;
  height: number;
};

export default function HomePage({ height, width }: XYChartProps) {
  return (
    <div className='w-full'>
      <div className="text-3xl mb-5">Dashboard</div>

      <div className="rounded-md w-[100%] h-[8%] min-h-[120px] mb-5 flex justify-between">
        <div className=" w-[24%] h-full border-2 shadow1 border-l-8 border-l-red-400 rounded-lg flex items-center justify-between px-4">
          <div className="flex items-end">
            <div>
              <div className="text-red-400">Doanh thu</div>
              <div className="text-xl">$65,481</div>
            </div>
            <div style={{ textShadow: '0px 0px 3px' }} className="text-green-700 mb-3 ml-3 text-base">2.4% <CaretUpOutlined className="shadow-green-700 text-base ml-[-4px]" /></div>
          </div>
          <div><ProjectOutlined className="text-4xl opacity-[0.7]" /></div>
        </div>

        <div className=" w-[24%] h-full border-2 shadow1 border-l-8 border-l-blue-400 rounded-lg flex items-center justify-between px-4">
          <div className="flex items-end">
            <div>
              <div className="text-blue-400">Doanh thu</div>
              <div className="text-xl">$65,481</div>
            </div>
            <div style={{ textShadow: '0px 0px 3px' }} className="text-green-700 mb-3 ml-3 text-base">2.4% <CaretUpOutlined className="shadow-green-700 text-base ml-[-4px]" /></div>
          </div>
          <div><ProjectOutlined className="text-4xl opacity-[0.7]" /></div>
        </div>

        <div className=" w-[24%] h-full border-2 shadow1 border-l-8 border-l-gray-400 rounded-lg flex items-center justify-between px-4">
          <div className="flex items-end">
            <div>
              <div className="text-gray-400">Doanh thu</div>
              <div className="text-xl">$65,481</div>
            </div>
            <div style={{ textShadow: '0px 0px 3px' }} className="text-green-700 mb-3 ml-3 text-base">2.4% <CaretUpOutlined className="shadow-green-700 text-base ml-[-4px]" /></div>
          </div>
          <div><ProjectOutlined className="text-4xl opacity-[0.7]" /></div>
        </div>

        <div className=" w-[24%] h-full border-2 shadow1 border-l-8 border-l-yellow-400 rounded-lg flex items-center justify-between px-4">
          <div className="flex items-end">
            <div>
              <div className="text-yellow-400">Doanh thu</div>
              <div className="text-xl">$65,481</div>
            </div>
            <div style={{ textShadow: '0px 0px 3px' }} className="text-green-700 mb-3 ml-3 text-base">2.4% <CaretUpOutlined className="shadow-green-700 text-base ml-[-4px]" /></div>
          </div>
          <div><ProjectOutlined className="text-4xl opacity-[0.7]" /></div>
        </div>
      </div>

      <Figure1 />

      <Figure2 />

      <Figure3 />

      <Figure4 />
    </div>
  )
}
