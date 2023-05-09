
import PropTypes from 'prop-types';
const CardTaskList = ({ task }) => {
   const statusClass = task.status === "Created" ? "bg-[#0070AF]" : (task.status === "Succeeded" ? 'bg-[#033AC7]' : (task.status === "Failed" ? 'bg-[#C70303]' : (task.status === "Running" ? 'bg-green-700' : 'bg-[#FFAF65]')));
   return (
      <div id="cardTask" className="flex items-center justify-between bg-white shadow p-4 rounded">
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

      </div>
    </Link>
  );
};

CardTaskList.propTypes = {
   task: PropTypes.shape({
      status: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
   }).isRequired,
}

export default CardTaskList

