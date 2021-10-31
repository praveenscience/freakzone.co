import React from "react";

const App = () => {
  const Images = [
    "https://i.imgur.com/PahL6NP.png",
    "https://i.imgur.com/hOmFOle.png",
    "https://i.imgur.com/c3B6qHK.png",
    "https://i.imgur.com/6Ssj5XX.png"
  ];
  return (
    <div className="App">
      <h1>Find Stuff!</h1>
      <div className="Image">
        <img src="https://i.imgur.com/PahL6NP.png" alt="Find Stuff!" />
      </div>
    </div>
  );
};

export default App;
