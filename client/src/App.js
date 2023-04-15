import './App.css';
import {Route, Routes} from "react-router-dom"
import Layout from './Layout';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    
      <Routes basename={process.env.PUBLIC_URL}>
      {/* each has a template header taken from layout */}
        <Route path="/" element={<Layout/>}>
          {/* add specifics for each page */}
          <Route index element={<Home/>}/>
          <Route path = "/projects" element={<Projects/>}/>
          <Route path = "/about" element={<About/>}/>

        </Route>
      </Routes>
  );
}

export default App;
