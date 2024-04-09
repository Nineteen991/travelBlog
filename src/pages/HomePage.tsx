import Hero from "../components/Hero"
import InTheBeginning from "../components/InTheBeginning"
import CountrySelector from "../components/CountrySelector"

export default function HomePage() {
  return (
    <div className="homePage">
      <Hero />
      <InTheBeginning />
      <CountrySelector />
    </div>
  )
}