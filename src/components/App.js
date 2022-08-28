import React, { useState } from "react";
import GifListContainer from "./GifListContainer";

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {
  const [searchTerm, setSearch] = useState("");
  return (
    <div>
      <NavBar color="black" title="Giphy Search" setSearch={setSearch}/>
      {searchTerm ? <GifListContainer searchTerm={searchTerm}/> : null}
    </div>
  );
}

export default App;
