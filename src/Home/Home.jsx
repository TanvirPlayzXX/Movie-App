import { Movprovider } from './PrevContext';
import Header from './Header';
import FilterEr from './../components/FilterEr';

const Home = () => {
    return (
        <div>
            <Movprovider>
            <Header />   
            </Movprovider>

        {/* Trending Movie  Container */}
            <FilterEr filter={"trend"} typed="movie" title={"Trending"}/>
            <FilterEr filter={"trend"} typed="drama" title={"Trending"}/>
   
        </div>
    );
};

export default Home;