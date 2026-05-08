import Hero from "../components/Hero"

function Home() {
  return (
    <section className="flex flex-1 flex-col">
      <Hero />
      <div className="px-16 py-6">
        <input placeholder="Search for guns..." className="border w-80 p-2 border-[#ff6a1a37] bg-[#0d1117] text-[#919191] placeholder:text-[#919191] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]" />
      </div>
    </section>
  )
}

export default Home
