import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBook from './users/pages/ViewBook'
import Profile from './users/pages/Profile'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import AdminDashboard  from './admin/pages/AdminDashboard'
import ResourceAdmin  from './admin/pages/ResourceAdmin'
import CareerAdmin  from './admin/pages/CareerAdmin'
import SettingAdmin  from './admin/pages/SettingAdmin'


function App() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 4000)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/all-books' element={<AllBooks/>} />
        <Route path='/books/id:/view' element={<ViewBook/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='careers' element={<Careers/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>} />
        <Route path='admin-resources' element={<ResourceAdmin/>} />
        <Route path='admin-careers' element={<CareerAdmin/>} />
        <Route path='admin-settings' element={<SettingAdmin/>} />
      </Routes>
    </>
  )
}

export default App
