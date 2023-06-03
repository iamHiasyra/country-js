//RootLayout
import { NavLink, Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
   <div className="main-layout">
    <header className="px-10 h-12 w-full flex items-center justify-between">
        <NavLink to="/" className="flex items-center justify-center text-custom-blue-03 font-bold text-lg">WORLD</NavLink>
        <button className="p-1 h-8 flex items-center justify-center rounded-full border border-solid border-black"> 
            <span className="px-3 font-bold ">Dark Mode</span>
        </button>
    </header>
    <hr />
    <main className="px-10">
        <Outlet />
    </main>
   </div>
  )
}
