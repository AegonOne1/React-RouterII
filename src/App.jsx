import { Routes, Route } from 'react-router'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Section from './views/Section'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Section" element={<Section/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
