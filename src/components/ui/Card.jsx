import { IoHeart } from "react-icons/io5";
import { gameIconLink } from "../../data";

export default function Card({title, genre, image, completeStatus, likeStatus, onLike, onComplete}) {

  const imageLink = `${gameIconLink}${image}.png`;

  return (
    <div 
      className={`relative flex items-end w-40 md:w-70 h-50 md:h-80 my-1 md:my-3 bg-purple-900 bg-cover bg-center rounded-xl shadow-md shadow-purple-950/50 hover:shadow-purple-950 hover:shadow-xl hover:scale-95 duration-300 cursor-pointer`}
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      
      <IoHeart 
        size={20} 
        className={`absolute top-3 md:top-4 right-3 md:right-4 z-20 md:scale-150 stroke-3 stroke-black ${likeStatus? "text-red-600" : "text-slate-300/70"} hover:scale-120 md:hover:scale-170 duration-300 cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          onLike();
        }}
        />
      
      <div className="relative z-10 w-full h-30 md:h-40 bg-linear-to-t from-slate-900 to-transparent via-slate-900/80 rounded-b-xl p-2 md:p-4 flex flex-col justify-end">
        
        <p className="font-semibold text-sm md:text-lg text-white truncate">
          {title}
        </p>
        
        <div className="flex justify-between text-xs md:text-base items-center mt-1">
          <p className="text-gray-300 w-15 md:w-fit truncate">
            {genre}
          </p>
          <button 
            className={`font-medium cursor-pointer ${completeStatus ? "text-green-400 hover:bg-green-400/10" : "text-yellow-400 hover:bg-yellow-400/10"} px-2 md:px-3 py-1 rounded-full md:text-sm duration-300`}
             onClick={(e) => {
              e.stopPropagation();
              onComplete();
            }}
            >
            {completeStatus? "Complete" : "On Progress"}
          </button>
        </div>

      </div>
      
    </div>
  );
}