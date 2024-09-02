

import MoveLove from './MoveLove';

const MovieCard = ({movie}) => {

    const {id,img,title,desc} = movie
 
    return (
        <div className=" cursor-pointer w-96 relative font-Poppins MovieCard overflow-hidden rounded-3xl border-2 border-white bg-red-500 h-[22rem]">
            <img className="w-full" src={img} alt="Movie" />

                <MoveLove id={id} type="drama" />

                <div className="h-[6rem] p-4 w-[30rem] absolute bottom-0 backdrop-blur-md linear">
        <h2 className=" font-semibold mb-2 text-xl">{title}</h2>
        <p className=" text-md">{desc}</p>
            </div>
        </div>
    );
};

export default MovieCard;