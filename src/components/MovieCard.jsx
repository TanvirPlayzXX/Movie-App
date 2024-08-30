

import MoveLove from './MoveLove';

const MovieCard = () => {
    
    return (
        <div className=" cursor-pointer w-72 relative font-Poppins MovieCard overflow-hidden rounded-3xl border-2 border-white bg-red-500 h-[22rem]">
            <img className="w-full" src="https://images.unsplash.com/photo-1567604444531-c99046f757c4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Movie" />

                <MoveLove id={1} />

            <div className="h-[6rem] p-4 w-[30rem] absolute bottom-0 backdrop-blur-md linear">
        <h2 className=" font-semibold mb-2 text-xl">Tokyo</h2>
        <p className=" text-md">2022 | Action comedy</p>
            </div>
        </div>
    );
};

export default MovieCard;