import React from 'react';
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <h1 className="text-6xl font-bold text-[#8B5CF6]">404</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page not found</h2>
            <p className="mt-2 text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
            <p className="mt-2 text-sm text-red-500">{error?.statusText || error?.message}</p>
            <Link to="/" className="mt-6 btn bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-none rounded-lg px-8">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
