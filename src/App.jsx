import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Search from "./components/Search";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  const headers = {
    Authorization: "efKmjO98NTW2P6B0yW0jwk6dgHw8H8gYKfK4zlpteXvQDi8PBHOVmnkL",
  };
  useEffect(() => {
    fetch(
      "https://api.pexels.com/v1/search?page=1&query=nature&mountain=portrait&size=large",
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
    <div className="relative flex flex-col bg-black w-screen min-h-screen text-white">
      <Search />
      <Slider images={fetchedImages} />
    </div>
  );
}

export default App;
