import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-6 shadow-md ">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="text-2xl font-bold md:text-5xl">World Atlas</div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Navigation Links */}
        <ul className={`md:flex  gap-6 items-center  absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent  md:p-0 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : 'text-white' } to="/" onClick={() => setIsOpen(false)}><li className="py-2 px-4 md:py-0 md:px-0">Home</li></NavLink>
          <NavLink className={({ isActive }) => ` ${isActive ? 'text-red-600' : 'text-white'}`} to="/about" onClick={() => setIsOpen(false)}><li className="py-2 px-4 md:py-0 md:px-0">About</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-red-600' : 'text-white'} to="/country" onClick={() => setIsOpen(false)}><li className="py-2 px-4 md:py-0 md:px-0">Country</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-red-600' : 'text-white'} to="/contact" onClick={() => setIsOpen(false)}><li className="py-2 px-4 md:py-0 md:px-0">Contact</li></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
