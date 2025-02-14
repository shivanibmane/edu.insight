import { Link } from "react-scroll"
import logo from "../assets/Edu.insight-logo.png"
const Header = () => {
  return (
    <div className="flex  justify-between items-center mb-4 shadow-xl p-3 ">
      <img
        alt="Logo"
        src={logo}
        className="w-24 md:w-32"
      />
      <div className="hidden sm:block"  >
        <ul className="flex list-none gap-6 cursor-pointer ">
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="herosection"
              className="text-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link


              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="keybenefits"

            >
              Key Benefits
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="admission"
            >
              Admission
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
