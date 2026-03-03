import { Navigate } from "react-router-dom";

if (!allowedRoles.includes(userRole)) {
  return <Navigate to="/" />;
}