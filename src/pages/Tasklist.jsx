
const Tasklist = () => {
   return (
      // <div id="tasklist">
      //    <div id="content" className="flex justify-center">
      //       <div className="contentData">
      //          <div id="image">
      //             <img src={watchlistEmpty} alt="" />
      //          </div>
      //          <div id="title" className="text-center mt-3">
      //             <h1 className="text-2xl font-semibold">Data is empty !</h1>
      //             <p>Your watchlist task is empty, add task </p>
      //          </div>
      //          <Link to={'/addwatchlist'}>
      //             <button className="flex items-center font-medium gap-2 mx-auto bg-[#B9D5FF] text-[#1F43CF] py-1 px-8 rounded-full border border-blue-500 mt-4">
      //                <MdPlaylistAdd className="text-3xl" />
      //                Add Task
      //             </button>
      //          </Link>
      //       </div>
      //    </div>
      // </div>
      <div id="taskist" className="my-10">
         <div id="content" className="container mx-auto grid grid-cols-2 gap-4">
            <div id="cardTask" className="flex items-center justify-between bg-white shadow p-4 rounded">
               <div id="identity" className="w-2/5 flex items-center gap-3">
                  <div className="logo">
                     <img src='https://avatars.githubusercontent.com/u/1065759?s=200&v=4' className="w-[30px] h-[30px] rounded-full" alt="" />
                  </div>
                  <div className="name">
                     <h1>Mailspring</h1>
                  </div>
               </div>
               <div className="taskId">
                  Task ID : 120
               </div>
               <div className="status">
                  <span className="bg-green-600 py-1 px-5 rounded text-white text-xs">Running</span>
               </div>
            </div>
            <div id="cardTask" className="flex items-center justify-between bg-white shadow p-4 rounded">
               <div id="identity" className="w-2/5 flex items-center gap-3">
                  <div className="logo">
                     <img src='https://avatars.githubusercontent.com/u/1065759?s=200&v=4' className="w-[30px] h-[30px] rounded-full" alt="" />
                  </div>
                  <div className="name">
                     <h1>Mailspring</h1>
                  </div>
               </div>
               <div className="taskId">
                  Task ID : 120
               </div>
               <div className="status">
                  <span className="bg-orange-400 py-1 px-5 rounded text-white text-xs">Scheduled</span>
               </div>
            </div>
            <div id="cardTask" className="flex items-center justify-between bg-white shadow p-4 rounded">
               <div id="identity" className="w-2/5 flex items-center gap-3">
                  <div className="logo">
                     <img src='https://avatars.githubusercontent.com/u/1065759?s=200&v=4' className="w-[30px] h-[30px] rounded-full" alt="" />
                  </div>
                  <div className="name">
                     <h1>Mailspring</h1>
                  </div>
               </div>
               <div className="taskId">
                  Task ID : 120
               </div>
               <div className="status">
                  <span className="bg-red-800 py-1 px-5 rounded text-white text-xs">Failed</span>
               </div>
            </div>
            <div id="cardTask" className="flex items-center justify-between bg-white shadow p-4 rounded">
               <div id="identity" className="w-2/5 flex items-center gap-3">
                  <div className="logo">
                     <img src='https://avatars.githubusercontent.com/u/1065759?s=200&v=4' className="w-[30px] h-[30px] rounded-full" alt="" />
                  </div>
                  <div className="name">
                     <h1>Mailspring</h1>
                  </div>
               </div>
               <div className="taskId">
                  Task ID : 120
               </div>
               <div className="status">
                  <span className="bg-blue-700 py-1 px-5 rounded text-white text-xs">Succeeded</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Tasklist