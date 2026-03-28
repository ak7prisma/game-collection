import { IoHeart } from "react-icons/io5";
// import { games } from "../../data/games";

export default function Card() {
  return (
    <div className="relative flex items-end w-40 h-50 bg-blue-900 bg-[url('image.png')] bg-cover bg-center rounded-xl shadow-md shadow-purple-950/50 hover:shadow-purple-950 hover:skew-x-1 hover:scale-102 duration-300">
      
      <IoHeart size={20} className="absolute top-2 right-2 text-slate-300/70 hover:text-red-600 hover:scale-120 duration-300 cursor-pointer" />
      
      <div className="relative z-10 w-full bg-slate-900/90 rounded-b-xl p-2 flex flex-col">
        
        <p className="font-semibold text-sm text-white truncate">
          Mobil Lejen
        </p>
        
        <div className="flex justify-between text-xs items-center mt-1">
          <p className="text-gray-300 truncate">
            Action RPG
          </p>
          <p className="font-bold text-green-400">
            Completed
          </p>
        </div>

      </div>
      
    </div>
  );
}