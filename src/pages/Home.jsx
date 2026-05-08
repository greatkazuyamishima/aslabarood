import AslaBaroodCard from "../components/AslaBaroodCard"
import Hero from "../components/Hero"
import data from "../../data.json"
import { useState } from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <section className="flex flex-1 flex-col">
      <Hero />
      <div className="px-16 py-6">
        <input 
          placeholder="Search for guns..." 
          className="border w-80 p-2 border-[#ff6a1a37] bg-[#0d1117] text-[#919191] placeholder:text-[#919191] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <AslaBaroodCard key={item.id} data={item} />
          ))} 
        </div>
      </div>
    </section>
  )
}

export default Home
