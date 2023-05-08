import { Link } from "react-router-dom"
import { identityImg, logo } from "../assets/img"

const Navbar = () => {
   return (
      <>
         {/* <nav id="navbar" className='py-4 bg-white sticky top-0 left-0 right-0 shadow-md'>
            <div className="container mx-auto flex justify-between items-center" >
               <div id="logoBrand" className='w-2/12'>
                  <Link to={'/'}>
                     <img src={logo} className='w-[70%]' alt="" />
                  </Link>
               </div>
               <div id="menuLink" className='flex items-center gap-5'>
                  <Link to={'/'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Home</span>
                  </Link>
                  <Link to={'/watchlist'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Watclist</span>
                  </Link>
                  <Link to={'/taslist'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Task</span>
                  </Link>
               </div>
               <div id="actions" className='flex items-center gap-4'>
                  <Link to={'/login'}>
                     <button className='bg-transparent border border-[#1F43CF] py-1 px-7 rounded-md text-[#1F43CF] font-normal text-base'>Login</button>
                  </Link>
                  <Link to={'/register'}>
                     <button className='bg-[#1F43CF] py-1 px-7 font-medium] text-white font-medium rounded-md text-base'>Signup</button>
                  </Link>
               </div>
            </div >
         </nav > */}
         {/* isLogin = true */}
         <nav id="navbar" className='flex'>
            <div className="container mx-auto flex justify-between items-center" >
               <div id="logoBrand" className='w-2/12'>
                  <Link to={'/'}>
                     <img src={logo} className='w-[70%]' alt="" />
                  </Link>
               </div>
               <div id="menuLink" className='flex items-center gap-5'>
                  <Link to={'/'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Home</span>
                  </Link>
                  <Link to={'/watchlist'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Watchlist</span>
                  </Link>
                  <Link to={'/taslist'}>
                     <span className='hover:text-[#1F43CF] font-medium'>Task</span>
                  </Link>
               </div>
               <div id="actions">
                  <div className="flex gap-3 items-center">
                     <div id="name">
                        <span>Hi, Mahendra</span>
                     </div>
                     <div id="avatar">
                        <img src={identityImg} className="w-[35px] h-[35px] rounded-full object-cover" alt="" />
                     </div>
                  </div>
               </div>
            </div >
         </nav >
      </>
   )
}

export default Navbar