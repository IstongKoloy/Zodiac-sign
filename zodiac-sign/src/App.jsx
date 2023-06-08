import { Route, Routes } from "react-router-dom"

import Hero from "./components/pages/hero/Hero"
import Zodiac from './components/pages/zodiac/Zodiac'
import MainLayout from './components/layouts/MainLayout'
import NotFound from './components/pages/notfound/NotFound'

function App() {

  return (
    <div className="main">
      {/* Routes */}
      <Routes>
          <Route path="/" element={<MainLayout />} >
              <Route path="/" element={<Hero />} />
              <Route path="/zodiac" element={<Zodiac />} />
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Background */}
      <div className="background-container">
        {/* <img src={HeroBG} alt="Moon" /> */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

    </div>
  )
}

export default App
