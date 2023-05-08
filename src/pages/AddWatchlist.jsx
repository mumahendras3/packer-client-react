import { addRepository } from "../assets/img"

const AddWatchlist = () => {
   return (
      <div id="addwatchlist">
         <div className="container mx-auto shadow border rounded-md p-10 mt-10 flex justify-between items-center">
            <div id="left" className="w-1/2">
               <div id="heading" className="mb-5">
                  <h1 className="text-2xl font-bold">Add Repository</h1>
                  <p className="text-sm text-gray-500">adding repository to watchlist</p>
               </div>
               <form action="">
                  <div id="input" className="flex flex-col gap-8">
                     <div id="repositoryname" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository name</label>
                        <input
                           name="repositoryname"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Enter your repository name"
                        />
                     </div>
                     <div id="ownerName" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Repository owner name</label>
                        <input
                           name="ownerName"
                           type="text"
                           className="border border-gray-400 py-3 px-4 text-sm rounded mt-2 w-full"
                           placeholder="Enter owner name"
                        />
                     </div>
                     <div id="githubAccessToken" className="flex flex-col">
                        <label className="text-gray-500" htmlFor="">Github access token ( optional )</label>
                        <input
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
      </div>
   )
}

export default AddWatchlist