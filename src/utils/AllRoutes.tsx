import ProtectedRoute from "../component/ProtectedRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RootLayout from "../pages/RootLayout";


export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                element: <ProtectedRoute />,  
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    }
                ],
            },

            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
];
