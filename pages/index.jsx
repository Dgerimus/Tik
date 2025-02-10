import { Game } from "../components/game/game";
import { Header } from "../components/header/header";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Game />
    </div>
  );
}
