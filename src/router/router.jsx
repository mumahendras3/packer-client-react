import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import Watchlist from '../pages/Watchlist';
import AddWatchlist from '../pages/AddWatchlist';
import AddTask from '../pages/AddTask';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
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
]);

export default router