import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">
                GitHub search
                (<a href="https://www.youtube.com/watch?v=lkbm-zlcFvs" target="_blank" className="text-green-400">
                    https://www.youtube.com/watch?v=lkbm-zlcFvs
                </a>)
            </h3>
            <span>
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
        </nav>
    );
}
