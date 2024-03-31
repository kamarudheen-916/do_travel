import Naves from "../Naves/Naves"
import Logo from "../Logo/Logo"
import './NavBarDesk.css'
function NavBarDesk() {
  return (
    <div className="NavBarForDesk bg-stone-200 h-dvh flex flex-col ">
        <Logo/>
        <Naves  icon={<i className="fa-solid fa-house text-2xl"></i>} iconName="Home" />
        <Naves  icon={<i className="fa-solid fa-magnifying-glass text-2xl"></i>} iconName="Search" />
        <Naves   icon={<i className="fa-solid fa-bell text-2xl"></i>} iconName="Notification" />
        <Naves  icon={<i className="fa-solid fa-envelope text-2xl"></i>} iconName="Message" />
        <Naves  icon={<i className="fa-solid fa-square-plus text-2xl"></i>} iconName="Create" />
        <Naves  icon={<i className="fa-solid fa-paperclip text-2xl"></i>} iconName="Bookings" />
        <Naves  icon={<i className="fa-solid fa-moon text-2xl"></i>} iconName="Theme" />
        {/* <Naves  icon={<i className="fa-solid fa-sun text-2xl"></i>} iconName="Theme" /> */}
    </div>
  )
}

export default NavBarDesk
