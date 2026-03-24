import React from 'react';
import { NavLink, Link } from 'react-router';

const Header = () => {
    return (
        <header className="bg-[#F7F8FA] w-full border-b border-gray-200">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-y-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/assets/logo.png" alt="HERO.IO" className="h-8 md:h-8" />
                    <span className="font-bold text-xl text-[#0B1A28] tracking-tight">HERO IO</span>
                </Link>

                {/* Main Navigation */}
                <nav className="flex items-center space-x-6 md:space-x-12 w-full md:w-auto order-last md:order-none justify-center">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-[#8B5CF6] font-semibold text-[15px] border-b-2 border-[#8B5CF6] pb-1" 
                            : "text-[#1F2937] font-medium text-[15px] hover:text-[#8B5CF6] pb-1 border-b-2 border-transparent transition-colors"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/apps" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-[#8B5CF6] font-semibold text-[15px] border-b-2 border-[#8B5CF6] pb-1" 
                            : "text-[#1F2937] font-medium text-[15px] hover:text-[#8B5CF6] pb-1 border-b-2 border-transparent transition-colors"
                        }
                    >
                        Apps
                    </NavLink>
                    <NavLink 
                        to="/installation" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-[#8B5CF6] font-semibold text-[15px] border-b-2 border-[#8B5CF6] pb-1" 
                            : "text-[#1F2937] font-medium text-[15px] hover:text-[#8B5CF6] pb-1 border-b-2 border-transparent transition-colors"
                        }
                    >
                        Installation
                    </NavLink>
                </nav>

                {/* Contribute Button */}
                <a 
                    href="https://github.com/Apollo-Level2-Web-Dev/Mission-Restart-A3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none px-6 rounded-md text-[15px] font-semibold h-10 min-h-10 flex items-center gap-2"
                >
                    <i className="fa-brands fa-github text-lg"></i> Contribute
                </a>
            </div>
        </header>
    );
};

export default Header;