import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { sessionContext } from "../services/useGetSession";

function ProtectedRoute({ children }) {

    const { user } = useContext(sessionContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;