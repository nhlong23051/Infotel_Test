import React from 'react'
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import logo from '../../asset/images/unknown.png'
import { NavLink } from 'react-router-dom';
import '../../App.css'
const items: MenuProps['items'] = [
  {
    label: (
      <div className='text-base duration-300 hover:text-blue-500 my-2'>
        <UserOutlined className='mx-2' />
        Hồ sơ cá nhân
      </div>
    ),
    key: '0',
  },
  {
    label: (
      <div className='text-base duration-300 hover:text-blue-500 my-2'>
        <SettingOutlined className='mx-2' />
        Cài đặt
      </div>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (<div className=' my-2 text-base h-full w-full duration-300 hover:text-blue-500'>
      <LogoutOutlined className='mx-2' />
      Đăng xuất
    </div>),
    key: '2',
  },
];
export default function Header() {
  return (
    <div className='border-b sticky top-0 bg-white w-full z-50 h-20 shadow-md px-[170px] rounded-xl flex items-center justify-between'>
      <NavLink to='/' className='flex items-center cursor-pointer'>
        <img className='h-[50px] w-[70px]' src={logo} alt='' />
        <span className='font-bold text-2xl ml-[-5px]'>INFOTEL</span>
      </NavLink>

      <div className='flex items-center justify-end'>
        <div>
          <MessageOutlined className='text-2xl relative mx-7 cursor-pointer duration-200 hover:text-blue-500' />
          <span className='absolute top-[25px] right-[390px] rounded-[50%] animate-ping p-[4px] bg-green-600'></span>
        </div>
        <div className='shadow1 flex items-center px-6 py-2 rounded-lg cursor-pointer'>
          <div className='rounded-[50%] bg-gray-400 h-[40px] w-[40px] mx-3'></div>
          <div><Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className='duration-300 hover:text-blue-700 font-semibold'>
                Hi, Long
              </Space>
              <DownOutlined className='text-xs ml-2' />
            </a>
          </Dropdown></div>
        </div>
      </div>

    </div>
  )
}
