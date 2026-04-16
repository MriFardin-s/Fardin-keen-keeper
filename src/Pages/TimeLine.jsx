import React, { useContext, useState } from 'react';
import { TimelineContext } from "../context/TimeLineProvider";
import { IoMdCall } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
const TimeLine = () => {
    const { activities } = useContext( TimelineContext);
    const [filter, setFilter] = useState('All');

    const filteredActivities = filter === 'All' 
        ? activities 
        : activities.filter(a => a.type === filter);

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl text-[#1F2937] font-bold mb-6">Timeline</h1>
            
          
            <select 
                onChange={(e) => setFilter(e.target.value)}
                className="mb-8 p-2 border rounded-md bg-gray-50 text-slate-600"
            >
                <option value="All">Filter timeline</option>
                <option value="Call">Calls</option>
                <option value="Text">Texts</option>
                <option value="Video">Videos</option>
            </select>

            <div className="flex flex-col gap-4">
                {filteredActivities.map(item => (
                    <div key={item.id} className="bg-white p-5 rounded-md border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-gray-50 rounded-md">

                            {item.type === 'Call' && <IoMdCall />}
                            {item.type === 'Text' && <LuMessageSquareText />}
                            {item.type === 'Video' && <IoVideocamOutline />}
                        </div>
                        <div>
                            <p className="font-medium text-[#244D3F]">{item.type} <span className="font-normal text-[#64748B] text-sm">with {item.with}</span></p>
                            <p className="text-[18px] text-[#64748B]">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine; 