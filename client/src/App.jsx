
import './App.css'
import AcademyProgress from './components/AcademyProgress'
// import Facilities from './components/Facilities'
import GetKnow from './components/GetKnow'
// import Courses from './components/Courses'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Test from './components/Test'
// import Team from './components/Team'

function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <AcademyProgress />
    {/* <Courses /> */}
    <Test />
    <GetKnow />
    {/* <Facilities /> */}
    {/* <Team/> */}
    </>
  )
}

export default App
