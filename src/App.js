import React, { useContext } from 'react'
import TopBar from './components/topbar'
import Home from './pages/home'
import Single from './pages/single'
import Write from './pages/write'
import Settings from './pages/settings'
import Login from './pages/login'
import Register from './pages/register'
import { Route, Routes} from 'react-router-dom'
import { Context } from './context/Context'


const App = () => {
  const {user} = useContext(Context)
  return (
    
      <>
        <TopBar />
      <Routes>
        <Route exact path="/"  element = {<Home />} />
         
        <Route path="/register" element = {user ? <Home /> : <Register />} />
         
        <Route path="/login" element = {user ? <Home /> : <Login />} />
         
        <Route path="/write" element = {user ? <Write /> : <Register />} />
          
        <Route path="/settings" element = {user ? <Settings /> : <Register />} />

        {/* <Route path="/posts" element = {<Home />} /> */}
         
        <Route path="/post/:postId" element = {<Single />} />
         
      </Routes>
      </>
      
  
  )
}

export default App
