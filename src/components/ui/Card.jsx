import { IoHeart } from "react-icons/io5";
// import { games } from "../../data/games";

export default function Card() {
  return (
    <div className="relative flex items-end w-40 md:w-70 h-50 md:h-80 bg-blue-900 bg-[url('image.png')] bg-cover bg-center rounded-xl shadow-md shadow-purple-950/50 hover:shadow-purple-950 hover:shadow-xl hover:skew-1 hover:scale-102 duration-300 cursor-pointer">
      
      <IoHeart size={25} className="absolute top-2 md:top-4 right-2 md:right-4 md:scale-130 text-slate-300/70 hover:text-red-600 hover:scale-150 duration-300 cursor-pointer" />
      
      <div className="relative z-10 w-full h-30 md:h-40 bg-linear-to-t from-slate-900 to-transparent via-slate-900/80 rounded-b-xl p-2 md:p-4 flex flex-col justify-end">
        
        <p className="font-semibold text-sm md:text-lg text-white truncate">
          Mobil Lejen
        </p>
        
        <div className="flex justify-between text-xs md:text-base items-center mt-1">
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