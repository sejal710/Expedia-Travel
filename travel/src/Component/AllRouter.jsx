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
import PrivateRoute from './PrivateRoute';
const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path='/support' element ={<Support />} />
            <Route path='/trips' element={<Trips/>} />
            <Route path='/notification' element={<Notification />}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route path='/place' element={<PrivateRoute><Place /></PrivateRoute>} />
            <Route path='/stays' element={<PrivateRoute><Stays /></PrivateRoute>} />
            <Route path='/flights' element={<PrivateRoute><Flight /></PrivateRoute>} />
            <Route path='/cars' element={<PrivateRoute><Cars /></PrivateRoute>} />
            <Route path='/packages' element={<PrivateRoute><Packages /></PrivateRoute>} />
            <Route path='/holiday' element={<PrivateRoute><Holidays /></PrivateRoute>} />
        </Routes>

    )
}
export default AllRouter