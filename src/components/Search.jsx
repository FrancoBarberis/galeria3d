

export default function Search() {
    return(
        <div className="flex flex-row place-items-center gap-2">
            <input 
                type="text" 
                id="searchInput" 
                placeholder="CASTLE, NATURE, MOUNTAIN..." 
                className="border-2 bg-blue-700 rounded p-3 text-sm w-fit my-3 text-white placeholder-blue-200 font-semibold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-400" 
            />
            <button className="bg-blue-500 text-white rounded p-3 font-bold uppercase tracking-wider hover:bg-blue-600 transition-all">SEARCH</button>
        </div>
    )
}