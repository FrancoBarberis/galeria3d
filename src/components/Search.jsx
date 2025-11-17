

export default function Search() {
    return(
        <div className="flex flex-row place-items-center">
            <input type="text" id="searchInput" placeholder="Castle, Nature, Mountain, etc.." className="border-2 bg-blue-700 rounded p-2 text-sm w-fit my-3" />
            <button className="bg-blue-500 text-white rounded p-2">Search</button>
        </div>
    )
}