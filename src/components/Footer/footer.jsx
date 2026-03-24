import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#0B1A28] text-white pt-12 pb-6 border-t border-gray-100/10">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    {/* Logo Section */}
                    <div>
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/assets/logo.png" alt="HERO.IO" className="h-10 filter brightness-110" />
                            <span className="font-bold text-2xl text-white tracking-tight">HERO IO</span>
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-white text-lg font-semibold mb-4">Social Links</h4>
                        <div className="flex space-x-3">
                            <a href="#" className="bg-[#e5e7eb] text-[#0B1A28] w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <i className="fa-brands fa-x-twitter text-xs"></i>
                            </a>
                            <a href="#" className="bg-[#e5e7eb] text-[#0B1A28] w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <i className="fa-brands fa-linkedin-in text-xs"></i>
                            </a>
                            <a href="#" className="bg-[#e5e7eb] text-[#0B1A28] w-7 h-7 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <i className="fa-brands fa-facebook-f text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-10 pt-6 border-t border-gray-700 max-w-5xl mx-auto text-center text-xs text-gray-300 font-normal">
                    Copyright © 2025 - All right reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;