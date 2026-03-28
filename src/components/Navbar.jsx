import { IoPerson } from "react-icons/io5";
import { navItems } from "../data/navItems";

export default function Navbar() {
  return (
    <nav className="font-rajdhani">
      <div className="fixed top-0 left-0 right-0 flex py-5 px-5 md:px-10 justify-between items-center bg-slate-900/90">
        <div className="flex items-center gap-2 hover:skew-1 duration-300 cursor-pointer">
          <img src="public/Logo.png" alt="Logo" className="w-10" />
          <p className="text-xl font-bold tracking-widest hover:text-purple-400 duration-300">
            Game Lib
          </p>
        </div>
        
        <ul className="hidden md:flex items-center gap-25 text-lg font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 hover:text-purple-400 duration-300 tracking-widest cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <IoPerson
          size={25}
          className="hover:text-purple-400 duration-300 hover:scale-120 cursor-pointer"
        />
      </div>

      <ul className="fixed md:hidden flex justify-center bottom-2 left-4 right-4 h-15 rounded-4xl bg-slate-700 backdrop-blur-lg p-2 items-center gap-20">
        {navItems.map((item) => {
          const Icon = item.icon; 
          return (
            <li key={item.id} className="cursor-pointer">
              <Icon
                size={20}
                className="hover:text-purple-400 duration-300 hover:scale-120"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}