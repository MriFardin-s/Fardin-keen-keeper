import React, { useContext } from 'react';
import { TimelineContext } from "../context/TimeLineProvider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { HiOutlineChartPie } from "react-icons/hi"; 

const Stats = () => {
    const { activities } = useContext(TimelineContext);

    const dataCounts = activities.reduce((acc, curr) => {
        const type = curr.type;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(dataCounts).map(key => ({
        name: key,
        value: dataCounts[key]
    }));

    const COLORS = ['purple', 'black', 'green']; 

    return (
        <div className="max-w-4xl mx-auto p-10 min-h-[70vh]">
            <h1 className="text-3xl text-[#1F2937] font-bold mb-10">Friendship Analytics</h1>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-100 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-6">By Interaction Type</h2>
                {activities.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-10">
                        <div className="bg-green-50 p-6 rounded-full mb-4">
                            <HiOutlineChartPie className="text-7xl text-green-200" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">No Analytics Data Yet</h3>
                        <p className="text-gray-400 mt-2 max-w-xs">
                            We need some interactions to generate your friendship stats. Start connecting with friends!
                        </p>
                    </div>
                ) : (
                    <div className="w-full h-75">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Stats;