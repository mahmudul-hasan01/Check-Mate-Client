const Card = ({ count, amount, name }) => {
  return (
    <div className="bg-green-500 text-white px-8 py-6 rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="text-lg ">{name}</div>
        <div className="text-lg">{count}</div>
      </div>
      <div className="text-2xl font-bold">$ {amount}</div>
    </div>
  );
};

export default Card;
