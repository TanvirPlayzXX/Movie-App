import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { movies } from "../../data";

const SmallNav = () => {



let [de,setDe] = useState(false)
let [s,setS] = useState("")
console.log(s)

let sData = movies.filter((value)=>{
 return value.title.toLowerCase().includes(s.toLowerCase())   || value.tag.toLowerCase().includes(s.toLowerCase())   
})




    return (
        
    <nav className="flex justify-between text-lg absolute z-10 w-[95%] top-7 right-10 text-white">

        <div className="basis-1/2">
            <NavLink className="px-4 hover:text-slate-300" to="/movies">Movies</NavLink>
            <NavLink className="px-4 hover:text-slate-300" to="/series">Series</NavLink>
            <NavLink className="px-4 hover:text-slate-300" to="/documentaries">Documentaries</NavLink>
        </div>

            <div className="basis-1/2 flex justify-end">

                    <div className="flex text-2xl">           
                        <div  className="relative">
                        <FiSearch onClick={()=>setDe(!de)} className={` ${de ? "bg-white text-purple-900 hover:text-purple-800 rounded-full" : ""} mx-2 cursor-pointer hover:text-slate-300`} />
                        
                        <div className={` ${ de  ? "opacity-100" : "opacity-0" } transition-all absolute bottom-0 right-full  `} >
                        <input  value={s} onChange={(e)=>setS(e.target.value)} type="text" placeholder="Search Here" className="rounded-3xl block p-2 backdrop-blur-md bg-white/5 focus:outline-none" />
                            <div className={`${s !== "" ? "block" : "hidden"}  absolute top-full p-2 rounded-2xl overflow-y-scroll bg-white text-black h-96 w-full`}>
                                {
                                    sData.map((value,i)=>{
                                        return <div key={i} className="flex cursor-pointer overflow-hidden rounded-2xl text-center  font-Poppins my-1 p-2 bg-slate-200">
                                            <div className="basis-2/5"><img className="w-full h-24 rounded-2xl " src={value.img} alt="Product" /></div>
                                            <div className="basis-3/5">
                                            <p>{value.title}</p>
                                            <p className="text-sm">{value.desc}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        
                        </div>
                        
                        
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