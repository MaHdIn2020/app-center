import React from 'react';
import { Link, useNavigate } from 'react-router';
import appsData from '../data/appsData.json';

const Home = () => {
    const navigate = useNavigate();
    const topApps = appsData.slice(0, 8); // Display 8 apps

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            {/* Banner Section */}
            <section className="pt-16 pb-0 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 z-10 relative">
                    <h1 className="text-4xl lg:text-[56px] font-bold text-[#0B1A28] tracking-tight leading-tight">
                        We Build <br className="hidden lg:block" />
                        <span className="text-[#8B5CF6]">Productive</span> Apps
                    </h1>
                    <p className="mt-6 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-[#0B1A28] px-6 py-2.5 rounded-md font-semibold text-sm shadow-sm transition-colors cursor-pointer">
                            <i className="fa-brands fa-google-play text-green-500 text-lg"></i> Google Play
                        </button>
                        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-[#0B1A28] px-6 py-2.5 rounded-md font-semibold text-sm shadow-sm transition-colors cursor-pointer">
                            <i className="fa-brands fa-app-store-ios text-blue-500 text-xl"></i> App Store
                        </button>
                    </div>
                </div>
                
                {/* Hero Phone Image */}
                <div className="mt-12 relative z-10 flex justify-center px-4">
                    <img src="/assets/hero.png" alt="Hero Phone" className="max-w-[80%] md:max-w-md -mb-32 relative z-10 drop-shadow-2xl" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#8B5CF6] text-white pt-40 pb-20 mt-0 relative z-0">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-[36px] font-bold mb-12">Trusted By Millions, Built For You</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center">
                            <p className="text-[13px] text-purple-200 mb-2">Total Downloads</p>
                            <h3 className="text-[56px] font-bold mb-2 leading-none">29.6M</h3>
                            <p className="text-[11px] text-purple-200">21% More Than Last Month</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-[13px] text-purple-200 mb-2">Total Reviews</p>
                            <h3 className="text-[56px] font-bold mb-2 leading-none">906K</h3>
                            <p className="text-[11px] text-purple-200">46% More Than Last Month</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-[13px] text-purple-200 mb-2">Active Apps</p>
                            <h3 className="text-[56px] font-bold mb-2 leading-none">132+</h3>
                            <p className="text-[11px] text-purple-200">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Apps Section */}
            <section className="py-20 bg-[#F7F8FA]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-[38px] font-bold text-[#0B1A28]">Trending Apps</h2>
                        <p className="text-gray-500 mt-3 text-[15px]">Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topApps.map(app => (
                            <div 
                                key={app.id} 
                                onClick={() => navigate(`/app/${app.id}`)}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer overflow-hidden p-3 hover:shadow-md transition-shadow"
                            >
                                <div className="bg-[#E5E7EB] rounded-lg aspect-[5/6] w-full mb-4 flex items-center justify-center overflow-hidden">
                                     <img src={app.image} alt={app.title} className="w-1/2 h-1/2 object-contain mix-blend-multiply opacity-50" />
                                </div>
                                <h3 className="text-[15px] font-semibold text-[#1F2937] mb-3 line-clamp-1">{app.title}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-[#10B981] bg-[#D1FAE5] px-2.5 py-1 rounded-md text-[13px] font-semibold">
                                        <i className="fa-solid fa-download text-[11px]"></i> {(app.downloads / 1000000).toFixed(0)}M
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[#F97316] bg-[#FFEDD5] px-2.5 py-1 rounded-md text-[13px] font-semibold">
                                        <i className="fa-solid fa-star text-[11px]"></i> {app.ratingAvg}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <Link to="/apps" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-10 py-3 rounded-md font-semibold transition-colors text-sm">
                            Show All
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;