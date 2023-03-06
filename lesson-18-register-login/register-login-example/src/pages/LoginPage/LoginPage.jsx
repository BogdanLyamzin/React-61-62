import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {login} from "../../redux/auth/auth-operations";
import {isUserLogin} from "../../redux/auth/auth-selectors";

import LoginForm from "../../modules/LoginForm/LoginForm";

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data));
    }

    if(isLogin) {
        return <Navigate to="/my-books" />
    }

    return (
        <div className="container">
            <h1 className="page-title">Login page</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage;