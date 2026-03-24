import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import appsData from '../data/appsData.json';
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [app, setApp] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const foundApp = appsData.find(a => a.id === parseInt(id));
        if (foundApp) {
            setApp(foundApp);
            const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
            const alreadyInstalled = installedApps.some(installed => installed.id === foundApp.id);
            setIsInstalled(alreadyInstalled);
        } else {
            setApp(undefined);
        }
    }, [id]);

    const handleInstall = () => {
        if (!app || isInstalled) return;

        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        installedApps.push(app);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        
        setIsInstalled(true);
        toast.success(`${app.title} Installed Successfully!`, {
            style: { borderRadius: '10px', background: '#333', color: '#fff' },
        });
    };

    if (app === undefined) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center px-4 bg-[#F7F8FA] min-h-screen">
                <i className="fa-solid fa-ghost text-6xl text-gray-300 mb-6"></i>
                <h2 className="text-3xl font-bold text-gray-800">App Not Found</h2>
                <button onClick={() => navigate('/apps')} className="mt-8 btn bg-[#8B5CF6] text-white border-none px-8 rounded-xl">Browse All Apps</button>
            </div>
        );
    }

    if (!app) return null;

    // We will build the chart with simple divs for perfect recreation of Figma
    const maxCount = Math.max(...app.ratings.map(r => r.count));
    const reversedRatings = [...app.ratings].reverse();

    return (
        <div className="bg-[#F7F8FA] min-h-screen py-12">
            <Toaster position="top-center" />
            
            <div className="container mx-auto px-4 max-w-5xl bg-white shadow-sm border border-gray-100 p-8 md:p-12 rounded-xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
                    <div className="w-full md:w-[350px] aspect-square bg-[#F9FAFB] border border-gray-100 flex items-center justify-center p-10 shrink-0 mx-auto md:mx-0">
                        <img src={app.image} alt={app.title} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" />
                    </div>
                    
                    <div className="flex-grow w-full">
                        <h1 className="text-3xl md:text-[34px] font-bold text-[#0B1A28] leading-tight">{app.title}</h1>
                        <p className="text-[#6B7280] text-[15px] mt-2 mb-8">Developed by <span className="text-[#8B5CF6] font-semibold">{app.companyName}</span></p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-8 max-w-sm border-b border-gray-100 pb-8">
                            <div>
                                <i className="fa-solid fa-download text-[#10B981] text-2xl mb-2"></i>
                                <p className="text-xs text-gray-500 mb-1">Downloads</p>
                                <p className="text-2xl font-bold text-[#1F2937]">{(app.downloads / 1000000).toFixed(0)}M</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-star text-[#F97316] text-2xl mb-2"></i>
                                <p className="text-xs text-gray-500 mb-1">Average Ratings</p>
                                <p className="text-2xl font-bold text-[#1F2937]">{app.ratingAvg}</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-comment-dots text-[#8B5CF6] text-2xl mb-2"></i>
                                <p className="text-xs text-gray-500 mb-1">Total Reviews</p>
                                <p className="text-2xl font-bold text-[#1F2937]">{(app.reviews / 1000).toFixed(0)}K</p>
                            </div>
                        </div>

                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`px-6 py-3 rounded-md font-semibold transition-colors disabled:opacity-50 text-sm ${
                                isInstalled 
                                ? 'bg-gray-200 text-gray-600' 
                                : 'bg-[#10B981] hover:bg-[#05D588] text-white'
                            }`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="mb-12 border-t border-gray-100 pt-10">
                    <h2 className="text-[20px] font-bold text-[#0B1A28] mb-6">Ratings</h2>
                    <div className="w-full max-w-3xl space-y-4">
                        {reversedRatings.map(rating => (
                            <div key={rating.name} className="flex items-center gap-4">
                                <span className="text-gray-500 text-sm whitespace-nowrap w-[40px] text-right">{rating.name}</span>
                                <div className="flex-grow h-6 bg-transparent relative">
                                    <div 
                                        className="h-full bg-[#F97316]" 
                                        style={{ width: `${(rating.count / maxCount) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between pl-[56px] text-gray-400 text-xs mt-2 border-t border-gray-200 pt-2">
                            <span>0</span>
                            <span>{Math.round(maxCount / 4)}</span>
                            <span>{Math.round(maxCount / 2)}</span>
                            <span>{Math.round((maxCount * 3) / 4)}</span>
                            <span>{maxCount}</span>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="border-t border-gray-100 pt-10">
                    <h2 className="text-[20px] font-bold text-[#0B1A28] mb-6">Description</h2>
                    <p className="text-gray-500 leading-relaxed text-[15px] whitespace-pre-wrap">{app.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
