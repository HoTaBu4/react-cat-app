import { Route,  BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Images from './components/Images/Images'
import Liked from './components/Favorite/Favorite'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='images' element={<Images/>}/>
          <Route path='Favorite' element={ <Liked /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
