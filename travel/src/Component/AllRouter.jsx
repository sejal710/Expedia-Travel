import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Support from '../Pages/Support';
import Trips from '../Pages/Trips'
import Notification from '../Pages/Notification'
import SignIn from '../Pages/SignIn'
import CreateAccount from '../Pages/CreateAccount';
import Place from '../Pages/Place'
import Stays from '../Pages/Stays'
import Flight from '../Pages/Flights'
import Cars from '../Pages/Cars'
import Packages from '../Pages/Packages';
import Holidays from '../Pages/Holidays';
const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path='/support' element ={<Support />} />
            <Route path='/trips' element={<Trips/>} />
            <Route path='/notification' element={<Notification />}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route path='/place' element={<Place />} />
            <Route path='/stays' element={<Stays />} />
            <Route path='/flights' element={<Flight />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/holiday' element={<Holidays />} />
        </Routes>

    )
}
export default AllRouter