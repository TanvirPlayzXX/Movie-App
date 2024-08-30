import { useContext } from "react";
import { Movcontext } from "./PrevContext";

const MoviePrev = () => {
    const data = useContext(Movcontext)

    return (
        <div>
            <h2 className="font-Poppins text-5xl">{data.title}</h2>
            <p className="font-Poppins text-sm py-3">{data.details}</p>
        </div>
    );
};

export default MoviePrev;