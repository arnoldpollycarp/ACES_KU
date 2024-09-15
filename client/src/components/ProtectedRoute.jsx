import {React, useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    console.log(user)
    if(!user){
        toast.error("Not authorized");
        return <Navigate to='/' />
    }

    return children;
}

export default ProtectedRoute;
