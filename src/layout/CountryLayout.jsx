import { Link, Outlet } from "react-router-dom"
export default function CountryLayout() {
  return (
    <>
        <Link to="/">
            <button>Back</button>
        </Link>
        <section>
            <Outlet />
        </section>
    </>
  )
}
