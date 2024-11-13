import React, { useContext } from 'react';
import { authContext } from '../components/Context/Context';

const Home = () => {
    const contextValue = useContext(authContext);
    const {user} = contextValue;
    return (
        <div>
            {/* <img src={user.photoURL(https://lh3.googleusercontent.com/a/ACg8ocJvuBj79QFeP-ckz49jQdUqs6XzVM9hF8IpiDM-NMRsgMFFhfra=s96-c)} alt="" /> */}
              <h1 className='text-green-400 text-center items-center justify-center text-5xl'> {user?.displayName}</h1>
              <h1 className='text-green-400 text-center items-center justify-center text-5xl'> {user?.email}</h1>
              {/* <h1 className='text-green-400 text-center items-center justify-center text-5xl'> {user.displayName}</h1> */}
        </div>
    );
};

export default Home;