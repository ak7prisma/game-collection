export default function Header() {
  return (
    <section id="home" className="flex flex-col items-center justify-center py-4 md:py-8 text-center">
      <div className="font-chakra font-bold leading-none tracking-tighter">
        <h2 className="text-white text-4xl md:text-7xl">
          MAIN QUEST?
        </h2>
        <h2 className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600 text-3xl md:text-8xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          COMPLETE EVERYTHING
        </h2>
      </div>
      <p className="mt-6 font-chakra text-gray-400 text-sm md:text-lg max-w-md md:max-w-2xl leading-relaxed opacity-80">
        Wake up, <span className="text-white font-semibold">Completionist.</span> Burn the backlog. 
        Track every journey, from New Game to <span className="text-purple-400">Platinum.</span>
      </p>
    </section>
  );
}