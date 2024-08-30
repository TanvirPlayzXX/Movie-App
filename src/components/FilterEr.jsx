
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';


const FilterEr = ({filter}) => {

    return (<div className=' mx-20 m-10 z-20 box-border '>
        
            <span className='font-Poppins text-3xl text-white font-semibold py-10 block'>{filter}</span>
            <Swiper
        slidesPerView={4}
        spaceBetween={250}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        <SwiperSlide ><MovieCard /></SwiperSlide>
        
      </Swiper>
      </div> 
    );
};

export default FilterEr;