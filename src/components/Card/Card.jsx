import PropTypes from "prop-types";

const Card = ({ item, selectItem }) => {
  const { name, salary, role, image } = item;
  return (
    <div className="border border-gray-500 rounded-lg p-4 max-h-fit  text-center space-y-4 bg-slate-400 bg-opacity-10">
      <img className="rounded-full w-16 mx-auto" src={image} alt="" />
      <h2 className="text-xl">{name}</h2>
      <p>
        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quibusdam facilis eveniet, voluptatum nam vero assumenda autem optio esse id?</small>
      </p>
      <div className="flex justify-around">
        <p>Salary: ${salary}</p>
        <p>{role}</p>
      </div>
      <button onClick={() => selectItem(item)} className="bg-slate-600 px-6 py-2 rounded-lg active:bg-transparent active:border">
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
