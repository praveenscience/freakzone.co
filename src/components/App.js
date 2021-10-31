import React, { useState } from "react";

const App = () => {
  const [Image, setImage] = useState(0);
  const Images = [
    "https://i.imgur.com/PahL6NP.png",
    "https://i.imgur.com/hOmFOle.png",
    "https://i.imgur.com/c3B6qHK.png",
    "https://i.imgur.com/6Ssj5XX.png"
  ];
  const HotPoints = [
    [125, 50, 205, 125],
    [330, 45, 410, 115],
    [835, 535, 860, 560],
    [0, 0, 0, 0]
  ];
  const check = (x, y, arr) => {
    const [x1, y1, x2, y2] = arr;
    return x <= x2 && x >= x1 && y <= y2 && y >= y1;
  };
  const handleImage = e => {
    const [x, y] = [
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop
    ];
    if (check(x, y, HotPoints[Image])) {
      setImage((Image + 1) % Images.length);
    }
  };
  return (
    <div className="App">
      <h1>Find Stuff!</h1>
      <div className="Image">
        <img src={Images[Image]} alt="Find Stuff!" onClick={handleImage} />
      </div>
    </div>
  );
};

export default App;
