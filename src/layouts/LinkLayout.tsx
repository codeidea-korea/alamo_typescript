import React from "react";
import {BrowserRouter, Outlet, useNavigate} from "react-router-dom";

const LinkLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};
export default LinkLayout;
