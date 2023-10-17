import React from 'react'
import ReactEcharts from 'echarts-for-react';


export const GraphsAnsCharts = () => {
    const data = [37500, 45500, 47500, 27000, 47500, 55000, 60000, 57500, 67500, 65000, 70000, 57000];
    const max = Math.max(...data);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const maxWidth = 250;

    const objects = data.map((value, index) => {
        return {
            id: index + 1,
            price: value,
            percentageInPixels: (value / max) * 100 * (maxWidth / 100),
            month: months[index]
        };
    });

    console.log(objects);
  return (
    <div className=" flex flex-row justify-between sm:flex-col mm:flex-col">
                <div className="flex flex-col  w-[65%] sm:w-full mm:w-full max-w-screen-md p-6 sm:p-2 mm:p-2 pb-6 sm:ml-0 mm:ml-0 mt-4 ml-2 bg-white rounded-lg shadow-xl">
                    <div className=" flex flex-row justify-between">
                        <div className=" flex flex-col">
                            <h2 className="text-xl font-bold float-left">Overview</h2>
                            <span className="text-sm font-semibold text-gray-400 float-left">Monthly Earning</span>
                        </div>
                        <select id="frequency" name="frequency" className=" bg-gray-100 w-26 h-8 p-1 border rounded-lg border-gray-100 text-gray-400">
                            <option className=" border-gray-100 text-gray-400" value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                    </div>
                    <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3 mm:space-x-3" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        {objects.map((object, index) => (
                            <div className="relative flex flex-col items-center flex-grow pb-5 group" key={object.id}>
                                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                                    ${object.price}
                                </span>
                                <div
                                    className={`relative flex justify-center w-10 bg-indigo-200 hover:bg-indigo-500 rounded-xl ${object.month === 'Aug' ? 'bg-indigo-700' : ''}`}
                                    style={{

                                        height: `${object.percentageInPixels}px`,

                                    }}
                                />

                                <span className="absolute bottom-0 text-xs font-bold">{object.month}</span>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="flex flex-col justify-between w-[30%] sm:w-full mm:w-full max-w-screen-md p-6 pb-6 mt-4 ml-2 bg-white rounded-lg shadow-xl sm:p-8 mm:p-8">
                    <div>
                        <h1 className=" font-bold text-xl">Customers</h1>
                        <p className=" text-gray-400">Customers that buy projects</p>
                    </div>
                    <ReactEcharts
                        option={{
                            series: [
                                {
                                    name: 'Utilization',
                                    type: 'pie',
                                    radius: ['50%', '70%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        show: true,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,

                                            fontSize: '10',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    data: [
                                        { value: 100, name: 'Total New Customers' },
                                        { value: 65, name: '' },
                                        { value: 35, name: '' },
                                       
                                    ]
                                }
                            ]
                        }}
                    />




                </div>
            </div>
  )
}
