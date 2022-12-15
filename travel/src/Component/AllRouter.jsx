import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Support from '../Pages/Support';
import Trips from '../Pages/Trips'
import Notification from '../Pages/Notification'
import SignIn from '../Pages/SignIn'
const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path='/support' element ={<Support />} />
            <Route path='/trips' element={<Trips/>} />
            <Route path='/notification' element={<Notification />}/>
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}
export default AllRouter