import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
const Navbar = () => {

    // handle menu icon 
    const [open,setOpen] = useState(false);

    return (
        <div className="bg-teal-400">
        <div className="lg:flex justify-between w-10/12 mx-auto py-3 items-center">
            <div className="flex justify-between items-center text-black">
                <h1>LOGO</h1>
            <div onClick={() => setOpen(!open)}>
                {
                    open ? <IoMdCloseCircle  className="lg:hidden text-4xl"/> : <RiMenuUnfoldFill className="lg:hidden text-4xl"/>
                }
                <ul className={`absolute duration-1000 mt-5 font-bold text-black -ml-20 
                rounded-lg mb-3
                     bg-pink-600 p-5 ${open ? 'top-12' : '-top-60'}`}>
                <a href="https://daisyui.com/docs/install/">Home</a>
                <p>Home</p>
                <p>Content</p>
                <p>Blog</p>
                </ul>
            </div>
            </div>
            <div className="lg:flex gap-5 items-center font-bold hidden text-black">
                <a href="https://daisyui.com/docs/install/">Home</a>
                <a>Home</a>
                <a>Content</a>
                <a>Blog</a>
                <div className="lg:flex items-center gap-2">
                <input className="border p-2 rounded-full bg-yellow-100" type="search" placeholder="Type your keyword" /><FaSearch type="button"/>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;