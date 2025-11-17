import { useState } from "react";

export default function Search({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <div className="flex flex-row place-items-center gap-2">
            <div className="relative">
                <input 
                    type="text" 
                    id="searchInput" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search whatever you want.." 
                    className="border-2 border-gray-500 bg-black bg-opacity-30 rounded-full pl-11 pr-4 py-2 text-sm w-64 text-white placeholder-gray-400 font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent backdrop-blur-md" 
                />
                <svg 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    )
}