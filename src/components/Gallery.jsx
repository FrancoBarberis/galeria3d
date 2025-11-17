import Card from "./Card"

export default function Gallery ({images}){
   return(
    <div className="grid grid-cols-3 gap-1 w-full place-items-center">
        {images.map((image=>(
            <Card key={image.id} image={image}></Card>
        )))}
    </div>
   ) 
}