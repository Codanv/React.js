import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then(data => data.json())
      .then(data => setImages(data));
  });

  return (
    <div className="app">
      <header>
        <h1>Image Library</h1>
      </header>
      <div className="library">
        {images.map(image => (
          <Image
            key={image.id}
            url={image.download_url}
            author={image.author}
          />
        ))}
      </div>
      <footer>
        <p>footer section</p>
      </footer>
    </div>
  );
}

function Image({ url, author }) {
  return (
    <a href={url}>
      <figure>
        <img src={url} alt={author} />
        <figcaption>{author}</figcaption>
      </figure>
    </a>
  );
}

export default App;
