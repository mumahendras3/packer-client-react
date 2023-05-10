import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardWatchlist = ({ repo }) => {
   console.log(repo)
   return (
      <div id="card" className="bg-white shadow border p-4 rounded-md">
         <div id="image">
            <img src={repo.ownerAvatar} className="w-[85px] h-[85px] rounded-full object-cover border" alt="" />
         </div>
         <div id="title" className="mt-3">
            <h1 className="text-xl font-semibold">{repo.name}</h1>
            <p className="text-gray-500">Owner : {repo.ownerName} </p>
            <div id="info" className="flex items-center gap-2 text-xs text-white my-2">
               <p className="bg-green-700 px-3 rounded py-1 text-[10px]">Local : {repo.currentVersion}</p>
               <p className="bg-yellow-600 px-3 rounded py-1 text-[10px]">Upstream : {repo.latestVersion}</p>
            </div>
         </div>
         <div id="action">
            <button className="bg-[#1F43CF] w-full py-1 text-white rounded">
               <Link to={'/addtask'}>New Tasks</Link>
            </button>
         </div>
      </div>
   )
}

CardWatchlist.propTypes = {
   repo: PropTypes.shape({
      currentVersion: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ownerName: PropTypes.string.isRequired,
      latestVersion: PropTypes.string.isRequired,
   }).isRequired,
}
export default CardWatchlist