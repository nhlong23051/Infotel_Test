import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import("../Page/index")),
        nested: [
            { path: "/", element: lazy(() => import("../Page/HomePage")) },
            { path: "/figure1", element: lazy(() => import("../Page/Figure1")) },
            { path: "/figure2", element: lazy(() => import("../Page/Figure2")) },
            { path: "/figure3", element: lazy(() => import("../Page/Figure3")) },
            { path: "/figure4", element: lazy(() => import("../Page/Figure4")) },
        ]
    },
];

const renderRoutes = () => {
    return routes.map((route: any) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.nested.map((item: any) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};



export default renderRoutes;