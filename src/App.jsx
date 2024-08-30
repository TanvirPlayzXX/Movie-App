import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import SmallNav from './components/SmallNav';
import { useEffect, useRef } from "react";

const App = () => {

  document.onselectstart = ()=>{
    event.preventDefault()
  }


  return (
    <div className="bg-[#21201E] shadow-inner">

    <div className="flex max-w-[1540px] m-auto">

      <NavBar  />

 
      <div className="basis-[82%] relative h-screen overflow-y-auto scroll-w-0 overflow-x-hidden bodys ">
      <SmallNav  />
      <Outlet />

      </div>
      </div>
    </div>
  );
};

export default App;