import "../Styles/Specials.css";
import {
  bruchetta,
  greekSalad,
  lemonDessert,
  chickenSouvlaki,
  stuffedGrapes,
  baklava,
} from '../Assets/icons_assets';

function Specials() {
const menuItems = [
  {
    title: "Greek Salad",
    description: "Crisp lettuce, olives, and feta cheese in a tangy vinaigrette.",
    price: "$12.99",
    image: greekSalad,
  },
  {
    title: "Bruschetta",
    description: "Grilled bread with tomato, garlic, and basil.",
    price: "$7.99",
    image: bruchetta,
  },
  {
    title: "Lemon Dessert",
    description: "Sweet and tangy lemon dessert with a flaky crust.",
    price: "$5.99",
    image: lemonDessert,
  },
  {
    title: "Stuffed Grape Leaves",
    description: "Tender grape leaves filled with rice, herbs, and lemon.",
    price: "$9.99",
    image: stuffedGrapes,
  },
  {
    title: "Chicken Souvlaki",
    description: "Grilled chicken skewers marinated in Mediterranean spices.",
    price: "$14.99",
    image: chickenSouvlaki,
  },
  {
    title: "Baklava",
    description: "Classic dessert made with layers of filo, nuts, and honey syrup.",
    price: "$6.49",
    image: baklava,
  },
];

  return (
    <section id="specials" className="specials">
      <h2>This Week's Specials!</h2>
      <div className="specials__carousel">
        {menuItems.map((item, index) => (
          <div className="specials__card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="specials__card-content">
              <div className="specials__card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Specials };
