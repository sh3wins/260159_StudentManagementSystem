import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import AddStudent from './pages/AddStudent.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App