import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { sessionContext } from "../services/useGetSession";
import useGetThisUser from "./useGetThisUser";

function ProtectedRoute({ children }) {

    const { user, loading } = useContext(sessionContext);
    
    

    if (loading) {
        return <div>Loading . .  .</div>
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }


    

    return children;
}

export default ProtectedRoute;