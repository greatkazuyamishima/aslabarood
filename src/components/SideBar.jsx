import { NavLink } from 'react-router-dom'

export default function SideBar() {
  const categories = [
    { name: 'HOME', path: '/' },
    { name: 'PISTOLS', path: '/pistol' },
    { name: 'REVOLVER', path: '/revolver'},    
    { name: 'ASSAULT RIFLES', path: '/ar' },
    { name: 'SHOTGUNS', path: '/shotgun' },
    { name: 'SUB MACHINE GUN', path: '/smg' },
    { name: 'SNIPER RIFLES', path: '/sniper' },
    { name: 'EXPLOSIVES', path: '/explosive' },
  ]
  return (
    <div className='h-dvh bg-[#0d1117] border-r border-[#ff6a1a37] pt-8 sticky top-0 min-w-60'>
      <p className='text-[#FF6A1A] text-3xl font-bold tracking-wide px-6 mb-10 font-orbitron'>ASLA<br/>BAROOD</p>

      <p className='text-[#FF6A1A] text-xs tracking-[2px] mb-7 px-6'>CATEGORIES</p>

      <div className='flex flex-col gap-2'>
        {categories.map((category) => (
          <NavLink
            to={category.path}
            className={({ isActive }) =>
              `px-6 py-3 text-sm tracking-[1.5px] transition-colors ${
                  isActive
                  ? 'bg-[#ff631a1a] text-[#FF6A1A] font-semibold border-l-4 border-[#ff6a1a]'
                  : 'text-[#919191] hover:bg-[#ff631a14] hover:text-[#FF6A1A]'
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
