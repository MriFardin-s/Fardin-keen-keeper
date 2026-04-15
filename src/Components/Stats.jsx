import React from 'react';

const Stats = () => {
    return (
      
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> 
            
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 italic">
                    Friends to keep close in your life
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                <button className="bg-[#244D3F] hover:bg-emerald-900 text-white font-semibold py-3 px-6 rounded-md flex items-center mx-auto transition-colors duration-200">
                    <span className="mr-2 text-xl">+</span> Add a Friend
                </button>
            </div>

            
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                
                <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 py-8 text-center">
                    <div className="text-3xl font-bold text-[#244D3F]">10</div>
                    <div className="text-sm font-medium text-[#64748B] mt-1">Total Friends</div>
                </div>

                <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 py-8 text-center">
                    <div className="text-3xl font-bold text-[#244D3F]">3</div>
                    <div className="text-sm font-medium text-[#64748B] mt-1">On Track</div>
                </div>

                <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 py-8 text-center">
                    <div className="text-3xl font-bold text-[#244D3F]">6</div>
                    <div className="text-sm font-medium text-[#64748B] mt-1">Need Attention</div>
                </div>

                <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100 py-8 text-center">
                    <div className="text-3xl font-bold text-[#244D3F]">12</div>
                    <div className="text-sm font-medium text-[#64748B] mt-1">Interactions This Month</div>
                </div>

            </div>
            
        </div>
    );
};

export default Stats;