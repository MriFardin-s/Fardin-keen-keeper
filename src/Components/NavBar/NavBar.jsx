import { Link, NavLink } from "react-router";
import { SlHome } from "react-icons/sl";
import { RiTimeLine } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { BsMenuButton } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo.png"
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    const navOptions = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-sm bg-green-800 text-white" : "flex items-center gap-2"}>
                    <SlHome />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={({ isActive }) => isActive ? "btn btn-sm bg-green-800 text-white" : "flex items-center gap-2"}>
                    <RiTimeLine />
                    Timeline
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) => isActive ? "btn btn-sm bg-green-800 text-white" : "flex items-center gap-2"}>
                    <IoMdStats />
                    Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <TiThMenu />
                    </div>
                    <ul className="menu dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>

                <Link to="/" className="text-xl font-bold flex items-center gap-1">
                    <img className="h-7.75 w-full" src={logo} alt="" />
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-4 font-medium ">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;