import { Outlet } from "react-router-dom";
import Nav from "../UI/Nav";

const HomeLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

export default HomeLayout;
