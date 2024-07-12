import Layout from "../components/templates/Layout";
import About from "../pages/About";
import App from "../pages/App";
const routes = [
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "",
                Component: App,
            },
            {
                path: "about",
                Component: About,
            },
        ],
    },
];
export default routes;
