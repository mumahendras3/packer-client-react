import { Link } from "react-router-dom";

const CardTaskList = ({ task }) => {
  console.log(task, "<task di card");
  return (
    <Link
      to={`/task/${task._id}`}
      id="cardTask"
      className="flex items-center justify-between bg-white shadow p-4 rounded"
    >
      <div id="identity" className="w-2/5 flex items-center gap-3">
        <div className="logo">
          <img
            src="https://avatars.githubusercontent.com/u/1065759?s=200&v=4"
            className="w-[30px] h-[30px] rounded-full"
            alt=""
          />
        </div>
        <div className="name">
          <h1>Mailspring</h1>
        </div>
      </div>
      <div className="taskId">Task ID : 120</div>
      <div className="status">
        <span className="bg-green-600 py-1 px-5 rounded text-white text-xs">
          Running
        </span>
      </div>
    </Link>
  );
};

export default CardTaskList;
