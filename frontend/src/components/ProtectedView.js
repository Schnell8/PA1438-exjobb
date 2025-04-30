import { Navigate, Outlet } from "react-router-dom";

const ProtectedView = () => {
    const token = localStorage.getItem("token");
    const isAuthenticated = !!token; // Convert token to a boolean value

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />; // Redirect to start page if not authenticated
};

export default ProtectedView;