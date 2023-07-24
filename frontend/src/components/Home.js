import { useState } from 'react';
import '../App.css';
import {auth,Provider} from '../authentication/config';
import {signInWithPopup} from 'firebase/auth';
const Home = () => {
    const [value,setValue]=useState('');
    const handleSignin = () => {

    }
    return ( 
        <div className="home">
            <button onClick={handleSignin}>SIGNIN</button>
        </div>
     );
}
 
export default Home;