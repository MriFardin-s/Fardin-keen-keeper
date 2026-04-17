import React, { useContext } from 'react';
import { useParams } from "react-router";
import useFriends from "../hooks/useFriends";
import { BeatLoader } from "react-spinners";
import { FaPhoneAlt, FaRegCommentDots, FaVideo, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { TimelineContext } from '../context/TimeLineProvider';
import { toast } from 'react-toastify';

const Details = () => {
    const { id } = useParams();
    const { friends, loading } = useFriends();
    const { addActivity } = useContext(TimelineContext);

    const expectedFriend = friends.find((friend) => friend.id === Number(id));

    const statusStyles = {
        'overdue': 'bg-red-500 text-white',
        'almost due': 'bg-orange-400 text-white',
        'on-track': 'bg-green-700 text-white'
    };

    const handleAction = (type) => {
        addActivity(type, expectedFriend.name);
        toast.success(`${type} added to TimeLine!`);
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-[80vh] w-full">
                <BeatLoader size={15} color="#244D3F" />
                <p className="mt-4 text-slate-500 font-medium">Loading details...</p>
            </div>
        );
    }

    if (!expectedFriend) {
        return <div className="text-center mt-20 font-bold text-red-500 text-xl">Friend not found!</div>;
    }


    const currentStatus = expectedFriend.status.toLowerCase();
    const activeClass = statusStyles[currentStatus] || 'bg-gray-100 text-gray-600';

    return (
        <div className="bg-gray-50 p-4 md:p-10 pb-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                        <img
                            src={expectedFriend.picture}
                            alt={expectedFriend.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-50 object-cover"
                        />
                        <h2 className="text-2xl font-bold text-[#1F2937]">{expectedFriend.name}</h2>

                        <div className="flex flex-col gap-2 mt-4 items-center">

                            <span className={`px-3 py-2 text-[10px] font-bold rounded-md ${activeClass}`}>
                                {expectedFriend.status}
                            </span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-md uppercase">
                                {expectedFriend.tags?.[0] || "FAMILY"}
                            </span>
                        </div>

                        <p className="text-[#64748B] italic mt-6 text-sm">{expectedFriend.bio}</p>
                        <p className="text-[#64748B] text-[14px] mt-2 font-normal tracking-tight">{expectedFriend.email}</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-white hover:bg-gray-50 text-[#1F2937] font-medium py-4 border border-gray-100 flex items-center justify-center gap-2 shadow-sm transition">
                            <FaRegBellSlash /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white hover:bg-gray-50 text-[#1F2937] font-medium py-4 border border-gray-100 flex items-center justify-center gap-2 shadow-sm transition">
                            <FiArchive /> Archive
                        </button>
                        <button className="w-full bg-white hover:bg-red-50 text-red-500 font-medium py-4 border border-gray-100 flex items-center justify-center gap-2 shadow-sm transition">
                            <FaTrashAlt size={14} /> Delete
                        </button>
                    </div>
                </div>


                <div className="md:col-span-8 flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-semibold text-[#244D3F] mb-1">{expectedFriend.days_since_contact}</div>
                            <div className="text-[18px] text-[#64748B] font-normal">Days Since Contact</div>
                        </div>
                        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-semibold text-[#244D3F] mb-1">{expectedFriend.goal}</div>
                            <div className="text-[18px] text-[#64748B] font-normal">Goal (Days)</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
                            <div className="text-3xl font-semibold text-[#244D3F] leading-tight mb-1">{expectedFriend.next_due_date}</div>
                            <div className="text-[18px] text-[#64748B] font-normal">Next Due</div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100 relative">
                        <button className="absolute top-8 right-8 text-[10px] bg-gray-50 px-4 py-1.5 rounded-lg text-[#1F2937] font-bold border border-gray-100 hover:bg-gray-100">Edit</button>
                        <h3 className="text-xl font-bold text-[#244D3F] mb-4">Relationship Goal</h3>
                        <p className="text-[#64748B] text-normal ">Connect every <span className="font-bold text-[#1F2937]">{expectedFriend.goal} days</span></p>
                    </div>

                    <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100">
                        <h3 className="text-xl font-medium text-[#244D3F] mb-8">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-8">
                            <button onClick={() => handleAction('Call')} className="flex flex-col items-center py-10 bg-gray-50 hover:bg-green-50 rounded-md transition-all gap-3 border border-transparent hover:border-green-100 group">
                                <FaPhoneAlt className="text-[#64748B] text-xl group-hover:text-green-600" />
                                <span className="text-sm font-normal text-[#1F2937]">Call</span>
                            </button>
                            <button onClick={() => handleAction('Text')} className="flex flex-col items-center py-10 bg-gray-50 hover:bg-green-50 rounded-md transition-all gap-3 border border-transparent hover:border-green-100 group">
                                <FaRegCommentDots className="text-[#64748B] text-xl group-hover:text-green-600" />
                                <span className="text-sm font-normal text-[#1F2937]">Text</span>
                            </button>
                            <button onClick={() => handleAction('Video')} className="flex flex-col items-center py-10 bg-gray-50 hover:bg-green-50 rounded-md transition-all gap-3 border border-transparent hover:border-green-100 group">
                                <FaVideo className="text-[#64748B] text-xl group-hover:text-green-600" />
                                <span className="text-sm font-normal text-[#1F2937]">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;