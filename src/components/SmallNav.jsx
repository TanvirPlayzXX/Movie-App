import { FiSearch } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { NavLink } from 'react-router-dom';


const SmallNav = () => {
    return (
        
    <nav className="flex justify-between text-lg absolute z-10 w-[95%] top-7 right-10 text-white">

        <div className="basis-1/2">
            <NavLink className="px-4 hover:text-slate-300" to="/movies">Movies</NavLink>
            <NavLink className="px-4 hover:text-slate-300" to="/series">Series</NavLink>
            <NavLink className="px-4 hover:text-slate-300" to="/documentaries">Documentaries</NavLink>
        </div>

            <div className="basis-1/2 flex justify-end">

                    <div className="flex text-2xl">                
                        <FiSearch className="mx-2 cursor-pointer hover:text-slate-300" />
                        <LuBell className="mx-2 cursor-pointer hover:text-slate-300" />
                    </div>

                    <div className="flex mx-2">
                        <img className="w-full max-w-[32px] cursor-pointer hover:text-slate-300 rounded-full" src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/454443723_453940804182657_6517144551050836694_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=NnCqL5HfTGYQ7kNvgFg0elu&_nc_ht=scontent-sin6-4.xx&oh=00_AYDmwHC8Wv0R5G-ec8k9vK_bwhsheq5UgnshKwaa_O2I2A&oe=66D659D8" alt="" />
                        <p className="mx-2 cursor-pointer hover:text-slate-300">Tetiana</p>
                    </div>


            </div>



    </nav>
        
    );
};

export default SmallNav;