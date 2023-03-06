import { useSelector } from "react-redux";

import { getUser } from "../../../redux/auth/auth-selectors";

import styles from "./navbar-user.module.scss";

const NavbarUser = () => {
    const {name} = useSelector(getUser);

    return (
        <div>
            {name}, <button>Logout</button>
        </div>
    )
}

export default NavbarUser;