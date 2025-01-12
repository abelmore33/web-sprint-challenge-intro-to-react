import React from "react";
import { data } from "./mocks/handlers";
import axios from "axios";
import { useEffect, useState } from "react";
import Characters from "./components/Character";
import Details from "./components/Details";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentFriendKey, setCurrentFriendKey] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetails = useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character, idx) => {
        return <Characters name={character.name} key={idx} />;
      })}
    </div>
  );
};

export default App;
