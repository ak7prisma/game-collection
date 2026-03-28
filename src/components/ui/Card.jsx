import { IoHeart } from "react-icons/io5";

export default function Card({title, genre, image, completeStatus, likeStatus}) {

  const imageLink = `https://res.cloudinary.com/dkboh1euu/image/upload/v1774705501/${image}.png`;
  return (
    <div 
      className={`relative flex items-end w-40 md:w-70 h-50 md:h-80 my-1 md:my-3 bg-purple-900 bg-cover bg-center rounded-xl shadow-md shadow-purple-950/50 hover:shadow-purple-950 hover:shadow-xl hover:scale-95 duration-300 cursor-pointer`}
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      
      <IoHeart size={20} className={`absolute top-3 md:top-4 right-3 md:right-4 md:scale-150 stroke-3 stroke-black ${likeStatus? "text-red-600" : "text-slate-300/70"} hover:text-red-600 hover:scale-120 md:hover:scale-170 duration-300 cursor-pointer`} />
      
      <div className="relative z-10 w-full h-30 md:h-40 bg-linear-to-t from-slate-900 to-transparent via-slate-900/80 rounded-b-xl p-2 md:p-4 flex flex-col justify-end">
        
        <p className="font-semibold text-sm md:text-lg text-white truncate">
          {title}
        </p>
        
        <div className="flex justify-between text-xs md:text-base items-center mt-1">
          <p className="text-gray-300 w-15 md:w-fit truncate">
            {genre}
          </p>
          <p className="font-bold text-green-400">
            {completeStatus? "On Progress" : "Completed"}
          </p>
        </div>

      </div>
      
    </div>
  );
}