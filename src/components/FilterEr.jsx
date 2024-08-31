
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';
import { movies } from '../../data';

import DramaCard from './DramaCard';

const FilterEr = ({filter,title,type}) => {



  let movi = movies.filter((v,i)=>{

    return v.tag == filter
  });

    if(type == "drama"){
      
    return (<div className=' mx-20 m-10 z-20 box-border '>
        
      <span className='font-Poppins text-3xl text-white font-semibold py-10 block'>{title}</span>
      <Swiper
  slidesPerView={3}
  spaceBetween={200}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation,Autoplay,Pagination]}
  className="mySwiper"
>

  {
    movi.map((value,i)=>{
      if(value.type == type){
        return <SwiperSlide key={i} ><DramaCard movie={value} /></SwiperSlide>
      }
      
    })
  }



</Swiper>
</div> 
);
    }
    else if(type == "movie"){
      return (<div className=' mx-20 m-10 z-20 box-border '>
        
        <span className='font-Poppins text-3xl text-white font-semibold py-10 block'>{title}</span>
        <Swiper
    slidesPerView={3}
    spaceBetween={200}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation,Autoplay,Pagination]}
    className="mySwiper"
  >
  
    {
      movi.map((value,i)=>{
        if(value.type == type){
          return <SwiperSlide key={i} ><MovieCard movie={value} /></SwiperSlide>
        }
        
      })
    }
  
  
  
  </Swiper>
  </div> 
  );
    }

};

export default FilterEr;