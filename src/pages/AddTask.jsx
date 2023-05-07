import { addTask } from "../assets/img";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FaRegCalendarAlt } from "react-icons/fa";

const AddTask = () => {
   return (
      <div id="addTask">
         <Navbar />
         <div className="container mx-auto shadow border rounded-md p-10 mt-10 flex justify-between items-center">
            <div id="left" className="w-1/2">
               <div id="heading" className="mb-5">
                  <h1 className="text-2xl font-bold">Add Task</h1>
                  <p className="text-sm text-gray-500">adding your task</p>
               </div>
               <form action="">
                  <div id="input" className="flex flex-col gap-8">
                     <div id="repositoryname" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository</label>
                        <select name="repository" id="" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full">
                           <option disabled selected>Select from watchlist</option>
                           <option value="data">Data</option>
                           <option value="data">Data</option>
                           <option value="data">Data</option>
                        </select>
                     </div>
                     <div id="releaseAssets" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Release assets</label>
                        <select name="releaseAsset" id="" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full">
                           <option disabled selected>Select from watchlist</option>
                           <option value="data">Data</option>
                           <option value="data">Data</option>
                           <option value="data">Data</option>
                        </select>
                     </div>
                     <div id="addtionalfiles" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Additional files</label>
                        <input type="file" name="addingfile" id="" className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full" multiple />
                     </div>
                     <div id="containerimage" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Container image</label>
                        <input
                           name="repositoryname"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Input container image"
                        />
                     </div>
                     <div id="runcommand" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Run command</label>
                        <input
                           name="repositoryname"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="terminal command you want to enter"
                        />
                     </div>
                     <div id="actions" className="flex items-center justify-between gap-9">
                        <button className="bg-[#1F43CF] py-3 text-white font-medium rounded-md w-1/2">Start</button>
                        <button className="bg-[#1F43CF] py-3 text-white font-medium rounded-md w-1/2 flex items-center justify-center gap-3"> <FaRegCalendarAlt />Schedule later</button>
                     </div>
                  </div>
               </form>
            </div>
            <div id="register">
               <img src={addTask} alt="" />
            </div>
         </div>
         <hr className="mt-24" />
         <Footer />
      </div>
   )
}

export default AddTask