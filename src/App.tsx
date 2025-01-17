import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Images from './components/Images/Images'
import Liked from './components/Liked/Liked'


function App() {

  return (
    <Routes>
      <Route path='home' element={<Home/>}>
        <Route path='images' element={<Images/>}/>
        <Route path='liked' element={ <Liked /> }/>
      </Route>
    </Routes>
  )
}

export default App
