

import SmallNav from './../components/SmallNav';
import { Movcontext } from './PrevContext';
import { useContext } from 'react';
import MoviePrev from './MoviePrev';
import WatchNow from './../components/WatchNow';

const Header = () => {
    const data = useContext(Movcontext)

    return (

        <div style={{backgroundImage : `url(${data.image})`}} className='relative h-96 bg-center bg-no-repeat bg-cover box-border p-8 text-white'>

            {/* Contents */}
            <div className='absolute bottom-11 '>
            <MoviePrev />
            <WatchNow />


            </div>

        </div>
    );
};

export default Header;