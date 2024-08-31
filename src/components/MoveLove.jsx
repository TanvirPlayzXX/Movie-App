import { useEffect, useState } from "react";
import { TbHeart,TbHeartFilled } from "react-icons/tb";
const MoveLove = ({id}) => {

    const [reacts,setReact] = useState(false)
    useEffect(()=>{console.log(id)},[reacts])
    return (
        <div onClick={()=>setReact(!reacts)} className=" backdrop-blur-md bg-white/70 cursor-pointer z-10 absolute top-5 right-5 text-2xl text-purple-700 rounded-2xl  hover:bg-slate-200 p-3">
        {reacts ?  <TbHeartFilled/>:<TbHeart/> }
    </div>
    );
};

export default MoveLove;