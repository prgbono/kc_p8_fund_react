import './App.css';
// import AdvertsPage from './components/adverts/AdvertsPage';
// import { NodepopLayout } from './components/layout/NodepopLayout.js'
import { LoginPage } from './components/auth'


function App() {
  return (
    <div className="App" id='app'>
        {/* <AdvertsPage/> */}
        {/* <NodepopLayout /> */}
        <LoginPage />
    </div>
    
  );
}

export default App;
