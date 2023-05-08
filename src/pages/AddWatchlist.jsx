import { useDispatch } from "react-redux"
import { addRepository } from "../assets/img"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { addRepoRequest } from '../store/action/actionCreator';
import { useState } from "react";

const AddWatchlist = () => {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [ownerName, setOwnerName] = useState('');
   const [githubAccessToken, setGithubAccessToken] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
         name,
         ownerName,
      };
      // Save the github access token in local/session storage
      if (localStorage.access_token && githubAccessToken) {
         localStorage.authorization = `Bearer ${githubAccessToken}`;
      } else if (sessionStorage.access_token && githubAccessToken) {
         sessionStorage.authorization = `Bearer ${githubAccessToken}`;
      }
      dispatch(addRepoRequest(formData));
   };
   return (
      <div id="addwatchlist">
         <Navbar />
         <div className="container mx-auto shadow border rounded-md p-10 mt-10 flex justify-between items-center">
            <div id="left" className="w-1/2">
               <div id="heading" className="mb-5">
                  <h1 className="text-2xl font-bold">Add Repository</h1>
                  <p className="text-sm text-gray-500">adding repository to watchlist</p>
               </div>
               <form action="" onSubmit={handleSubmit}>
                  <div id="input" className="flex flex-col gap-8">
                     <div id="repositoryname" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository name</label>
                        <input
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                           name="name"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Enter your repository name"
                        />
                     </div>
                     <div id="ownerName" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository owner name</label>
                        <input
                           value={ownerName}
                           onChange={(event) => setOwnerName(event.target.value)}
                           name="ownerName"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Enter owner name"
                        />
                     </div>
                     <div id="githubAccessToken" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="githubAccessToken">Github access token ( optional )</label>
                        <input
                           value={githubAccessToken}
                           onChange={(event) => setGithubAccessToken(event.target.value)}
                           name="githubAccessToken"
                           type="password"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="* * * * * *"
                        />
                     </div>
                     <button className="bg-[#1F43CF] py-3 text-white font-medium rounded-md">Add Repository</button>
                  </div>
               </form>
            </div>
            <div id="register">
               <img src={addRepository} alt="" />
            </div>
         </div>
         <hr className="mt-24" />
         <Footer />
      </div>
   )
}

export default AddWatchlist