function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#2C3135] bg-[#1a1c1e]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div className="text-2xl font-semibold text-[#fa7315]">
          ASLABAROOD.COM
        </div>

        <form className="w-full lg:max-w-md">
          <label htmlFor="site-search" className="sr-only">
            Search
          </label>
          <div className="flex items-center overflow-hidden rounded-md border border-[#34393d] bg-[#2C3135] shadow-sm">
            <input
              name="search"
              type="search"
              placeholder="Search Database..."
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
