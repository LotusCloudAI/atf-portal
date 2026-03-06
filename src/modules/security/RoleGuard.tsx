import { Navigate } from "react-router-dom";

if (!allowedRoles.includes(userRole)) {
  return <Navigate to="/" />;
}
if (!user) {
  return <Navigate to="/login" />;
}
if (user.role !== allowedRole) {
    return <div>Unauthorized</div>;
}
