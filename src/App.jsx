import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet animal="Dog" name="Rupert" breed="Great Dane" />
    <Pet animal="Bird" name="BB" breed="Budgy" />
    <Pet animal="Cat" name="Doink" breed="Moggy" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
