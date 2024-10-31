import Title from "../../Common/Title";
import PackageCard from "./PackageCard";
import PropTypes from "prop-types";
const AllSubs = ({ packages, refetch }) => {
  return (
    <div className="bg-white mb-8">
      <Title title={"All Packages"} />
      <div className="px-8 space-y-16">
        {packages?.map((item, index) => (
          <PackageCard
         
            refetch={refetch}
            index={index}
            key={item?._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
AllSubs.propTypes = {
  packages: PropTypes.array,
  refetch: PropTypes.func,
};
export default AllSubs;
