import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  const headers = {
    Authorization: "efKmjO98NTW2P6B0yW0jwk6dgHw8H8gYKfK4zlpteXvQDi8PBHOVmnkL",
  };
  useEffect(() => {
    fetch(
      "https://api.pexels.com/v1/search?page=1&query=nature&orientation=landscape&size=large",
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchedImages(data.photos);
        console.log(data.photos);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);
  return (
    <div>
      <h1 className="bg-blue-300 flex justify-center items-center text-2xl py-3 my-3">
        3D GALLERY
      </h1>
      <div className="flex flex-row justify-start my-3">
        <Search />
        <Gallery images={fetchedImages}></Gallery>
      </div>
    </div>
  );
}

export default App;
