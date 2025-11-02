import React from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import LikedVideos from './pages/LikedVideos.jsx'
import Subscription from './pages/Subscription.jsx'
import Shorts from './pages/Shorts.jsx'
import History from './pages/History.jsx'
import WatchLater from './pages/WatchLater.jsx'
import PlayList from './pages/PlayList.jsx'
import YourCourses from './pages/YourCourses.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Layout from './components/Layout.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/history" element={<History />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/playlists" element={<PlayList />} />
        <Route path="/courses" element={<YourCourses />} />
        </Route>
      </Routes>
    </Router>
  )
}




export default App;
   

