import { Route, Routes } from 'react-router-dom'
import Home from '../components/PageComponents/Home/Home'
import Skills from '../components/PageComponents/Skills/Skills'
import Education from '../components/PageComponents/Education/Education'
import Projects from '../components/PageComponents/Projects/Projects'
import Contact from '../components/PageComponents/Contact/Contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default AppRoutes
