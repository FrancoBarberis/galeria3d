import { useEffect, useState } from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  
  useEffect(() => {
    fetch(
      "https://api.pexels.com/v1/search?query=famous+landmarks&per_page=15",
      {
        headers: {
          Authorization: "efKmjO98NTW2P6B0yW0jwk6dgHw8H8gYKfK4zlpteXvQDi8PBHOVmnkL"
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.photos && Array.isArray(data.photos)) {
          const formattedImages = data.photos.map(photo => ({
            id: photo.id,
            src: {
              portrait: photo.src.portrait,
              landscape: photo.src.landscape,
              large: photo.src.large2x
            },
            alt: photo.alt || "Famous landmark",
            photographer: photo.photographer,
            location: photo.alt?.split(',')[0] || "Famous Place"
          }));
          setFetchedImages(formattedImages);
          console.log(formattedImages);
        } else {
          console.error("Invalid API response:", data);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);


  return (
    <div className="relative flex flex-col bg-black w-screen min-h-screen">
      <Layout images={fetchedImages} />
    </div>
  );
}

export default App;
