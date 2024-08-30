import { NavLink } from "react-router-dom";
const CompoPart = ({arr, className}) => {
    return (
        <div className={className}>
        {
            arr.map((value,i)=>{
                let     {Name, target,Icon} = value
                return(<NavLink to={target} key={i}  className={({ isActive }) => isActive ? "my-4 flex font-bold " : "my-3 flex  font-light"
                  }>
                    <Icon className=" text-2xl mr-2 inline-block" />
                    <p className={"inline-block text-sm font-Poppins "} to={target}> {Name}</p>
                </NavLink>) 
            })
        
        }        
    </div>
    );
};

export default CompoPart;