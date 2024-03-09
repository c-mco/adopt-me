const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Rupert",
      breed: "Great Dane",
    }),
    React.createElement(Pet, { animal: "Cat", name: "Doink", breed: "Moggy" }),
    React.createElement(Pet, { animal: "Bird", name: "BB", breed: "Budgy" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));