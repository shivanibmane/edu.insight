import Admission from "./Components/Admission"
import Benefits from "./Components/Benefits"
import DetailForm from "./Components/DetailForm"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import TopCountries from "./Components/TopCountries"

function App() {

  return (
    <div className="w-full min-h-full px-4 sm:px-12 ">
      <Header />
      <Hero />
      <Benefits />
      <TopCountries />
      <Admission />
      <DetailForm />
      <Footer />
    </ div>
  )
}

export default App
