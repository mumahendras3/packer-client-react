import { useEffect, useState } from "react";
import { FaColumns } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  donwloadOutputBuild,
  fetchDetailTaskById,
  fetchTaskLogs,
} from "../store/action/actionCreator";

const TaskDetail = () => {
  const [viewLogs, setviewLogs] = useState(false);
  const taskDetail = useSelector((state) => {
    console.log(state.taskDetail, "<<<data skrg uda di task detail");
    return state.taskDetail;
  });
  const logs = useSelector((state) => {
    console.log(state, "<<<logs di task detail");
    return state.getLogs;
  });
  const dispatch = useDispatch();
  const params = useParams();

  function handleLogsView(id) {
    setviewLogs(!viewLogs);
    dispatch(fetchTaskLogs(id));
  }

  function downloadOutput(id) {
    // window.location.href = `http://localhost:3000/tasks/${taskDetail._id}/download`;
    dispatch(donwloadOutputBuild(id));
  }
  useEffect(() => {
    dispatch(fetchDetailTaskById(params.id));
  }, []);
  return (
    <div id="taskDetail">
      {Object.keys(taskDetail).length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="container mx-auto mt-10">
          <div id="top" className="bg-white shadow border rounded-md p-4">
            <div id="cardData">
              <div id="name" className="flex items-center gap-3">
                <FaColumns className="text-2xl" />
                <h1 className="text-2xl font-bold">{taskDetail.repo.name}</h1>
              </div>
              <hr className="border-2 border-[#001462] w-1/12 rounded-full my-2" />
              <h1>Status : {taskDetail.status}</h1>
            </div>
          </div>
          <div id="bottom">
            <div id="action" className="flex gap-4 items-center">
              <button
                onClick={() => {
                  handleLogsView(taskDetail._id);
                }}
                className="bg-[#1F43CF] px-5 py-1 rounded-md text-white my-3 text-sm"
              >
                View Logs
              </button>
              <button
                onClick={() => {
                  downloadOutput(taskDetail._id);
                }}
                className="bg-green-600 px-5 py-1 rounded-md text-white my-3 text-sm flex items-center gap-3 font-medium"
              >
                <a
                  href={`http://localhost:3000/tasks/${taskDetail._id}/download`}
                  download
                ></a>
                <AiOutlineDownload className="text-white" /> Download Build
                Output
              </button>
            </div>
            {viewLogs && (
              <div
                id="logView"
                className="bg-black rounded-md text-[#D6D8D9] text-sm p-5 shadow"
              >
                <div id="header" className="flex gap-2 items-center mb-3">
                  <div className="bg-[#FF6054] h-3 w-3 rounded-full"></div>
                  <div className="bg-[#FEBD2E] h-3 w-3 rounded-full"></div>
                  <div className="bg-[#2AC93F] h-3 w-3 rounded-full"></div>
                </div>
                <pre>{logs.length === 0 ? "Loading" : logs}</pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
