import { HomeOutlined, LineChartOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Sidebar({ }: Props) {
  const classActive = 'border-r-4 border-r-blue-500 border my-6 text-blue-500 rounded-md h-[55px] pt-0 max-w-full lg:text-xl text-base cursor-pointer bg-gray-300 flex items-center duration-300'
  const classNav = 'my-6 rounded-md h-[55px] pt-0 max-w-full lg:text-base cursor-pointer flex items-center duration-300 hover:bg-gray-200'
  return (
    <div className="flex flex-col relative z-20 left-0 rounded-xl mr-7 top-0 z-100 bg-white h-[80%] shadow2 w-[30%] xl:w-[20%]">
      <div className='my-5 p-5 '>
        <NavLink to='/' className={({ isActive }) => isActive ? classActive : classNav}>
          <HomeOutlined className='mx-3' />
          Overview
        </NavLink>

        <NavLink to='/figure1' className={({ isActive }) => isActive ? classActive : classNav}>
          <LineChartOutlined className='mx-3' />
          Figure1
        </NavLink>

        <NavLink to='/figure2' className={({ isActive }) => isActive ? classActive : classNav}>
          <LineChartOutlined className='mx-3' />
          Figure2
        </NavLink>

        <NavLink to='/figure3' className={({ isActive }) => isActive ? classActive : classNav}>
          <LineChartOutlined className='mx-3' />
          Figure3
        </NavLink>

        <NavLink to='/figure4' className={({ isActive }) => isActive ? classActive : classNav}>
          <LineChartOutlined className='mx-3' />
          Figure4
        </NavLink>

        <hr />

        <NavLink to='/' className={({ isActive }) => isActive ? classNav : classNav}>
          <LineChartOutlined className='mx-3' />
          Setting
        </NavLink>

        <NavLink to='/' className={({ isActive }) => isActive ? classNav : classNav}>
          <LineChartOutlined className='mx-3' />
          Log
        </NavLink>
      </div>
    </div>
  )
}