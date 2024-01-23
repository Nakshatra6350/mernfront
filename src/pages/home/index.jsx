import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
// import Sidebar from '../../components/sidebar'
import Posts from '../../components/posts'
import './index.css'
import axios from "axios"
import { useLocation } from 'react-router'


const Home = () => {

  const [posts,setPosts] = useState([])
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts/'+search)
      setPosts(res.data)
    }

    fetchPosts()
  }, [search])

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        
      </div>
    </div>
  )
}

export default Home
