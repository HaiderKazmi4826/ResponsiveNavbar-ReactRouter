import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { links } from "../constants/data";
import { useState } from "react";
import { styles } from "../constants/styles";

const Navbar = () => {
    const navActiveClass = ({ isActive}:any) => {
        return isActive ? "activeNavlink capitalize font-semibold text-blue-400 text-lg" : "capitalize font-semibold text-blue-400 text-lg";
      };

      const [isNavbarActive, setIsNavbarActive] = useState(false);
      const toggleNavbar = ()=>{
        setIsNavbarActive((currentState) => !currentState);
      }

  return (
    <nav className="px-6 w-full h-[70px] flex items-center justify-between shadow-nav relative z-[9999]">
        <Link to="/">
            <h3 className="capitalize text-[30px] font-semibold tracking-wider">
                coding <span className="inline text-blue-500">addict</span>
            </h3>
        </Link>
        <div className="md:flex hidden flex-row items-center justify-end flex-1 gap-6">
            {links.map((link)=>{
                return <NavLink  className={navActiveClass} key={link.id} to={link.url}>{link.text}</NavLink>
            })}
        </div>
        <button className="md:hidden block" onClick={()=> toggleNavbar()}>
          {isNavbarActive ? <IoClose size={30} /> : <TiThMenu size={30} />}
        </button>
       {isNavbarActive && (
        //  <div className="md:hidden flex flex-col gap-5 absolute top-[100%] left-0 w-full p-5 items-center shadow-lg transition-all">
         <div className={isNavbarActive ? styles.navbarActive : styles.navbarHidden} style={{ maxHeight: isNavbarActive ? '1000px' : '0' }}>
            {links.map((link)=>{
                return <NavLink onClick={()=> setIsNavbarActive(false)}  className={navActiveClass} key={link.id} to={link.url}>{link.text}</NavLink>
            })}
        </div>
      )}
    </nav>
  )
}

export default Navbar