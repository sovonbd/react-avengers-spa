import PropTypes from "prop-types";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const selectItem = (item) => {
    const isSelectItem = cartItem.find((selectItem) => selectItem.id == item.id);
    if (isSelectItem) {
      alert("items already exist");
      return;
    }
    setCartItem([...cartItem, item]);

    let expenses = item.salary;
    cartItem.map((selectItem) => {
      expenses += selectItem.salary;
    });
    setExpenses(expenses);
  };
  return (
    <div
      className="bg-blend-overlay flex flex-col lg:flex-row gap-5 text-white container p-10"
      style={{
        background: `url("https://i.ibb.co/JB1y0X5/4690.jpg"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((item, idx) => (
          <Card selectItem={selectItem} item={item} key={idx}></Card>
        ))}
      </div>
      <div className="w-3/5">
        <Cart cartItem={cartItem} expenses={expenses}></Cart>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
