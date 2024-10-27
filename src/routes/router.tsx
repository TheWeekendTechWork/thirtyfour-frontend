// import { createBrowserRouter } from "react-router-dom";
import { createHashRouter, Outlet } from "react-router-dom";
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

{
    /**Uncomment this to use the browser router */
}
// const router = createBrowserRouter(routes, {
//     basename: "/thirtyfour-frontend/",
// });

{
    /**Comment this as the hash router is only for routing in github pages*/
}
const router = createHashRouter(routes, {
    basename: "/thirtyfour-frontend/",
});

export default router;
