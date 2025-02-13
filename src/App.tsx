import Benefits from "./Components/Benefits"
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
    </ div>
  )
}

export default App
