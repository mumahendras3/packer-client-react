import { useEffect, useState } from "react";
import { addTask } from "../assets/img";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, addTaskRequest } from "../store/action/actionCreator";

const AddTask = () => {
   const dispatch = useDispatch()
   const repos = useSelector(state => state.repos)
   const [repoId, setRepoId] = useState('');
   // console.log(repoId, '<<<<<<');
   const[form, setForm] = useState({
      repo: '',
      releaseAsset: '',
      containerImage: '',
      runCommand: '',
   })

   const [showPopup, setShowPopup] = useState(false);
   const handleShowPopup = () => setShowPopup(true);
   const handleClosePopup = () => setShowPopup(false);
   function handleSubmit(e) {
      e.preventDefault();
      console.log('submit')
   }
   function handleOnChangeRepo(event) {
      setRepoId(event.target.value);
      // console.log(repoId, '<<<<<<<<<<<');
   }

   useEffect(() => {
      dispatch(fetchRepos())
   }, [])

   function handleSubmit(e) {
      e.preventDefault()
      console.log(form)
      dispatch(addTaskRequest(form))
   }

   function handleChange(e) {
      const { name, value } = e.target
      setForm({
         ...form,
         [name]: value,
         repo:repoId
      })
   }

   return (
      <div id="addTask">
         <div className="container mx-auto shadow border rounded-md p-10 mt-10 flex justify-between items-center">
            <div id="left" className="w-1/2">
               <div id="heading" className="mb-5">
                  <h1 className="text-2xl font-bold">Add Task</h1>
                  <p className="text-sm text-gray-500">adding your task</p>
               </div>
               <form onSubmit={handleSubmit}>
                  <div id="input" className="flex flex-col gap-8">
                     <div id="repositoryname" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository</label>
                        <select value={repoId} onChange={handleOnChangeRepo} name="repo" id="" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full">
                           <option value="" defaultValue="select form watchlist">select form watchlist</option>
                           {repos.map((repo) => {
                              return (
                                 <option key={repo._id} value={repo._id}>{repo.name}</option>
                              )
                           })}
                        </select>
                     </div>
                     <div id="releaseAssets" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Release assets</label>
                        <select value={form.releaseAsset} onChange={handleChange} name="releaseAsset" id="" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full">
                           <option defaultValue='Select from endpoint'>Select from endpoint</option>
                           {repos.find(repo => repo._id === repoId)?.latestReleaseAssets.map((release) => {
                              return (
                                 <option key={release._id} value={release.name}>{release.name}</option>
                              )
                           })}
                        </select>
                     </div>
                     <div id="additionalfiles" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Additional files</label>
                        <input
                           name="addingfile"
                           type="file"
                           id=""
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full" multiple
                        />
                     </div>
                     <div id="containerimage" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Container image</label>
                        <input
                           value={form.containerImage}
                           onChange={handleChange}
                           name="containerImage"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Input container image"
                        />
                     </div>
                     <div id="runcommand" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Run command</label>
                        <input
                           value={form.runCommand}
                           onChange={handleChange}
                           name="runCommand"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="terminal command you want to enter"
                        />
                     </div>
                     <div id="actions" className="flex items-center justify-between gap-9">
                        <button className="bg-[#1F43CF] py-3 text-white font-medium rounded-md w-1/2">Start</button>
                        <button type="button" onClick={handleShowPopup} className="bg-[#1F43CF] py-3 text-white font-medium rounded-md w-1/2 flex items-center justify-center gap-3"> <FaRegCalendarAlt />Schedule later</button>
                     </div>
                     {
                        showPopup && (
                           <div id="popupShedule" className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                              <div className="bg-black bg-opacity-70 absolute w-full h-full"></div>
                              <div id="form" className="bg-white p-10 w-1/2 rounded-lg z-10 flex flex-col gap-4">
                                 <div id="date" className="flex flex-col">
                                    <label className="text-gray-500" htmlFor="">Date</label>
                                    <input
                                       name="repositoryname"
                                       type="date"
                                       className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                                       placeholder="terminal command you want to enter"
                                    />
                                 </div>
                                 <div id="time" className="flex flex-col">
                                    <label className="text-gray-500" htmlFor="">Time</label>
                                    <input
                                       name="repositoryname"
                                       type="time"
                                       className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                                       placeholder="terminal command you want to enter"
                                    />
                                 </div>
                                 <div id="actions" className="flex items-center justify-between gap-9">
                                    <button type="submit" className="bg-[#1F43CF] py-3 text-white font-medium rounded-md w-3/5">Schedule</button>
                                    <button onClick={handleClosePopup} type="button" className="bg-rose-800 py-3 text-white font-medium rounded-md w-1/5">Cencel</button>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </div>
               </form>
            </div>
            <div id="register">
               <img src={addTask} alt="" />
            </div>
         </div>
         <hr className="mt-24" />
      </div>
   )
}

export default AddTask