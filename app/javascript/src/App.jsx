import React, { useState, useEffect } from "react";
import Card from "./card/Card.jsx";
import Axios from "axios";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  });

  const getProfiles = () => {
    Axios.get("http://localhost:3000/api/v1/users").then((resp) =>
      setProfiles(resp.data)
    );
  };
  const cards = profiles.map((p) => {
    return <Card key={p.name} name={p.name} />;
  });

  return (
    <div className="app">
      {cards}
    </div>
  );
};

export default App;
