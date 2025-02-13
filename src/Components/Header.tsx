import logo from "../assets/Edu.insight-logo.png"
const Header = () => {
  return (
    <div className="flex lg:flex-1  my-4 ">
      <img
        alt="Logo"
        src={logo}
        className="w-24 md:w-32"
      />
    </div>
  )
}

export default Header
