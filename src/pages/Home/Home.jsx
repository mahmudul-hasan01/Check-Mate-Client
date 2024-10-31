import { Helmet } from "react-helmet-async";

import AdminHome from "./Admin/AdminHome";

import EmployeeHome from "./Employee/EmployeeHome";
import useRole from "../../hooks/useRole";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Home = () => {
  
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Check Mate Go</title>
      </Helmet>
      <div>
        <div className="p-4 lg:p-8">
         
          {role === "admin" && <AdminHome />}
          {role === "employee" && <EmployeeHome />}
        </div>
      </div>
    </div>
  );
};

export default Home;
