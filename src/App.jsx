import { useEffect, useState } from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=landmarks&per_page=15&orientation=landscape",
      {
        headers: {
          Authorization: "Client-ID TU_ACCESS_KEY_AQUI"
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          const formattedImages = data.results.map(photo => ({
            id: photo.id,
            src: {
              portrait: photo.urls.small,
              landscape: photo.urls.regular,
              large: photo.urls.full
            },
            alt: photo.alt_description || photo.description || "Beautiful place",
            photographer: photo.user.name,
            location: photo.location?.name || photo.location?.city || photo.location?.country || "Location unknown"
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
