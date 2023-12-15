// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.tsx';
import Posts from "./components/posts.tsx";
import AddPost from './components/addPost.tsx';
import NotFound from "./components/notFound.tsx";
import { BrowserRouter as Router, Routes, Route, Link }
    from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Router>
          <nav style={{ margin: 10 }}>
              <Link to="/" style={{ padding: 5 }}>
                  Home
              </Link>
              <Link to="/posts" style={{ padding: 5 }}>
                  Posts
              </Link>
              <Link to="/add" style={{ padding: 5 }}>
                  Add Post
              </Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/add" element={<AddPost />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  )
}

export default App
