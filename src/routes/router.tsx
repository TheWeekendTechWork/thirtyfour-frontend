import { createBrowserRouter, Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import MainComponent from "../components/MainComponent";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";

const routes = [
    {
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
                path: "/about",
                element: <AboutComponent />,
            },
            {
                path: "/contact",
                element: <ContactComponent />,
            },
        ],
    },
];

const router = createBrowserRouter(routes, {
    basename: "/thirtyfour-frontend/",
});

export default router;
