import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => { //if the allowed roles includes one of the roles (==true) than we are going to return the children whatever we are going to wrap this RequireAuth around
    const location = useLocation()
    const { roles } = useAuth()

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default RequireAuth