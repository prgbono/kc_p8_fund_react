import React from "react";
import "./App.css";
import { NodepopLayout } from "./components/layout/NodepopLayout.js";

// import AdvertsPage from "./components/adverts/AdvertsPage.js";
// import { LoginPage } from "./components/auth/LoginPage/index.js";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App" id="app">
      <NodepopLayout isLogged={isLogged} onHandleLogin={handleLogin} />
    </div>
  );
}

export default App;
