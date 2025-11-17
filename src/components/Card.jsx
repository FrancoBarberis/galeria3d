

export default function Card({image}) {
    return(
        <div className="card max-w-20vw h-auto flex items-center justify-center border-2 border-gray-300 rounded-lg">
            <img className="object-cover" src={image.src.large} alt={image.alt} />
        </div>
    )
}