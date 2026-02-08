import { createBrowserRouter, Outlet } from "react-router-dom";
// import App from "../App";
import AboutComponent from "../pages/AboutComponent";
import ContactComponent from "../pages/ContactComponent";
import MainComponent from "../pages/MainComponent";
import ProjectsComponent from "../pages/ProjectsComponent";
import StoriesComponent from "../pages/StoriesComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
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
            {
                path: "projects",
                element: <ProjectsComponent />,
            },
            {
                path: "stories",
                element: <StoriesComponent />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLogin />,
    },
    {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;
