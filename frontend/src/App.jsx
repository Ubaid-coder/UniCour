import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./components/Hero.jsx"
import { Courses } from "./components/Courses.jsx"
import { Register } from "./components/Register.jsx"
import { Footer } from "./components/Footer.jsx"


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Courses />
    <Register />
    <Footer />
    </>
  )
}

export default App