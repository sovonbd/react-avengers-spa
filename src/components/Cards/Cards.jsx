import PropTypes from "prop-types";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div
      className="bg-blend-overlay flex gap-5 text-white container p-10"
      style={{
        background: `url("https://i.ibb.co/JB1y0X5/4690.jpg"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((item, idx) => (
          <Card item={item} key={idx}></Card>
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
