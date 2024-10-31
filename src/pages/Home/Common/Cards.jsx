const Cards = () => {
  return (
    <div className="bg-[#f9f9f9] w-full rounded-lg shadow p-4 flex justify-between items-start border border-gray-200">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-green-900">Product Planning</h2>
          <p className="text-sm font-medium text-gray-500">4.00 PM</p>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mt-4">
            <img
              src="https://i.pravatar.cc/32"
              alt="assigned-by"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p className="text-sm font-medium text-gray-500">Assigned by</p>
          </div>
          <p className="text-sm text-red-600 font-semibold mt-4">Due Sep 12</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
