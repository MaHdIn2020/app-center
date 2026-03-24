import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Installation = () => {
    const navigate = useNavigate();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (appId, appTitle) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        
        toast.success(`${appTitle} Uninstalled Successfully!`, {
            style: { borderRadius: '10px', background: '#333', color: '#fff' },
            icon: '🗑️',
        });
    };

    return (
        <div className="bg-[#F7F8FA] min-h-screen py-16">
            <Toaster position="top-center" />
            
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-[40px] font-bold text-[#0B1A28] mb-4">Your Installed Apps</h1>
                    <p className="text-gray-500 text-[15px]">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-4">
                    <h3 className="text-[20px] font-bold text-[#1F2937]">{installedApps.length} Apps Found</h3>
                    
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-[13px] text-gray-500 bg-white focus:outline-none focus:border-[#8B5CF6]">
                        <option value="default">Sort By Size</option>
                    </select>
                </div>

                {installedApps.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <i className="fa-solid fa-box-open text-5xl text-gray-300 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800">No Apps Installed</h3>
                        <p className="text-gray-500 mt-2 text-[15px]">You haven't installed any applications yet.</p>
                        <button onClick={() => navigate('/apps')} className="mt-8 bg-[#8B5CF6] text-white px-6 py-2 rounded-md font-semibold text-[15px]">Browse Apps</button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {installedApps.map(app => (
                            <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
                                <div 
                                    className="bg-[#E5E7EB] rounded-lg w-20 h-20 shrink-0 flex items-center justify-center cursor-pointer p-2 overflow-hidden mx-auto md:mx-0"
                                    onClick={() => navigate(`/app/${app.id}`)}
                                >
                                    <img src={app.image} alt={app.title} className="w-full h-full object-contain mix-blend-multiply opacity-50" />
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <h3 
                                        className="text-[16px] font-semibold text-[#1F2937] mb-2 cursor-pointer hover:text-[#8B5CF6] transition-colors"
                                        onClick={() => navigate(`/app/${app.id}`)}
                                    >
                                        {app.title}
                                    </h3>
                                    <div className="flex items-center justify-center md:justify-start gap-4 text-[13px] text-gray-500 font-medium">
                                        <div className="flex items-center gap-1.5 text-[#10B981]">
                                            <i className="fa-solid fa-download text-[11px]"></i> {(app.downloads / 1000000).toFixed(0)}M
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[#F97316]">
                                            <i className="fa-solid fa-star text-[11px]"></i> {app.ratingAvg}
                                        </div>
                                        <div className="text-gray-400 border-l border-gray-300 pl-4 ml-2">
                                            {app.size} MB
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                    <button 
                                        onClick={() => handleUninstall(app.id, app.title)}
                                        className="bg-[#10B981] hover:bg-[#05D588] text-white px-6 py-2.5 rounded-md font-semibold text-[13px] w-full md:w-auto transition-colors focus:outline-none"
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;
