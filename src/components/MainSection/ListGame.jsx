import Card from "../ui/Card";
import { games as initialGames } from "../../data/games";
import { useState } from "react";

export default function ListGame() {

  const [games, setGames] = useState(initialGames)

  const handleLike = (id) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, like: !game.like } : game
      )
    );
  };

  const handleComplete = (id) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, complete: !game.complete } : game
      )
    );
  };

  return (
    <section id="games" className="mx-3 md:mx-10 mt-7 md:mt-10 mb-25 md:mb-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 y-4 gap-4 justify-items-center">
        
        {games.map((game) => (
          <Card 
            key={game.id} 
            title={game.title} 
            genre={game.genre} 
            image={game.image} 
            completeStatus={game.complete} 
            likeStatus={game.like}
            onLike={() => handleLike(game.id)}
            onComplete={() => handleComplete(game.id)}
            />
        ))}
        
      </div>
    </section>
  );
}