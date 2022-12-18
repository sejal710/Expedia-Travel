import {Alert,AlertIcon} from '@chakra-ui/react'
import { useLocation } from "react-router-dom";
import PlaceA from './Places/PlaceA';
const arr = ["Mumbai","Delhi","Kolkata","Chennai","Bangalore","	Hyderabad","Ahmedabad","Pune","Surat","Jaipur","Kanpur",
"Lucknow","Nagpur","Indore","Patna","Bhopal","Thane","Vadodara","Visakhapatnam","Pimpri-Chinchwad"]
const Place = () => {
const location = useLocation()
const {car,flight,going_to,checkin_date,checkout_date} = location.state;
let k ="";
arr.map((el)=>{
    if(el === going_to){
        k = el
        return k;
    }
})
    return (
        <div>
              { 
                    
               k === "" ?   <Alert status='error'>
               <AlertIcon />
               There are no available properties for your dates
             </Alert> : <PlaceA  going_to={going_to}/>
           }
        </div>
    )
}

export default Place;