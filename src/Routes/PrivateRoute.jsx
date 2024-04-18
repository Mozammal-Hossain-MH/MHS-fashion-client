import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/authentication'} state={{from: location}}></Navigate>
};

export default PrivateRoute;