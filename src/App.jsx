import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home' 
import Courses from './pages/Courses' 
import CaseStudies from './pages/CaseStudies'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path='home' element={<Home />} />
        <Route path='courses' element={<Courses />} />
        <Route path='case-studies' element={<CaseStudies />} />
      </Route>
    </Routes>
  )
}

export default App
