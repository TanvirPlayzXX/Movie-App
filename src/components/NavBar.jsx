import { TbUsers } from "react-icons/tb";
import { CiHeart,CiCalendar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoIosTrendingUp } from "react-icons/io";
import { LuFilm ,LuLogOut,LuSliders,LuMessageCircle } from "react-icons/lu";
import CompoPart from "./CompoPart";



const NavBar = () => {



    // Navbar Datas
    const Navigation = [
        {
            Name: "Home",
            target:"/",
            Icon: LuFilm
        },
        {
            Name: "Favourities",
            target:"/fav",
            Icon: CiHeart
        },
        {
            Name: "Trending",
            target:"/trend",
            Icon: IoIosTrendingUp
        },
        {
            Name: "Coming Soon",
            target:"/comesoon",
            Icon: CiCalendar
        },
    ];

    const community = [
        {
            Name: "Community",
            target:"/community",
            Icon: TbUsers
        },
        {
            Name: "Social",
            target:"/social",
            Icon: LuMessageCircle
        }
    ];
    
    const functionalities = [
        {
            Name: "Settings",
            target:"/settings",
            Icon: LuSliders
        },
        {
            Name: "Log Out",
            target:"/social",
            Icon: LuLogOut
        }
    ];

    return (
        <div className="basis-[18%]  relative bg-[#21201E] z-20 p-5 text-white box-border shadow-box-shadows shadow-purple-950">

        <div className="log  w-28"><img src="https://iili.io/djvPvwv.png" className="w-full" alt="Logo" /></div>



        <CompoPart className=" mt-12" arr={Navigation} />       

        <CompoPart className=" mt-20" arr={community} />         
     
        <CompoPart className="mt-14" arr={functionalities} />       


        </div>
    );
};

export default NavBar;