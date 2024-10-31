
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useQuery  from '@tanstack/react-query'
const GetRole = async () => {
  const { user, loading} = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user?.email)
  const { data : role = '', isLoading } = useQuery({
  queryKey: ['role', user?.email],
  enabled: !loading && !!user?.email,
  queryFn: async () => {
    const { data } = await axiosSecure.get(`/role/${user?.email}`)
    console.log(data)
    return data
  }
  })
  
  return [role, isLoading];
};

export default GetRole;