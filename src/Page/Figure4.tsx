import { DownOutlined, DownloadOutlined, UpOutlined } from '@ant-design/icons';
import { Space, DatePicker } from 'antd';
import React, { useState } from 'react'
import Excel from "exceljs";

type Props = {}

const { RangePicker } = DatePicker;

const data = [
    { Date: '2004-02-23', RVC: '', Period: '', CountAdults: 16, CountChildren: 2, SalesAdults: 7750000, SalesChildren: '', Count: 18, 'Countb': '100%', Sales: 775000, 'Salesb': '90%' },
    { Date: '', RVC: 'FLA', Period: '', CountAdults: '', CountChildren: 1, SalesAdults: 0, SalesChildren: 0, Count: 6, 'Countb': '6%', Sales: 0, 'Salesb': '0%' },

    { Date: '', RVC: '', Period: 'Breakfast', CountAdults: 1, CountChildren: 1, SalesAdults: 0, SalesChildren: 0, Count: 1, 'Countb': '0%', Sales: 0, 'Salesb': '1%' },
    { Date: '', RVC: '', Period: '', CountAdults: 'Room', CountChildren: 'Guest Names', SalesAdults: 'Pax', SalesChildren: 'Time', Count: 'Remark', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },

    { Date: '', RVC: '', Period: 'Lunch', CountAdults: 2, CountChildren: 2, SalesAdults: 0, SalesChildren: 0, Count: 2, 'Countb': '0%', Sales: 0, 'Salesb': '1%' },
    { Date: '', RVC: '', Period: '', CountAdults: 'Room', CountChildren: 'Guest Names', SalesAdults: 'Pax', SalesChildren: 'Time', Count: 'Remark', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },

    { Date: '', RVC: '', Period: 'Dinner', CountAdults: 3, CountChildren: 3, SalesAdults: 0, SalesChildren: 0, Count: 3, 'Countb': '0%', Sales: 0, 'Salesb': '1%' },
    { Date: '', RVC: '', Period: '', CountAdults: 'Room', CountChildren: 'Guest Names', SalesAdults: 'Pax', SalesChildren: 'Time', Count: 'Remark', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },
    { Date: '', RVC: '', Period: '', CountAdults: '1001', CountChildren: 'Long', SalesAdults: 'ABF', SalesChildren: '15:40:20', Count: '', 'Countb': '', Sales: '', 'Salesb': '' },
]

export default function Figure4({ }: Props) {
    const [showB, setShowB] = useState<boolean>(false)
    const [showL, setShowL] = useState<boolean>(false)
    const [showD, setShowD] = useState<boolean>(false)

    const exportExcel = () => {
        const workBook = new Excel.Workbook()
        const sheet = workBook.addWorksheet("My Sheet")
        sheet.properties.defaultRowHeight = 80

        sheet.columns = [
            {
                header: 'Date',
                key: 'Date',
                width: 30
            },
            {
                header: 'RVC',
                key: 'RVC',
                width: 30
            },
            {
                header: 'Period',
                key: 'Period',
                width: 30
            },
            {
                header: 'CountAdults',
                key: 'CountAdults',
                width: 30
            },
            {
                header: ' CountChildren',
                key: ' CountChildren',
                width: 30
            },
            {
                header: 'SalesAdults',
                key: 'SalesAdults',
                width: 30
            },
            {
                header: 'SalesChildren',
                key: 'SalesChildren',
                width: 30
            },
            {
                header: 'Count',
                key: 'Count',
                width: 30
            },
            {
                header: 'Countb',
                key: 'Countb',
                width: 30
            },
            {
                header: 'Sales',
                key: 'Sales',
                width: 30
            },
            {
                header: 'Salesb',
                key: 'Salesb',
                width: 30
            }
        ]

        data?.map(a => {
            sheet.addRow({
                Date: a.Date,
                RVC: a.RVC,
                Period: a.Period,
                CountAdults: a.CountAdults,
                SalesAdults: a.SalesAdults,
                CountChildren: a.CountChildren,
                SalesChildren: a.SalesChildren,
                Count: a.Count,
                Countb: a.Countb,
                Sales: a.Sales,
                Salesb: a.Salesb,
            })
        })

        workBook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "ExcelJS"
            })
            const url = window.URL.createObjectURL(blob)
            const anchor = document.createElement('a')
            anchor.href = url
            anchor.download = 'download.xlsx'
            anchor.click()
            window.URL.revokeObjectURL(url)
        })
    }

    return (
        <div className='w-full p-7 mb-12 rounded-xl border-2 shadow2'>

            <div className='flex items-center justify-start mb-4'>
                <div className='text-2xl ml-10 w-1/5'>Title</div>

                <div className='flex items-center justify-around w-1/2'>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                            id={{
                                start: 'startInput',
                                end: 'endInput',
                            }}
                            onChange={(value) => console.log(value)}
                        />
                    </Space>

                    <div onClick={exportExcel} className='py-2 px-3 rounded-md bg-blue-500 text-white cursor-pointer duration-300 hover:bg-blue-400'>
                        <DownloadOutlined className='mr-3' />
                        Export Excel
                    </div>
                </div>
            </div>

            <div className='border-2 h-3/4'>
                <table className='py-7 w-full duration-400 transition-all'>
                    <thead className=' text-center text-sm bg-slate-500 text-white'>
                        <tr className='text-center border-b-2 h-[40px]'>
                            <th className='border-l-2 pl-2 font-semibold'>Date</th>
                            <th className='border-l-2 pl-2 font-semibold'>RVC</th>
                            <th className='border-l-2 pl-2 font-semibold'> Period</th>
                            <th className='border-l-2 pl-2 font-semibold'>A.Count</th>
                            <th className='border-l-2 pl-2 font-semibold'>C.Count</th>
                            <th className='border-l-2 pl-2 font-semibold'>A.Sales</th>
                            <th className='border-l-2 pl-2 font-semibold'>C.Sales</th>
                            <th className='border-l-2 pl-2 font-semibold'>Count</th>
                            <th className='border-l-2 pl-2 font-semibold'>Count %</th>
                            <th className='border-l-2 pl-2 font-semibold'>Sales</th>
                            <th className='border-l-2 pl-2 font-semibold'>Sales %</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                            <td className=' font-semibold'>2024-02-23</td>
                            <td className=''> </td>
                            <td className=''></td>
                            <td className=''>16 </td>
                            <td className=''>2</td>
                            <td className=''>609000 </td>
                            <td className=''>0 </td>
                            <td className=''>18 </td>
                            <td className=''>100 % </td>
                            <td className=''>77500000 </td>
                            <td className=''>100 % </td>
                        </tr>

                        <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 h-[35px]'>
                            <td className=' font-semibold'></td>
                            <td className=''>FLA</td>
                            <td className=''> </td>
                            <td className=''>16 </td>
                            <td className=''>2</td>
                            <td className=''>1 </td>
                            <td className=''>0 </td>
                            <td className=''>18 </td>
                            <td className=''>100 % </td>
                            <td className=''>0 </td>
                            <td className=''>100 % </td>
                        </tr>

                        <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                            <td className=' font-semibold'></td>
                            <td className=''>
                                {
                                    !showB ?
                                        <DownOutlined
                                            onClick={() => setShowB(!showB)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                        :
                                        <UpOutlined
                                            onClick={() => setShowB(!showB)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                }
                            </td>
                            <td className=''>Breakfast</td>
                            <td className=''>1 </td>
                            <td className=''>2</td>
                            <td className=''>609000 </td>
                            <td className=''>0 </td>
                            <td className=''>18 </td>
                            <td className=''>100 % </td>
                            <td className=''>77500000 </td>
                            <td className=''>100 % </td>
                        </tr>
                    </tbody>

                    {
                        showB && <>
                            <thead className=' text-center text-sm bg-slate-400 text-white duration-300'>
                                <tr className='text-center border-b-2 h-[40px]'>
                                    <th className='border-l-2 pl-2 '></th>
                                    <th className='border-l-2 pl-2 font-semibold'>Room</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Guest Names</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Count</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pax</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Time</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pkg.Code</th>
                                    <th colSpan={4} className='border-l-2 pl-2 font-semibold'>Remark</th>
                                </tr>
                            </thead>
                            <tbody className='  duration-300'>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>5812</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>7841</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                            </tbody>
                        </>
                    }

                    <tbody className=''>
                        <tr className='text-center border-b-2 hover:bg-gray-300 duration-200 h-[35px]'>
                            <td className=' font-semibold'></td>
                            <td className=''>
                                {
                                    !showL ?
                                        <DownOutlined
                                            onClick={() => setShowL(!showL)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                        :
                                        <UpOutlined
                                            onClick={() => setShowL(!showL)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                }
                            </td>
                            <td className=''>Lunch</td>
                            <td className=''>2 </td>
                            <td className=''>2</td>
                            <td className=''>609000 </td>
                            <td className=''>0 </td>
                            <td className=''>18 </td>
                            <td className=''>100 % </td>
                            <td className=''>77500000 </td>
                            <td className=''>100 % </td>
                        </tr>
                    </tbody>

                    {
                        showL && <>
                            <thead className=' text-center text-sm bg-slate-400 text-white'>
                                <tr className='text-center border-b-2 h-[40px]'>
                                    <th className='border-l-2 pl-2'></th>
                                    <th className='border-l-2 pl-2 font-semibold'>Room</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Guest Names</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Count</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pax</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Time</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pkg.Code</th>
                                    <th colSpan={4} className='border-l-2 pl-2 font-semibold'>Remark</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>adults</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>adults</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                            </tbody>
                        </>

                    }

                    <tbody className=''>
                        <tr className=' text-center border-b-2 bg-gray-200 hover:bg-gray-300 duration-200 h-[35px]'>
                            <td className=' font-semibold'></td>
                            <td className=''>
                                {
                                    !showD ?
                                        <DownOutlined
                                            onClick={() => setShowD(!showD)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                        :
                                        <UpOutlined
                                            onClick={() => setShowD(!showD)}
                                            className='font-semibold animate-pulse text-sm p-1 cursor-pointer rounded-sm duration-300 hover:bg-gray-100 hover:text-blue-400'
                                        />
                                }
                            </td>
                            <td className=''>Dinner</td>
                            <td className=''>3 </td>
                            <td className=''>2</td>
                            <td className=''>609000 </td>
                            <td className=''>0 </td>
                            <td className=''>18 </td>
                            <td className=''>100 % </td>
                            <td className=''>77500000 </td>
                            <td className=''>100 % </td>
                        </tr>
                    </tbody>

                    {
                        showD && <>
                            <thead className=' text-center text-sm bg-slate-400 text-white'>
                                <tr className='text-center border-b-2 h-[40px]'>
                                    <th className='border-l-2 pl-2'></th>
                                    <th className='border-l-2 pl-2 font-semibold'>Room</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Guest Names</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Count</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pax</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Time</th>
                                    <th className='border-l-2 pl-2 font-semibold'>Pkg.Code</th>
                                    <th colSpan={4} className='border-l-2 pl-2 font-semibold'>Remark</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>adults</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                                <tr className=' text-center border-b-2 hover:bg-gray-300 duration-200 bg-gray-200 h-[35px]'>
                                    <td className=''></td>
                                    <td className=''>1001</td>
                                    <td className=''>Nguyen Hoang Long</td>
                                    <td className=''>2</td>
                                    <td className=''>adults</td>
                                    <td className=''>15:41:19</td>
                                    <td className=''>ABF</td>
                                    <td colSpan={4} className=''></td>
                                </tr>
                            </tbody>
                        </>

                    }

                </table>
            </div>
        </div>
    )
}