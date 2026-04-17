import React, { useContext, useState } from 'react';
import { TimelineContext } from "../context/TimeLineProvider";
import { IoMdCall } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineInbox } from "react-icons/hi"; 
const TimeLine = () => {
    const { activities } = useContext(TimelineContext);
    const [filter, setFilter] = useState('All');

    
    const filteredActivities = filter === 'All' 
        ? activities 
        : activities.filter(a => a.type.toLowerCase() === filter.toLowerCase());

    return (
        <div className="max-w-4xl mx-auto p-10 min-h-[60vh]">
            <h1 className="text-3xl text-[#1F2937] font-bold mb-6">Timeline</h1>
            
            <select 
                onChange={(e) => setFilter(e.target.value)}
                className="mb-8 p-3 border rounded-xl bg-white text-slate-600 shadow-sm focus:ring-green-500"
            >
                <option value="All">Filter timeline</option>
                <option value="Call">Calls</option>
                <option value="Text">Texts</option>
                <option value="Video">Videos</option>
            </select>

            <div className="flex flex-col gap-4">
                {filteredActivities.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-gray-100 shadow-sm">
                        <div className="bg-gray-50 p-6 rounded-full mb-4">
                            <HiOutlineInbox className="text-6xl text-gray-200" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-600">No data available</h2>
                        <p className="text-gray-400 mt-2">No activities found in your timeline.</p>
                    </div>
                ) : (
                    
                    filteredActivities.map(item => (
                        <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                            <div className="p-3 bg-emerald-50  text-2xl text-emerald-600">
                                {item.type.toLowerCase() === 'call' && <IoMdCall />}
                                {item.type.toLowerCase() === 'text' && <LuMessageSquareText />}
                                {item.type.toLowerCase() === 'video' && <IoVideocamOutline />}
                            </div>
                            <div className="grow">
                                <p className="font-bold text-[#244D3F]">
                                    {item.type} <span className="font-normal text-[#64748B] text-sm">with {item.with}</span>
                                </p>
                                <p className="text-sm text-[#64748B] mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimeLine;

