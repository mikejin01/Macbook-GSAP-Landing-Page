import { navLinks } from "@/constants"
import { asset } from "@/lib/asset"

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={asset("/logo.svg")} alt="Apple logo" />

            <ul>
                {
                    navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src={asset("/search.svg")} alt="Search"/>
                </button>
                <button>
                    <img src={asset("/cart.svg")} alt="Cart"/>
                </button>
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar