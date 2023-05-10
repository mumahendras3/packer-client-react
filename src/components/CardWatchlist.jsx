import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const CardWatchlist = ({ repo }) => {
   console.log(repo)
   return (
      <div id="card" className="bg-white border p-5 rounded-md relative group hover:bg-slate-100">
         <div id="header" className='flex justify-between mb-3 items-center group-hover:text-black'>
            <div id="title">
               <h1 className='font-bold text-base'>Mailspring</h1>
               <p className='text-xs text-gray-400'>{repo.ownerName}</p>
            </div>
            <div id="delete" className='absolute right-0 top-0 m-2 bg-red-50 p-1 rounded cursor-pointer group-hover:bg-white '>
               <MdDelete className='text-xl text-red-800 group-hover:text-rose-800' />
            </div>
         </div>
         <div id="image" className='rounded-lg border shadow-md overflow-hidden'>
            <img src={repo.ownerAvatar} className='w-full h-[120px] object-cover' alt="" />
         </div>
         <div id="version" className='flex justify-between my-3  group-hover:text-black'>
            <div id="local">
               <h4 className='font-semibold text-xs'>Local</h4>
               <p className='text-xs text-gray-400'>{repo.currentVersion}</p>
            </div>
            <div id="middle" className='text-gray-400 opacity-40'>|</div>
            <div id="supstream">
               <h4 className='font-semibold text-xs'>Upstream</h4>
               <p className='text-xs text-gray-400'>{repo.latestVersion}</p>
            </div>
         </div>
         <div id="action" className='mt-6'>
            <button className='bg-blue-600 w-full rounded-md py-2 text-white flex items-center justify-center gap-4 group-hover:bg-white group-hover:border group-hover:text-blue-800'>
               <AiOutlinePlus />
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
      ownerAvatar: PropTypes.string.isRequired,
      ownerName: PropTypes.string.isRequired,
      latestVersion: PropTypes.string.isRequired,
   }).isRequired,
}
export default CardWatchlist