import StoriesBar from "./components/StoriesBar";
import ProgressBar from "./components/ProgressBar";
import { Heart, MessageCircleMore } from "lucide-react";

function App() {

  return (
    <>
    <header className="flex justify-between items-center py-4 px-10">
      <h1 className=" text-4xl font-bold cookie-regular">Instagram</h1>
      <div className="flex gap-10">
        <button className="cursor-pointer">
        <Heart />
        </button>
        <button className="cursor-pointer">
        <MessageCircleMore />
        </button>
      </div>
    </header>
    <main>
      <StoriesBar />
 
    </main>
    </>
  )
}

export default App
