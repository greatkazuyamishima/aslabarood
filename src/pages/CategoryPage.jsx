import { useParams } from 'react-router-dom'
import AslaBaroodCard from '../components/AslaBaroodCard'
import data from '../../data.json'

function CategoryPage() {
  const { type } = useParams()
  const filteredData = data.filter((item) => item.typeId === type)

  const categories = [
    { name: 'PISTOLS', path: '/pistol' },
    { name: 'REVOLVER', path: '/revolver'},    
    { name: 'ASSAULT RIFLES', path: '/ar' },
    { name: 'SHOTGUNS', path: '/shotgun' },
    { name: 'SUB MACHINE GUN', path: '/smg' },
    { name: 'SNIPER RIFLES', path: '/sniper' },
    { name: 'EXPLOSIVES', path: '/explosive' },
  ]

  return (
    <section className="flex flex-1 flex-col px-16 py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-[2px] text-[#FF6A1A] uppercase">
        {categories.find((cat) => cat.path.slice(1) === type)?.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <AslaBaroodCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default CategoryPage
