import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-white">
            <h1 className="text-9xl font-extrabold mb-6">404</h1>
            <p className="text-xl mb-4 text-center text-gray-800 px-4 sm:px-8">
                Oops! The page you are looking for cannot be found.
            </p>
            <Link href="/">
                <button className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Return Home
                </button>
            </Link>
        </div>
    )
}

export default NotFound