import { MdPlaylistAdd } from "react-icons/md";
import CardWatchlist from "../components/CardWatchlist";
import { fetchRepos } from '../store/action/actionCreator'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { watchlistEmpty } from "../assets/img";
import { Link } from "react-router-dom";

const Watchlist = () => {
   const dispatch = useDispatch();
   const repos = useSelector(state => state.repos);

   useEffect(() => {
      dispatch(fetchRepos());
   }, [dispatch]);

   return (
      <div id="watchlist">
         {
            repos.length === 0 ? (
               <div id="content" className="flex justify-center">
                  <div className="contentData">
                     <div id="image">
                        <img src={watchlistEmpty} alt="" />
                     </div>
                     <div id="title" className="text-center mt-3">
                        <h1 className="text-2xl font-semibold">Data is empty !</h1>
                        <p>Your repository watchlist is empty, add data</p>
                     </div>
                     <Link to={'/addwatchlist'}>
                        <button className="flex items-center font-medium gap-2 mx-auto bg-[#B9D5FF] text-[#1F43CF] py-1 px-8 rounded-full border border-blue-500 mt-4">
                           <MdPlaylistAdd className="text-3xl" />
                           Add Repository
                        </button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div id="content" className="mt-10">
                  <div className="container mx-auto grid grid-cols-4 gap-4">
                     {
                        repos.map(repo => {
                           return (
                              <CardWatchlist key={repo._id} repo={repo} />
                           )
                        })
                     }
                     </div>
                  </div>
            )
         }
         <hr className="mt-24" />
      </div>
   )
}

export default Watchlist