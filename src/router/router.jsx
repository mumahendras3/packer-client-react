import { createBrowserRouter, redirect } from "react-router-dom";

import Swal from 'sweetalert2'

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Watchlist from "../pages/Watchlist";
import AddWatchlist from "../pages/AddWatchlist";
import AddTask from "../pages/AddTask";
import Layout from "../layout/Layout";
import Tasklist from "../pages/Tasklist";

import TaskDetail from "../pages/TaskDetail";




const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (localStorage.access_token) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        return null;
      }
      return redirect("/login");
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

      {
        path: "/task/:id",
        element: <TaskDetail />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      console.log(location);
      if (!localStorage.access_token) {
        return null;
      }
      return redirect("/");
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (!localStorage.access_token) {
        return null;
      }
      return redirect("/");
    },
  },
]);

export default router;
