import React from "react";
import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import { NodepopLayout } from "./components/layout/NodepopLayout.js";
import { LoginPage } from "./components/auth";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App" id="app">
      <AdvertsPage />
      <NodepopLayout />
      <LoginPage onLogin={handleLogin} />
    </div>
  );
}

export default App;
