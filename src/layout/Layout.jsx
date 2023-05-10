import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className='py-4 bg-white sticky top-0 left-0 right-0 shadow z-50'>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Layout