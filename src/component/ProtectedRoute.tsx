import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    // if no token → redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // else allow route access
    return <Outlet />;
};

export default ProtectedRoute;
