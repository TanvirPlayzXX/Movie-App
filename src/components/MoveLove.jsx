import { useEffect, useState, useContext } from "react";
import { TbHeart,TbHeartFilled } from "react-icons/tb";
import { FavContext } from "../Home/FavContext";

import { movies } from './../../data';
const MoveLove = ({id, type}) => {

    const {deArr,setArr} = useContext(FavContext)
    const [reacts,setReact] = useState(false)


    useEffect(()=>{
    if(reacts){
setArr([...deArr, {id,type}])

    }

    },[reacts])


    return (
        <div onClick={()=>setReact(!reacts)} className=" backdrop-blur-md bg-white/70 cursor-pointer z-10 absolute top-5 right-5 text-2xl text-purple-700 rounded-2xl  hover:bg-slate-200 p-3">
        {reacts ?  <TbHeartFilled/>:<TbHeart/> }
    </div>
    );
};

export default MoveLove;