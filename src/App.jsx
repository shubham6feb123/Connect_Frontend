import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div className='h-screen'>
      yoo app
      {
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      }
    </div>
  )
}

export default App;