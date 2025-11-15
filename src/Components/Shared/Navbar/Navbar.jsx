import { Link } from "react-router-dom";
import navimg from "../../../assets/images/Nest.png"
import hotd from "../../../assets/images/Group.png"

const Navbar = () => {

    const navLinks = [
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/shop'>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Content</Link></li>
            <li><Link to="/menu">Mega Menu</Link></li>
            <li><Link>Pages</Link></li>
        </>
    ]

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-[120px]" src={navimg} alt="" />
                    <div className="flex gap-1 ml-2">
                        <img className="w-[20px] h-[20px]" src={hotd} alt="" />
                        <a className="text-sm">Hot Deals</a>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu ml-24 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-400">Login</a>
            </div>
        </div>

    );
};

export default Navbar;