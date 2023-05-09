import { useDispatch, useSelector } from "react-redux";
import CardTaskList from "../components/CardTaskList"
import { fetchTasks } from '../store/action/actionCreator'
import { useEffect } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { watchlistEmpty } from "../assets/img";

const Tasklist = () => {
   const dispatch = useDispatch();
   const tasks = useSelector(state => state.tasks);
   const loading = useSelector(state => state.loading);
   const error = useSelector(state => state.error);

   useEffect(() => {
      dispatch(fetchTasks());
   }, [dispatch]);

   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Error: {error.message}</p>;
   }

   return (
      <div id="tasklist" className="my-10">
         {
            tasks?.length === 0 ? (
               <div id="content" className="flex justify-center">
                  <div className="contentData">
                     <div id="image">
                        <img src={watchlistEmpty} alt="" />
                     </div>
                     <div id="title" className="text-center mt-3">
                        <h1 className="text-2xl font-semibold">Data is empty !</h1>
                        <p>Your watchlist task is empty, add task </p>
                     </div>
                     <Link to={'/addtask'}>
                        <button className="flex items-center font-medium gap-2 mx-auto bg-[#B9D5FF] text-[#1F43CF] py-1 px-8 rounded-full border border-blue-500 mt-4">
                           <MdPlaylistAdd className="text-3xl" />
                           Add Task
                        </button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div id="content" className="container mx-auto grid grid-cols-2 gap-4">
                  {tasks && (
                     tasks.map((task, index) => {
                        return (
                           <CardTaskList key={index} task={task} />
                        )
                     })
                  )
                  }
                  </div>
            )
         }
      </div>
   )
}

export default Tasklist