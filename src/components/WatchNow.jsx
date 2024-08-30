import { Movcontext } from '../Home/PrevContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
const WatchNow = () => {
    const data = useContext(Movcontext)

    return (
        <div className="bg-purple-800 text-white font-Poppins text-md inline-block px-5 py-3 rounded-[0.8rem]">
            <NavLink to={data.target}>Watch Now</NavLink>
        </div>
    );
};

export default WatchNow;