import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'

function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/register'  element={<Register />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/addblog' element={<AddBlog />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App

//CTRL space to import all the components by the end of component 
//if you cant get the import might be because of lower case.
//check for . during import if not shown

