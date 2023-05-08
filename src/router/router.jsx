import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Watchlist from '../pages/Watchlist';
import AddWatchlist from '../pages/AddWatchlist';
import AddTask from '../pages/AddTask';
import Layout from '../layout/Layout';
import Tasklist from '../pages/Tasklist';

const router = createBrowserRouter([
    {
        element: <Layout />,
        loader: () => {
            if (localStorage.access_token) {
                return null
            }
            return redirect('/login')
        },
        children: [
            {
                path: "/",
                element: <Home />,
            },
            
            {
                path: "/watchlist",
                element: <Watchlist />,
            },
            {
                path: "/addwatchlist",
                element: <AddWatchlist />,
            },
            {
                path: "/addtask",
                element: <AddTask />,
            },
            {
                path: "/tasklist",
                element: <Tasklist />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router