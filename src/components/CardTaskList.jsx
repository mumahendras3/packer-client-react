import PropTypes from 'prop-types';
import { FaCircle, FaRegEye } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const CardTaskList = ({ task }) => {
   const statusBG = task.status === "Created" ? "text-green-800" : (task.status === "Succeeded" ? 'text-[#033AC7]' : (task.status === "Failed" ? 'text-[#C70303]' : (task.status === "Running" ? 'text-green-700' : 'text-[#FFAF65]')));
   return (
      <div id="cardTask" className="group">
         {/* <div id="content" className='flex items-center justify-between bg-white shadow p-4 rounded'>
            <div id="identity" className="flex items-center gap-4">
               <div className="logo">
                  <img src='https://avatars.githubusercontent.com/u/1065759?s=200&v=4' className="w-[50px] h-[50px] rounded-full object-cover" alt="" />
               </div>
               <div className="name">
                  <h1 className="text-base font-medium">{task.repo.name}</h1>
                  <p className="text-xs">{task.repo.ownerName}</p>
                  <hr className="my-2" />
                  <div className="taskId text-xs">
                     Task ID : <span>{task._id}</span>
                  </div>
               </div>
            </div>
            <div className="status">
               <span className={`py-2 px-5 rounded text-white text-xs ${statusClass}`}>{task.status}</span>
            </div>
         </div> */}
         <div id="content" className='shadow border rounded-md p-2 flex items-center gap-5 relative group-hover:bg-slate-100'>
            <div id="left">
               <img src={task.repo.ownerAvatar} className='w-full h-[80px] object-cover rounded-md' alt="" />
            </div>
            <div id="right" className='flex flex-col w-full'>
               <div id="title">
                  <h1 className='font-semibold'>{task.repo.name}</h1>
                  <p className='text-xs text-gray-400'>{task.repo.ownerName}</p>
               </div>
               <hr className='w-full my-2' />
               <div id="actions" className='flex justify-between'>
                  <button className='bg-blue-800 px-5 py-1 text-white border rounded-md flex items-center gap-2 justify-center text-sm group-hover:bg-white group-hover:text-blue-800'>
                     <FaRegEye />
                     View detail
                  </button>
                  <div id="delete" className='m-2 absolute top-0 right-0 bg-red-50 p-1 rounded cursor-pointer group-hover:bg-white '>
                     <MdDelete className='text-xl text-red-800 group-hover:text-rose-800' />
                  </div>
                  <div className={`flex items-center gap-2 justify-center text-xs font-medium ${statusBG}`}>
                     <FaCircle />
                     {task.status}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

CardTaskList.propTypes = {
   task: PropTypes.shape({
      status: PropTypes.string.isRequired,
      repo: PropTypes.shape({
         name: PropTypes.string.isRequired,
         ownerName: PropTypes.string.isRequired,
         ownerAvatar: PropTypes.string.isRequired
      }).isRequired,
      _id: PropTypes.string.isRequired,
   }).isRequired,
}

export default CardTaskList;
