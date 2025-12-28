import Home from "./Home/Home"
import { Routes, Route } from "react-router-dom"
import Try from "./Pages/Try"
import Reroute from "./Pages/Reroute"

function App() {


  return (
    <div className='p-3 '>
          <div className='border p-8'>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/try" element={<Try/>}/>
      <Route path="/reroute" element={<Reroute/>}/>
    
  </Routes>
  </div>
  </div>

)
}

export default App
