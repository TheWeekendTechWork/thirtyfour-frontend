import { createHashRouter, Outlet } from "react-router-dom";
// import App from "../App";
import AboutComponent from "../pages/AboutComponent";
import ContactComponent from "../pages/ContactComponent";
import MainComponent from "../pages/MainComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const router = createHashRouter([
    {
        // path: "/",
        // element: <App />,
        path: "/",
        element: (
            <>
                <HeaderComponent />
                <Outlet />
                <FooterComponent />
            </>
        ),
        children: [
            {
                path: "/",
                element: <MainComponent />,
            },
            {
                path: "about",
                element: <AboutComponent />,
            },
            {
                path: "contact",
                element: <ContactComponent />,
            },
        ],
    },
]);

export default router;
