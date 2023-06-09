// create your App component here
import React, { useState, useEffect } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      {" "}
      <img src={image} alt=" A Random Dog" />{" "}
    </div>
  );
}
