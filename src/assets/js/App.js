import menu from "../logos/menu-top.svg";
import ihLogo from "../logos/ironhack-logo.svg";
import "../css/App.css";

const arrOfItems = [
  {
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
    image: "/images/icon1.png",
  },
  {
    title: "Components",
    description: "Build encapsulated components that manage their state.",
    image: "/images/icon2.png",
  },
  {
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
    image: "/images/icon3.png",
  },
  {
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers.",
    image: "/images/icon4.png",
  },
];

function ItemCard(props) {
  return (
    <div className="container-card">
      {props.items.map((item) => {
        return (
          <div key={item.image} className="item-card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <img src={ihLogo} alt="Ironhack Logo" />
          <img src={menu} alt="Burger Menu" />
        </nav>
        <div className="content">
          <div className="text">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
          </div>
          <a href="#App">Awesome!</a>
        </div>
      </div>

      <ItemCard items={arrOfItems} />
    </>
  );
}

export default App;
