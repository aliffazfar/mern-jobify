import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Error, Register } from './pages'
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>dashboard</div>} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
