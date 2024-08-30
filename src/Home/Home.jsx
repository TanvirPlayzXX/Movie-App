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
            <FilterEr filter={"Trending"}/>
   
        </div>
    );
};

export default Home;