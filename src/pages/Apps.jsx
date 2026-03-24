import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import appsData from '../data/appsData.json';
import Loading from '../components/Loading/Loading';

const Apps = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [filteredApps, setFilteredApps] = useState(appsData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            let result = appsData.filter(app => 
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (sortOrder === 'high-low') {
                result.sort((a, b) => b.downloads - a.downloads);
            } else if (sortOrder === 'low-high') {
                result.sort((a, b) => a.downloads - b.downloads);
            }

            setFilteredApps(result);
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, sortOrder]);

    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleSort = (e) => setSortOrder(e.target.value);

    return (
        <div className="bg-[#F7F8FA] min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-[40px] font-bold text-[#0B1A28] mb-4">Our All Applications</h1>
                    <p className="text-gray-500 text-[15px]">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-4">
                    <h3 className="text-[20px] font-bold text-[#1F2937]">({filteredApps.length}) Apps Found</h3>
                    
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <select 
                            className="border border-gray-300 rounded-md px-3 py-2 text-[13px] text-gray-500 bg-white focus:outline-none focus:border-[#8B5CF6]"
                            value={sortOrder}
                            onChange={handleSort}
                        >
                            <option value="default" disabled>Sort By Downloads</option>
                            <option value="high-low">High to Low</option>
                            <option value="low-high">Low to High</option>
                        </select>
                        <div className="relative w-full sm:w-64">
                            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                            <input 
                                type="text" 
                                placeholder="search Apps" 
                                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-[13px] focus:outline-none focus:border-[#8B5CF6] text-gray-700 bg-white"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="py-20"><Loading /></div>
                ) : filteredApps.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <i className="fa-solid fa-magnifying-glass text-5xl text-gray-300 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800">No Apps Found</h3>
                        <p className="text-gray-500 mt-2 text-[15px]">Try adjusting your search criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredApps.map(app => (
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
                )}
            </div>
        </div>
    );
};

export default Apps;
