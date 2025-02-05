import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/Context';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { setShowSearch, getTotalCart, token, setToken, setCartItems } = useContext(ProductContext);
    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <NavLink to="/">
                <img src={assets.logo} alt="Logo" className="w-36" />
            </NavLink>

            <ul className="flex items-center justify-center gap-7 hidden sm:flex text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-3/4 h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center justify-center gap-6">
                <NavLink to="/collection">
                    <img
                        onClick={() => setShowSearch(true)}
                        className="w-5"
                        src={assets.search_icon}
                        alt="Search"
                    />
                </NavLink>

                <div
                    className="group relative"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <img
                        onClick={token ? toggleDropdown : () => navigate('/login')}
                        className="w-5 cursor-pointer"
                        src={assets.profile_icon}
                        alt="Profile"
                    />

                    {token && (dropdownVisible || visible) && (
                        <div className="absolute dropdown-menu right-0 pt-4">
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                                <p
                                    onClick={() => {
                                        navigate('/my-order');
                                        setDropdownVisible(false);
                                    }}
                                    className="cursor-pointer hover:text-black"
                                >
                                    Orders
                                </p>
                                <p
                                    onClick={() => {
                                        logout();
                                        setDropdownVisible(false);
                                    }}
                                    className="cursor-pointer hover:text-black"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <NavLink to="/cart" className="flex relative">
                    <img className="w-5" src={assets.cart_icon} alt="Cart" />
                    <p className="cquant bg-black leading-4 w-4 absolute rounded-full text-[8px] aspect-square text-center text-white right-[-5px] bottom-[-5px]">
                        {getTotalCart()}
                    </p>
                </NavLink>

                <img
                    onClick={() => setVisible(true)}
                    className="w-5 cursor-pointer sm:hidden"
                    src={assets.menu_icon}
                    alt="Menu"
                />

                {/* Navbar for small screens */}
                <div
                    className={`flex flex-col absolute top-0 bottom-0 h-screen right-0 overflow-hidden transition-all bg-slate-100 ${
                        visible ? 'w-full' : 'w-0'
                    }`}
                >
                    <div
                        onClick={() => setVisible(false)}
                        className="flex gap-3 cursor-pointer items-center p-4"
                    >
                        <img className="rotate-180 h-4" src={assets.dropdown_icon} alt="Back" />
                        <p className="text-gray-700 font-md">Back</p>
                    </div>

                    <NavLink
                        onClick={() => setVisible(false)}
                        className="menu py-4 pl-7 border bg-white"
                        to="/"
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="menu py-4 pl-7 border bg-white"
                        to="/collection"
                    >
                        COLLECTION
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="menu py-4 pl-7 border bg-white"
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        className="menu py-4 pl-7 border bg-white"
                        to="/contact"
                    >
                        CONTACT
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
