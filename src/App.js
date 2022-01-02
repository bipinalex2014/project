import TopBar from "./components/topbar/TopBar";
import Home from './page/home/Home'
import Single from './page/single/Single'
import Write from "./page/write/Write";
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
function App() {
  return (
    <div className="App">
        {/* <TopBar /> */}
        <Router>
        <TopBar />
        <Routes>  
          <Route path="/" exact element={<Home />}/>
          <Route path="/single" exact element={<Single />}/>
          <Route path="/write" exact element={<Write />}/>
          <Route path="/settings" exact element={<Settings />}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/register" exact element={<Register />} />
        </Routes>
        
      </Router>
      
     
    </div>
  );
}

export default App;
