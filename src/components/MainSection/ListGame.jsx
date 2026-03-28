import Card from "../ui/Card";
import { games } from "../../data/games";

export default function ListGame() {

  return (
    <section className="mx-3 md:mx-10 mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        
        {games.map((game) => (
          <Card key={game.id} title={game.title} genre={game.genre} image={game.image} completeStatus={game.complete} likeStatus={game.like}/>
        ))}
        
      </div>
    </section>
  );
}