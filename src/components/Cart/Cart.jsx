import PropTypes from "prop-types";

const Cart = ({ cartItem, expenses }) => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Castings & Costs</h1>
      <div className="py-8 space-y-2">
        {cartItem.map((item, idx) => (
          <p key={idx} className="flex justify-between">
            <span>{item.name}</span> <span className="text-end">${item.salary}</span>
          </p>
        ))}
        <hr />
        <div className="flex justify-between font-bold">
          <p>Total Expenses:</p>
          <span>${expenses}</span>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.array.isRequired,
};

export default Cart;
