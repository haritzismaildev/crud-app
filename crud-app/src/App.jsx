import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import About from './components/About'
import Contact from './components/Contacts'
import Home from './components/Home'
import Nav from './components/Nav'
import PostList from './components/PostList'
import Posts from './components/Posts'

function App() {
  
  return (
    <>
      <div className="card">
        Selamat Datang Apps Baru Haritz React Redux Crud Application Tutorial
        <Router>
          <Nav />

          <Routes>
            <Route exact path='/' elements={ <Home />} />
            <Route exact path='about' elements={ <About />} />
            <Route exact path='contact' elements={ <Contact />} />
            <Route exact path='posts' elements={ <Posts />}>
              <Route path='postlist' elements={ <PostList />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
