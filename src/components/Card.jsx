

export default function Card({image}) {
    return(
        <div className="card flex items-center justify-center border-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden group">
            <img className="object-cover aspect-3/4 max-w-auto" src={image.src.portrait} alt={image.alt} />
        </div>
    )
}